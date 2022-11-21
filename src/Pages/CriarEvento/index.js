import { Header } from "../../components/Header";
import {PlusCircle} from "phosphor-react"
import { Container } from "./style";
import { Link } from "react-router-dom";
import fotoEvento from "../../assets/foto-evento.png"
import Modal from "react-modal";
import { useState } from "react";
import { async } from "@firebase/util";
import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../Config/config";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/useContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function CriarEvento(){
    const { data, setModify, loadingAnimaçao } = useContext(UserContext);
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [img, setImeg] = useState("");
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("");
    const [idUser, setIdUser] = useState("");
    const auth = getAuth();

    useEffect(() =>{
        setModify(false)

        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setIdUser(uid)
            } else {
              // User is signed out
              // ...
            }
          });
    }, [])


    function handleOpenModal() {
        setIsActiveModal(true);
      }
    
      function handleCloseModal() {
        setIsActiveModal(false);
      }

    async function handleSubmitEvent(event){
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "eventos"), {
                titulo: title,
                date: date,
                user: idUser
            });
    
           // setModify(true);
           // setMoney("");
          //  setType("");
          console.log("foi")
          } catch (e) {
            console.error("Error adding document: ", e);
          }

          try{
            const docRef = await addDoc(collection(db, title), {
            });
            console.log("foi2")
          }catch (e) {
            console.error("Error adding document: ", e);
          }
      }

     console.log(data)
    return(
        <>
            <Header />
            <Container>
                <div>
                    <button 
                        className="addEvento"
                        onClick={handleOpenModal}
                    >
                        <PlusCircle size={80} color="#9BAEBF" weight="thin"/>
                        <p>Adicionar Evento</p>
                    </button>
                    {data.map((item) =>{
                      if(item.user === idUser){
                        return(
                          <Link to={`/dashboard`} onClick={(() =>{
                              window.localStorage.setItem("evento", item.titulo)
                          })}>
                              <img src={fotoEvento} alt="" />
                              <p>{item.titulo}</p>
                              <p>{item.date}</p>
                          </Link>
                          )
                      }
                    })}
                </div>
            </Container>

            <Modal
            isOpen={isActiveModal}
            onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          >
            <form onSubmit={handleSubmitEvent}>
              <h3>Cadastro de ingresso</h3>
              <label htmlFor="">Nome do evento</label>
              <input
                required
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            <label htmlFor="">Data</label>
              <input
                required
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />

              <label htmlFor="">Imagem</label>
              <input
                type="file"
                value={img}
                onChange={(event) => setImeg(event.target.value)}
              />
              <button type="submit" className="buttonAdd">
                Cadastrar
              </button>
            </form>
          </Modal>
        </>
    )
}