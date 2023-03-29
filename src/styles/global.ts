import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme["blue-100"]};
}

body{
  background: ${(props) => props.theme["dark-blue-500"]};
  color: ${(props) => props.theme["gray-200"]};
  -webkit-font-smoothing: antialiased;
  margin: 0 auto;
}

body, input, button{
  font: 400 1rem "Nunito", sans-serif;
}
`;
