import styled from "styled-components"

export const Container = styled.main`
   background: ${(props) => props.theme.colors.backgroundMain};
   height: 100vh;
   width: 100%;
   display: flex;
   align-items: center;
   flex-direction: column;
`

export const Content = styled.section`
   align-items: center;
   background: ${(props) => props.theme.colors.backgroundSecondary};
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   left: 50%;
   padding: 2rem 1rem;
   position: fixed;
   top: 50%;
   transform: translate(-50%, -50%);
   width: 400px;

   img {
      margin-top: 3rem;
      border-radius: 50%;
   }

   h1 {
      margin-top: 2rem;
      font-weight: 700;
   }

   span {
      color: #6c757d;
   }

   section {
      align-items: center;
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
   }
`
