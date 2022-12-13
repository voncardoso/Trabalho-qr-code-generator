import styled from "styled-components";

export const Container = styled.header`
  margin-bottom: 148px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--gray-700);
  nav {
    max-width: 68rem;
    width: 100%;
    display: flex;

    margin: 0 auto;
    padding: 20px 0px;
    justify-content: space-between;

    h2 {
      width: 100%;
      background: red;
      position: fixed;
      color: var(--blue-400);
      z-index: 1;
      top: 0;
      left: 0;
      height: 60px;
      background: var(--background);
      text-align: center;
      padding-top: 20px;
      display: none;
    }

    div {
      display: flex;
      align-items: center;
      padding: 5px 0px;
      a {
        color: var(--white);
        margin-left: 60px;
        font-size: 1rem;
        text-decoration: none;
        svg {
          position: relative;
          top: 2px;
          height: 100%;
        }
      }
      a.isActive::after {
        content: "";
        display: block;
        margin-top: 2px;
        width: 100%;
        height: 2px;
        background: var(--white);
      }

      a:hover::after {
        content: "";
        display: block;
        margin-top: 2px;
        width: 100%;
        height: 2px;
        background: var(--white);
      }

      button {
        display: flex;
        align-items: center;
        border: none;
        margin-left: 60px;
        font-size: 1rem;
        background: none;
        color: var(--white);
        p {
          margin-right: 5px;
        }
      }
    }

    .button-menu-mobile {
      display: none;
   
    }
  }

  .menu-mobile {
    display: none;

    nav {
      display: none;
    }
  }

  .activeAdm {
  }

  @media (max-width: 823px) {
    padding: 0px 0px;
   // height: 170px;

    nav {
      padding: 20px 10px;
      padding-bottom: 10px;
      background: none;

      h2 {
        display: block;
        color: var(--gray-100);
      }

      div {
        flex-direction: column;
        align-items: center;
        a {
          margin-left: 30px;
          font-size: 0.875rem;
          display: none;
        }

        button {
          margin-left: 30px;
          font-size: 0.875rem;
          display: none;
        }

        a:hover::after {
          content: none;
        }
      }

      .button-menu-mobile {
        display: block;
        color: var(--white);
        background: none;
        border: none;
        z-index: 2000;
        position: fixed;
      }
    }

    .menu-mobile {
      position: relative;
      z-index: 1;

      div {
        position: fixed;
        top: 0px;
        width: 100%;
        height: 100vh;

        background: rgb(38, 38, 38, 60%);
        z-index: 2;
        nav {
          z-index: 20000;
          width: 150px;
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0px;
          background: var(--gray-500);
          height: 100vh;

          ul {
            margin-top: 80px;
            li {
              padding: 20px 10px;
              a {
                color: var(--white);
                text-decoration: none;
              }

              button {
                display: flex;
                background: none;
                color: var(--white);
                border: none;

                align-items: center;

                p {
                  margin-right: 5px;
                  font-size: 1rem;
                }
              }
            }

            .isActive {
              width: 100px;

              border-bottom: 1px solid var(--white);
            }
          }
        }
      }
    }
  }
`;
