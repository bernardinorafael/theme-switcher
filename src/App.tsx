import { DefaultTheme, ThemeProvider } from "styled-components"
import { CardProfile } from "./components/CardProfile"
import { GlobalStyles } from "./styles/global"
import { dark, light } from "./styles/themes/theme"
import { useStorageTheme } from "./utils/useStorageTheme"

export function App() {
   const [theme, setTheme] = useStorageTheme<DefaultTheme>("theme", light)

   function toggleTheme() {
      setTheme(theme.name === "light" ? dark : light)
   }

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />

         <CardProfile toggleTheme={toggleTheme} />
      </ThemeProvider>
   )
}
