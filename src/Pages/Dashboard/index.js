import { Header } from "../../components/Header";
import { Container, Mobali } from "./style";
import {
  CheckCircle,
  XCircle,
  CaretDoubleRight,
  CaretDoubleLeft,
} from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/useContext";
import { db } from "../../Config/config";
import { collection, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { LoadingAnimacao } from "../../components/Loadign/loading";

export function Dashboard() {
  const { data, setModify, loadingAnimaçao, modify } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [dataEvento, setDataEvento] = useState([]);
  const [filteredRoad, setFilteredRoad] = useState([]);
  let data1 = [];
  // numero de item por pagina
  const [itensPerPage, setItensPerPage] = useState(10);
  // escolher qual pagina
  const [currentPage, setCurrentPerPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const festa = window.localStorage.getItem("evento");

  useEffect(() => {
    async function getIngressos() {
      const usersCollectionRef = collection(db, festa);
      const order = query(usersCollectionRef, orderBy("count", "asc"));
      const querySnapshot = await getDocs(order);
      //const order = query(querySnapshot, orderBy("count", "asc"));
      setDataEvento(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    setModify(false);
    getIngressos();
  }, [modify]);

  if (dataEvento) {
    dataEvento.map((rodovia) => {
      data1.push(rodovia);
    });
  }

  // verificar o numero de paginas
  const pages = Math.ceil(data1.length / itensPerPage);
  // fatia o array de itens
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;

  // fatia o inicio ao final
  const currentItens = data1.slice(startIndex, endIndex);

  async function verifyTickets(id) {
    const washingtonRef = doc(db, festa, id);
    try {
      await updateDoc(washingtonRef, {
        active: true,
      });

      setModify(true);
      setLoading(false);
      //  window.location.reload();
    } catch {}
  }

  // filtro de pesdquisa
  useEffect(() => {
    if (dataEvento) {
      if (dataEvento.length > 0) {
        setFilteredRoad(
          dataEvento.filter((item) => item.count.toString().includes(search))
        );
      }
    }
  }, [search]);

  function usedTickets() {
    let useed = 0;
    dataEvento.map((item) => {
      if (item.active === true) {
        useed++;
      }
    });

    return useed;
  }

  function notUsedTickets() {
    let notUsed = 0;

    dataEvento.map((item) => {
      if (item.active === false) {
        notUsed++;
      }
    });

    return notUsed;
  }



  return (
    <>
      {loadingAnimaçao ? (
        <LoadingAnimacao />
      ) : (
        <>
          <Header />
          <Container>
            <h1>{festa}</h1>
            <header>
              <ul>
                <li>
                  <div>
                    <span>Confirmados</span>
                    <CheckCircle size={25} color={"var(--green-300)"} />
                  </div>
                  <strong>{usedTickets()}</strong>
                </li>
                <li>
                  <div>
                    <span>Restantes</span>
                    <XCircle size={25} color={"var(--red-300)"} />
                  </div>
                  <strong>{notUsedTickets()}</strong>
                </li>
                <li>
                  <div>
                    <span>Total de Ingressos</span>
                  </div>
                  <strong>{dataEvento.length}</strong>
                </li>
              </ul>
            </header>
            <span className="inputHerader">
              <input
                type="search"
                placeholder="Buscar Ingresso"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              <a href="/qrcode">Qr-code</a>
            </span>

            {data1.length === 0 ? 
            <h2>Não Possui Ingressos</h2> :  
            <table>
              <thead>
                <tr>
                  <th className="primeryTD">Nº </th>
                  <th>Valor</th>
                  <th>Tipo</th>
                  <th className="acoes">Ações</th>
                </tr>
              </thead>
              <tbody>
                {search.length > 0
                  ? filteredRoad.map((item) => {
                      return (
                        <tr>
                          <td>{item.count}</td>
                          <td>
                            {Number(item.money).toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </td>
                          <td>{item.type}</td>
                          <td>
                            {item.active ? (
                              <button
                                style={{
                                  background: "transparent",
                                  color: "#78BAAE",
                                  fontSize: "1rem",
                                }}
                              >
                                Verificado
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  verifyTickets(item.id);
                                }}
                              >
                                Confirmar
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  : currentItens.map((item, index) => {
                      return (
                        <tr>
                          <td>{item.count}</td>
                          <td>
                            {Number(item.money).toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </td>
                          <td>{item.type}</td>
                          <td>
                            {item.active ? (
                              <button
                                style={{
                                  background: "transparent",
                                  color: "#78BAAE",
                                  fontSize: "1rem",
                                }}
                              >
                                Verificado
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  verifyTickets(item.id);
                                  setLoading(true);
                                }}
                              >
                                Confirmar
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>}
            
            {data1.length === 0 ? "" :
            <>
            {search > 0 ? (
              ""
            ) : (
              <div className="paginacao">
                <span>
                  {currentPage == 0 ? (
                    <button
                      disabled
                      className="Anterior"
                      style={{
                        background: "transparent",
                        boxShadow: "none",
                      }}
                    >
                      <CaretDoubleLeft color=" #9baebf" size={18} />
                    </button>
                  ) : (
                    <button
                      className="Anterior"
                      onClick={() => {
                        setCurrentPerPage(currentPage - 1);
                      }}
                    >
                      <CaretDoubleLeft size={18} />
                    </button>
                  )}

                  {Array.from(Array(pages), (item, index) => {
                    return (
                      <button
                        style={
                          index == currentPage
                            ? {
                                background: "var(--gray-100)",
                                color: "var(--gray-400)",
                              }
                            : null
                        }
                        className="paginationButton"
                        value={index}
                        onClick={(e) => setCurrentPerPage(e.target.value)}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                  {currentPage == pages - 1 ? (
                    <button disabled className="Anterior">
                      <CaretDoubleRight color=" #9baebf" size={18} />
                    </button>
                  ) : (
                    <button
                      className="Anterior"
                      onClick={() => {
                        setCurrentPerPage(currentPage + 1);
                      }}
                    >
                      <CaretDoubleRight size={18} />
                    </button>
                  )}
                </span>
              </div>
            )}
            </>
          }
          </Container>

          <Mobali>
            {search.length > 0
              ? filteredRoad.map((item) => {
                  return (
                    <ul>
                      <li>
                        Nº: <p>{item.count}</p>
                      </li>
                      <li>
                        Valor:{" "}
                        <p>
                          {Number(item.money).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </li>
                      <li>
                        Tipo: <p>{item.type}</p>
                      </li>
                      <li>
                        {item.active ? (
                          <button
                            style={{
                              background: "#78BAAE",
                              color: "#fff",
                              fontSize: "1rem",
                            }}
                          >
                            Verificado
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              verifyTickets(item.id);
                            }}
                          >
                            Confirmar
                          </button>
                        )}
                      </li>
                    </ul>
                  );
                })
              : currentItens.map((item) => {
                  return (
                    <ul>
                      <li>
                        Nº: <p>{item.count}</p>
                      </li>
                      <li>
                        Valor:{" "}
                        <p>
                          {Number(item.money).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </li>
                      <li>
                        Tipo: <p>{item.type}</p>
                      </li>
                      <li>
                        {item.active ? (
                          <button
                            style={{
                              background: "#78BAAE",
                              color: "#fff",
                              fontSize: "1rem",
                            }}
                          >
                            Verificado
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              verifyTickets(item.id);
                            }}
                          >
                            Confirmar
                          </button>
                        )}
                      </li>
                    </ul>
                  );
                })}

            {data1.length === 0 ? "" : 
            <>
               {search > 0 ? (
              ""
            ) : (
              <div className="paginacaoMobile">
                <span>
                  {currentPage == 0 ? (
                    <button
                      disabled
                      className="Anterior"
                      style={{
                        background: "transparent",
                        boxShadow: "none",
                      }}
                    >
                      <CaretDoubleLeft color=" #9baebf" size={18} />
                    </button>
                  ) : (
                    <button
                      className="Anterior"
                      onClick={() => {
                        setCurrentPerPage(currentPage - 1);
                      }}
                    >
                      <CaretDoubleLeft size={18} />
                    </button>
                  )}

                  {Array.from(Array(pages), (item, index) => {
                    return (
                      <button
                        style={
                          index == currentPage
                            ? {
                                background: "var(--blue-400)",
                                color: "var(--white)",
                              }
                            : null
                        }
                        className="paginationButton"
                        value={index}
                        onClick={(e) => setCurrentPerPage(e.target.value)}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                  {currentPage == pages - 1 ? (
                    <button disabled className="Anterior">
                      <CaretDoubleRight color=" #9baebf" size={18} />
                    </button>
                  ) : (
                    <button
                      className="Anterior"
                      onClick={() => {
                        setCurrentPerPage(currentPage + 1);
                      }}
                    >
                      <CaretDoubleRight size={18} />
                    </button>
                  )}
                </span>
              </div>
            )}
            </>}
          </Mobali>
        </>
      )}
    </>
  );
}
