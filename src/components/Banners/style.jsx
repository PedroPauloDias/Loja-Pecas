import styled from "styled-components";

export const ContainerBanner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (min-width: 760px) and ( max-width: 1200px ){
  height: -12rem;


}



`
export const TextBanner = styled.h2`
color: ${({ theme }) => theme.COLORS.PRIMARY_700};
text-align: center;
justify-content: center;
margin: 1rem .5rem;


@media screen and (min-width: 1200px){
  font-size: 2rem;
  margin: 7rem 0 3rem 0 ;
  gap: 1rem;
}
`

export const ImgContainer = styled.div`

@media screen and (min-width: 1200px){
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  
}
`

export const ImgBanner = styled.img`
height: 17rem;
width: 100vw;
padding: .3rem;
object-fit: cover;


@media screen and (min-width: 760px) and ( max-width: 1200px ){
  height: 40vh;
}



@media screen and (min-width: 1200px){
  height: 45vh;
  width: 30vw;
  object-fit: cover;

}
`

