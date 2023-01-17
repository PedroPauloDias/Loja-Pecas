import styled from "styled-components";

export const NewsContainer = styled.div`
height: 15rem;
background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
color: ${({ theme }) => theme.COLORS.SECONDARY_TEXT};
padding: 1rem;

@media screen and (min-width: 650px){
height: 20rem;
padding-top: 3rem;

}

@media screen and (min-width: 1200px){
height: 24rem;
 width:60vw;
 margin-left:16.5rem;
 padding-top: 4rem;

}


`

export const TextContainer = styled.div`
height: 5rem;
display: flex;
align-items: center;
justify-content: space-around;
padding: 0 .5rem ;

@media screen and (min-width: 650px){
  justify-content: center;

  
 
}
`


export const MainText = styled.h4`
font-size: 1.2rem;
margin-left: 0.5rem;

@media screen and (min-width: 650px){
font-size: 2rem;
margin-left: 1.5rem;

}


`
export const SecondaryText = styled.p`
font-size: 1rem;
margin-left: 0.5rem;

@media screen and (min-width: 650px){
font-size: 1.5rem;
margin-left: 1.5rem;

}

`

export const InputsContainer = styled.div`
height: 5rem;
margin-bottom: 1rem;

display: flex ;
flex-direction: column;
align-items: center ;
justify-content: space-around;

@media screen and (min-width: 650px){
  height: 6rem;
  margin-top: 1.5rem;

}

@media screen and (min-width: 1200px){
  height: 7rem;
  margin-top: 1.5rem;

}



`
export const Input = styled.input`
width: 20rem;
height: 2.3rem;
margin-top: .5rem;
border-radius: 5px;
outline: none;
border: none;


@media screen and (min-width: 650px){
  width: 30rem;
height: 3.3rem;

}

@media screen and (min-width: 1200px){
  width: 35rem;
height: 4.3rem;

}

&::placeholder{
padding-left: .5rem;

}
&:focus{
padding-left: .5rem;

}
`

export const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: .6rem;
margin-bottom: 1rem;

`
export const Button = styled.button`
color: ${({ theme }) => theme.COLORS.SECONDARY_TEXT};
border: none;
background-color: transparent;
font-size: 1.1rem;
cursor: pointer;

@media screen and (min-width: 650px){
  font-size: 1.5rem;

}

@media screen and (min-width: 1200px){
  font-size: 1.7rem;

}


`
