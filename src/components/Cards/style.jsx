import styled from "styled-components";

export const CompleteCard = styled.div`
height: 32rem;
margin-top: -0.5rem;


background-color: ${({ theme }) => theme.COLORS.BACKGROUND} ;


`
export const Container = styled.div`
margin-top:.5rem;
padding-top:3rem;
padding: 2rem;

.slick-prev:before,
.slick-next:before {
  color: #000;

}

`
export const Text = styled.h2`
font-size: 2.5rem;
text-align: center;
padding-top: 2.5rem;
color: ${({ theme }) => theme.COLORS.PRIMARY_900} ;

@media screen and (min-width: 750px){
  font-size: 2.5rem;

}

@media screen and (min-width: 1200px){
  font-size: 3.5rem;


}


`

export const ProductName = styled.h3`
color: ${({ theme }) => theme.COLORS.PRIMARY_TEXT} ;
font-size: 1.2rem;
font-weight: bold;
line-height: 2rem;
margin-bottom: .5rem;

`
export const ProductDescription = styled.p`
font-size: 1rem;
margin-bottom: .7rem;
`
export const ProductPrice = styled.h4`
margin-bottom: .1rem;
font-size: 1rem;
font-weight: bold;
color: ${({theme}) => theme.COLORS.PRIMARY_900}
`

export const Payment = styled.p`
margin-bottom: .8rem;
`

export const BuyButton = styled.button`
height: 1.5rem;
width: 4.5rem;
margin-top: .5rem;
border-radius: 5px;
border: none ;
color:  ${({ theme }) => theme.COLORS.SECONDARY_TEXT};
background-color:  ${({ theme }) => theme.COLORS.HIGHLIGHTS};
cursor: pointer;

`


export const CardsContainer = styled.div`
width: 18rem;
height: 20rem;
text-align: center;
margin-bottom: 1rem;
border-radius:5px;
transition: all .5s;
color: #000;

&:hover{
  background-color: #e6e6e6;
  display: block;
}
;

`
export const Img = styled.img`
height:9rem;
padding: .5rem;
margin: 0 auto;
margin-top: 0.5rem;
`