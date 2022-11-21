import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "./style";
import { getAuth, signOut } from "firebase/auth";
import { SignOut, List } from "phosphor-react";
import styled from "styled-components";
import { getElementError } from "@testing-library/react";
import { useEffect, useState } from "react";

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [styleAdministrador, setStyleAdministrador] = useState(false);
  const [styleDashboard, setStyleDashboard] = useState(false);
  const [styleUser, setStyleUser] = useState(false);
  const [styleEvento, setStyleEvento] = useState(false);
  const [isActiveMenuMobilemenuMobile, setIsActiveMenuMobile] =
    useState("none");
  const [isActiveButtonMobile, setIisActiveButtonMobile] = useState(false);
  const [isActiveTitle, setIisActiveTitle] = useState(false);

  useEffect(() => {
    function routeStyle() {
      if (pathname === "/administrador") {
        setStyleAdministrador(true);
      }
      if (pathname === "/dashboard") {
        setStyleDashboard(true);
      }
      if (pathname === "/user") {
        setStyleUser(true);
      }
      if (pathname === "/evento") {
        setStyleEvento(true);
      }
    }
    routeStyle();
  }, [pathname]);

  function Logout() {
    const auth = getAuth();
    let response = window.confirm("Certeza que deseja sair ?");

    if (response === true) {
      signOut(auth)
        .then(() => {
          window.localStorage.removeItem("login");
          navigate("/");
        })
        .catch((error) => {
          // An error happened.
        });
    }
  }

  return (
    <Container>
      <nav>
        <h1></h1>
        {isActiveButtonMobile ? (
          <button
            className="button-menu-mobile"
            onClick={() => {
              setIisActiveButtonMobile(false);
              if (isActiveMenuMobilemenuMobile === "none")
                setIsActiveMenuMobile("block");
              if (isActiveMenuMobilemenuMobile == "block")
                setIsActiveMenuMobile("none");
            }}
          >
            <List size={32} />
          </button>
        ) : (
          <button
            className="button-menu-mobile"
            onClick={() => {
              setIisActiveButtonMobile(true);
              if (isActiveMenuMobilemenuMobile === "none")
                setIsActiveMenuMobile("block");
              if (isActiveMenuMobilemenuMobile == "block")
                setIsActiveMenuMobile("none");
            }}
          >
            <List size={32} color={"var(--blue-400)"} />
          </button>
        )}
        {styleEvento ? <h2>Evento</h2> : <>{styleDashboard ? <h2>Dashboard</h2> : <h2>Administrador</h2> }</>}
        
        <div>
          {styleEvento ? (
            <Link className="isActive" to="/evento">
              Eventos
            </Link>) : (<Link to="/evento">
              Eventos
            </Link>)
          }

          {styleEvento ? "" : (<>          
            {styleDashboard ? (
              <Link className="isActive" to="/dashboard">
                Dashboard
              </Link>
            ) : (
              <Link to="/dashboard">Dashboard</Link>
            )}

            {styleAdministrador ? (
              <Link className="isActive" to="/administrador">
                Administrador
              </Link>
            ) : (
              <Link to="/administrador">Administrador</Link>
            )}</>)
          }


          <button onClick={Logout}>
            <p>Sair</p>
            <SignOut size={20} />
          </button>
        </div>
      </nav>

      <section
        className="menu-mobile"
        style={{ display: isActiveMenuMobilemenuMobile }}
      >
        <div
          onClick={() => {
            setIisActiveButtonMobile(false);
            if (isActiveMenuMobilemenuMobile === "none")
              setIsActiveMenuMobile("block");
            if (isActiveMenuMobilemenuMobile == "block")
              setIsActiveMenuMobile("none");
          }}
        >
          <nav>
            <ul style={{ display: isActiveMenuMobilemenuMobile }}>
              <li>
                {styleEvento ? (
                  <Link className="isActive" to="/evento">
                    Eventos
                  </Link>) : (<Link to="/evento">
                    Eventos
                </Link>)
                }
              </li>
              {styleEvento ? "" : (<>              
                  <li>
                    {styleDashboard ? (
                      <Link className="isActive" to="/dashboard">
                        Dashboard
                      </Link>
                    ) : (
                      <Link to="/dashboard">Dashboard</Link>
                    )}
                  </li>
                  <li>
                    {styleAdministrador ? (
                      <Link className="isActive" to="/administrador">
                        Administrador
                      </Link>
                    ) : (
                      <Link to="/administrador">Administrador</Link>
                    )}
                  </li>
              </>)}
              <li>
                {" "}
                <button onClick={Logout}>
                  <p>Sair</p>
                  <SignOut size={20} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </Container>
  );
}
