import styled from "styled-components";

export const Container = styled.section`
        max-width: 68rem;
        width: 100%;
        margin: 0 auto;
       
        display: flex;
        align-items: flex-start;

        div{
                position: relative;
                top: -50px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(160px, 200px));
                gap: 20px;
                width: 100%;
                .addEvento{
                        max-width: 220px;
                       
                        background: transparent;
                        border: 2px dashed var(--gray-300);
                        border-radius: 10px;
                        color: var(--gray-300);
                        cursor: pointer;
                        padding: 20px;
                        svg{
                                width: 100%;
                                margin: 0 auto;
                        }

                        p{
                                margin-bottom: 10px;
                        }
                }

                a{
                        max-width: 220px;
                        width: 100%;
                        
                        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                        text-decoration: none;
                        background: var(--gray-400);
                        border-radius: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        img{
                                width: 95%;
                                padding: 10px;
                        }

                        p{
                                text-align: center;
                                width: 100%;
                                padding: 10px;
                                color: var(--gray-100);
                        }

                        p:last-child{
                                border-top: 1px solid  var(--gray-300);
                        }
                }

                a:hover{
                    background: rgba(38, 38, 38, 0.70)
                }

        }
`;