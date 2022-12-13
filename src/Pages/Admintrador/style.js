import styled from "styled-components";

export const Container = styled.section`
  max-width: 68rem;
  width: 100%;
  margin: 0 auto;
  padding: 0px 10px;
  color: var(--gray-300);
  h1{
    position: relative;
    top: -100px;
    text-align: center;
    font-size: 2rem;
    border-top: 1px solid var(--gray-300);
      border-bottom: 1px solid var(--gray-300);
      padding:10px ;
  }
  header {
    ul {
      position: relative;
      top: -70px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px;
      padding: 10px 10px;
      overflow-x: auto;
      li {
        max-width: 400px;
        min-width: 300px;
        width: 100%;
        border-radius: 10px;
        padding: 20px 30px;
        background: var(--gray-400);
        box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 25%);
        div {
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          background: var(--gray-400);
          svg {
            height: 100%;
          }
        }

        strong {
          font-size: 2rem;
          color: var(--gray-200);
        }

        span {
          color: var(--gray-300)
        }
      }
    }
  }
  .inputHerader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    input {
      padding: 5px;
      border-radius: 5px;
      font-size: 1rem;
      margin-bottom: 20px;
      color: var(--gray-100);
      background: var(--gray-500);
      padding: 0.5rem;
      border: none;
    }

    .buttonAdd {
      position: relative;
      margin-bottom: 20px;
      padding: 8px 20px;
      border-radius: 5px;
      background-color: var(--blue-400);
      border: none;
      color: var(--white);
    }

    .buttonAdd:hover {
      background-color: rgba(19, 94, 159, 90%);
    }
  }

  table {
    margin: 0 auto;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: auto;
    margin-bottom: 10px;
    thead,
    th {
      text-align: center;
      font-weight: bold;
      color: var(--gray-300);
      padding: 10px 8px;
      font-size: 1.125rem;
      text-align: left;
      padding: 10px 30px;
    }

    th:last-child {
      width: 60px;
      text-align: center;
    }

    tbody {
      border-radius: 10px;
      tr {
        margin-bottom: 40px;

        td {
          font-size: 1.125rem;
          background: var(--gray-500);
          max-width: 200px;
          width: 25%;
          padding: 10px 30px;
          border-bottom: 5px solid var(--background);
          height: 60px;
          color: var(--gray-200);
          button {
            background: var(--blue-400);
            padding: 10px 20px;
            color: var(--white);
            font-weight: 600;
            border: none;
            border-radius: 5px;
          }

          ul {
            display: flex;
            justify-content: space-between;
            li {
              cursor: pointer;
            }
          }
        }
        td:last-child {
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
          text-align: center;

          ul {
            display: flex;
            justify-content: space-between;
            gap: 10px;
          }
        }

        td:first-child {
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;
        }
      }
    }
  }
  .paginacao {
    background: transparent;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin: 0 auto;
      display: flex;
      gap: 10px;

      button {
        display: flex;
        align-items: center;
        align-self: center;
        width: 100%;
        height: 100%;
        background: var(--gray-400);
        border: none;
        border-radius: 50%;
        position: relative;
        margin: 0 auto;
        padding: 4px 8px;
        box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 25%);
        color: var(--gray-100);
      }
      button:hover {
        background: var(--gray-100);
        color: #fff;
      }

      button:last-child {
        background: transparent;
      }

      .Anterior {
        padding: 0px;
        align-self: center;
        cursor: pointer;
        font-size: 0.875rem;
        background: transparent;
        box-shadow: none;
      }
      .Anterior:hover {
        background: transparent;
        background: transparent;
        color: var(--blue-400);
      }
    }
  }

  div {
    background: var(--white);
    border-radius: 10px;
    color: #9baebf;
    display: none;
    ul {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 20px;
      li {
        color: var();
        display: flex;
        padding: 10px 0px;
        P {
          margin-left: 10px;
          color: var(--text);
        }

        button {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 10px;
          background: var(--blue-400);
          color: var(--white);
        }
      }

      li:last-child {
        grid-column: 1 / 4;
      }

      .valor {
        grid-column: 1 / 2;
      }

      .area {
        width: 110px;
        position: relative;
        left: 10px;
      }
    }
  }

  @media (max-width: 1184px) {
    header {
      ul {
        gap: 30px;
        li {
          strong {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  @media (max-width: 823px) {
    padding: 0px 40px;
    header {
      ul {
        gap: 30px;
        li {
          width: 250px;
        }
      }
    }
  }

  @media (max-width: 823px) {
    header {
      ul {
        li {
          min-width: 200px;
        }
      }
    }
  }

  @media (max-width: 728px) {
    padding: 0px 20px;
    table {
      width: 80vw;
    }
  }

  @media (max-width: 600px) {
    table {
      display: none;
    }
  }

  @media (max-width: 556px) {
    padding: 0px 0px;
    header {
      padding: 0px 0px;
    }
    .inputHerader {
      padding: 0 0px;
    }
    table {
      th {
        font-size: 1rem;
      }

      tbody {
        td {
          font-size: 0.875rem;

          button {
            font-size: 0.875rem;
            font-weight: 400;
            padding: 10px 10px;
          }
        }
      }
    }
  }

  @media (max-width: 540px) {
    padding: 0px 20px;
    table {
      display: none;
    }
  }

  @media (max-width: 490px) {
    div {
      display: block;
    }
    table {
      display: none;
    }
  }

  @media (max-width: 425px) {
    .inputHerader {
      input {
        max-width: 200px;
        width: 100%;
        margin-right: 40px;
      }
    }
  }
`;

export const Mobali = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 0px 20px;
  display: none;
  font-size: 1rem;
  ul {
    background: var(--gray-400);
    margin-bottom: 10px;
    padding: 5px 10px;
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0px;
      color: var(--gray-200);
      gap: 5px;

      p {
        color: var(--gray-100);
      }
    }

    .ststusLi {
      grid-column: 1/4;
      text-align: justify;
      align-items: start;
    }

    li:last-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      grid-column: 1/4;

      margin: 0px 55px;
    }
  }

  .paginacaoMobile {
    background: transparent;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin: 0 auto;
      display: flex;
      gap: 10px;

      button {
        display: flex;
        align-items: center;
        align-self: center;
        width: 100%;
        height: 100%;
        background: #fff;
        border: none;
        border-radius: 50%;
        position: relative;
        margin: 0 auto;
        padding: 4px 8px;
        box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 25%);
        color: var(--blue-400);
      }
      button:hover {
        background: var(--blue-400);
        color: #fff;
      }

      button:last-child {
        background: transparent;
      }

      .Anterior {
        padding: 0px;
        align-self: center;
        cursor: pointer;
        font-size: 0.875rem;
        background: transparent;
        box-shadow: none;
      }
      .Anterior:hover {
        background: transparent;
        background: transparent;
        color: var(--blue-400);
      }
    }
  }

  @media (max-width: 600px) {
    display: block;
  }
`;
