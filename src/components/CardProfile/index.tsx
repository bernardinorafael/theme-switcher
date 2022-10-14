import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
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
               checkedIcon={false}
               handleDiameter={20}
               offHandleColor={colors.text}
               height={10}
               offColor={colors.backgroundToggleButton}
               onChange={toggleTheme}
               onColor={colors.backgroundToggleButton}
               uncheckedIcon={false}
               width={40}
            />
            <img height={120} src={imagePerfil} alt="" />

            <h1>Rafael Bernardino</h1>
            <span>Desenvolvedor Front-end</span>

            <section>
               <FaGithub size={30} />
               <FaWhatsapp color="#25d365" size={30} />
               <FaLinkedin color="#1b98e0" size={30} />
            </section>
         </Content>
      </Container>
   )
}
