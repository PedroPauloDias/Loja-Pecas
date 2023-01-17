import styled from "styled-components";

export const Container = styled.div`


display: flex;
flex-direction: column;
margin-bottom: .5rem;

svg {
fill: ${({ theme }) => theme.COLORS.PRIMARY_900};
}
`
export const Banner = styled.div`
padding:.7rem .5rem ;

display: flex;
align-items: center;
justify-content: space-between;
`

export const ImageLogo = styled.img`
  height: 3.5rem;
  object-fit: cover;
`
export const SearchContainer = styled.div`
  margin-bottom: 1rem;  
  `


export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

border-radius: 10px;
margin: 0 auto;
border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_900};
width: 15rem;
padding: 2px;
`

export const SearchInput = styled.input`
border: none;
width: 12rem;
margin: 1.5px 10px;
font-size: .8rem;










`



