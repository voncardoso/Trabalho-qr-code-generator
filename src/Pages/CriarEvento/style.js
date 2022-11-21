import styled from "styled-components";

export const Container = styled.section`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 80px;

        div{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(160px, 264px));
                gap: 20px;
                width: 100%;

                .addEvento{
                        background: transparent;
                        border: 2px dashed var(--gray-300);
                        border-radius: 10px;
                        color: var(--gray-300);
                        cursor: pointer;
                        svg{
                                width: 100%;
                                margin: 0 auto;
                        }

                        p{
                                margin-bottom: 10px;
                        }
                }

                a{
                        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                        text-decoration: none;
                        background: var(--white);
                        border-radius: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    

                        img{
                                width: 100%;
                                padding: 10px;
                        }

                        p{
                                padding: 5px 0px 10px;
                        }
                }

        }
`;