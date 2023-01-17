import { List, ShoppingCart, } from 'phosphor-react';
import { BiSearchAlt2 } from "react-icons/bi"
import * as S from "./style";

import logo from "../../assets/logo-1.png"

export const Navbar = ({ theme }) => {
  return (
    <S.Container>
      <S.Banner>
        <List size={25} weight="fill" />
        <S.ImageLogo src={logo} alt="logo da empresa " />
        <ShoppingCart size={25} weight="fill" />
      </S.Banner>
      <S.SearchContainer>
      <S.SearchBar >
        <S.SearchInput type="search" placeholder='Digite o que você procura'/>
        <BiSearchAlt2 />
      </S.SearchBar>
      </S.SearchContainer>
    </S.Container>

  )
}
