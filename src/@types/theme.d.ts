import "styled-components"
import { dark, light } from "../styles/themes/theme"

type ThemeLight = typeof light
type ThemeDark = typeof dark

declare module "styled-components" {
   export interface DefaultTheme extends ThemeLight, ThemeDark {}
}
