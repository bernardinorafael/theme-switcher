import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	@media (max-width: 992px) {
		html {
			font-size: 93.75%;
		}
	}

	@media (max-width: 768px) {
		html {
			font-size: 87.5%;
		}
	}

	body {
		background: ${(props) => props.theme.colors.backgroundMain};
		color: ${(props) => props.theme.colors.text};
	}

	body, button, textarea, input, select {
		font-size: 1rem;
		font-weight: 400;
		font-family: -apple-system,  'Segoe UI', Roboto,  Ubuntu, 'Helvetica Neue', sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	button {
		cursor: pointer;
	}
`
