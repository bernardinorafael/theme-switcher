import styled from "styled-components"
import ReactSwitch from "react-switch"

export const Switch = styled(ReactSwitch)`
   position: relative;

   svg {
      position: absolute;
      top: 0;
      right: 0;
   }
`

export const Container = styled.main`
   align-items: center;
   background: ${(props) => props.theme.colors.backgroundMain};
   display: flex;
   flex-direction: column;
   height: 100vh;
   width: 100%;
`

export const Content = styled.section`
   align-items: center;
   background: ${(props) => props.theme.colors.backgroundSecondary};
   border-radius: 8px;
   border: 1px solid ${(props) => props.theme.colors.outlineColor};
   box-shadow: 10px 10px 18px -6px rgba(0, 0, 0, 0.5);
   display: flex;
   flex-direction: column;
   left: 50%;
   padding: 2rem 1rem;
   position: fixed;
   top: 50%;
   transform: translate(-50%, -50%);
   user-select: none;
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

      a {
         align-items: center;
         border-radius: 8px;
         color: ${(props) => props.theme.colors.text};
         display: flex;
         font-weight: 500;
         gap: 0.5rem;
         padding: 0.5rem 1rem;

         &:hover {
            background: ${(props) => props.theme.colors.backgroundMain};
            transition: 0.3s;
         }

         svg {
            &:active {
               transform: scale(1.1);
               transition: 0.3s;
            }
         }
      }
   }
`
