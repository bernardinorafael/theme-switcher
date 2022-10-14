import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Container, Content } from "./styles"

import { useContext } from "react"
import ReactSwitch from "react-switch"
import { ThemeContext } from "styled-components"
import imagePerfil from "../../assets/image.jpeg"

interface CardProfileProps {
   toggleTheme: () => void
}

export function CardProfile({ toggleTheme }: CardProfileProps) {
   const { colors, name } = useContext(ThemeContext)

   return (
      <Container>
         <Content>
            <ReactSwitch
               checked={name === "dark"}
               handleDiameter={40}
               offHandleColor={colors.text}
               height={30}
               offColor={colors.backgroundToggleButton}
               onChange={toggleTheme}
               onColor={colors.backgroundToggleButton}
               width={80}
               uncheckedIcon={false}
               checkedIcon={false}
            />
            <img height={120} src={imagePerfil} alt="" />

            <h1>Rafael Bernardino</h1>
            <span>Desenvolvedor Front-end</span>

            <section>
               <a href="https://github.com/bernardinorafael" rel="noreferrer" target="_blank">
                  <FaGithub size={30} />
                  <p>Github</p>
               </a>

               <a
                  href="https://www.linkedin.com/in/rafabernardino/"
                  rel="noreferrer"
                  target="_blank"
               >
                  <FaLinkedin color="#1b98e0" size={30} />
                  <p>LinkedIn</p>
               </a>
            </section>
         </Content>
      </Container>
   )
}
