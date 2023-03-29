import { HeaderContainer, HeaderContent } from "./style";

import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
}
