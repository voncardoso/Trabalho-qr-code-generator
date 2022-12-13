import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  align-items: center;
  justify-items: center;
  max-width: 100%;
  margin: 0 auto;
  color: var(--gray-100);

  form {
    display: flex;
    flex-direction: column;
    max-width: 515px;
    width: 100%;
    gap: 30px;
    padding: 0 30px;

    p {
      margin-top: 60px;
      text-align: center;
    }

    .error {
      width: 100%;
      border: 1px solid var(--red-200);
      padding: 10px;
      border-radius: 5px;
      text-align: center;
      font-weight: bold;
      color: var(--red-200);
    }

    h1 {
      margin-bottom: 20px;
      font-size: 30px;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 100%;

      input {
        margin-top: 10px;
        height: 30px;
        border-radius: 10px;
        border: transparent;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 20px 10px;
        padding: 1.5rem;
        font-size: 1rem;
        background: var(--gray-500);
        color: var(--gray-100);
      }

      input:focus {
        outline-color: rgb(245, 198, 28);
        background-color: var(--gray-500);
      }

      .iconViewPasswor {
        z-index: 2;
        position: relative;
        left: 90%;
        top: -32px;
        cursor: pointer;
        color: var(--gray-300);
      }
    }

    button {
      background: rgb(245, 198, 28);
      border-radius: 10px;
      border: transparent;
      color: white;
      font-size: 20px;
      font-weight: bold;
      font-size: 1rem;
      padding: 1rem; 
    }
  }

  .containerImg {
    width: 100%;
    overflow: hidden;
    height: 100vh;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }

  a{
    color: var(--gray-100);
  }

  @media (max-width: 890px) {
    grid-template-columns: 1fr;

    .containerImg {
      display: none;
    }
  }
`;
