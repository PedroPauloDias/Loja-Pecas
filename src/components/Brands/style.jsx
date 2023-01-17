import styled from "styled-components";



export const Container = styled.div`
height: 9.5rem;
margin-top: 1.5rem;
margin-bottom:2.5rem;


.slick-prev:before,
.slick-next:before {
  color: #000;

}
.slick-dots li :before{
  margin-top: 1.5rem;

}


@media screen and (min-width: 760px){
  height: 10.5rem;
}

@media screen and (min-width: 1200px){
  height: 13.5rem;
}
`
export const Title = styled.h2`
font-size: 2.1rem;
text-align: center;
margin-top:1rem;
margin-bottom: 2.5rem;
padding-top:.5rem;
color: ${({ theme }) => theme.COLORS.PRIMARY_900};

@media screen and (min-width: 760px){
  font-size: 2.3rem;
  margin-top: 1.2rem;
  margin-bottom: 2rem;
}


@media screen and (min-width: 1200px){
  margin-top: 5rem;
  font-size: 3rem;
}


`

export const ContainerBrands = styled.div`
width: 82vw;

margin-top:.5rem;

margin-left: 2rem;

@media screen and (min-width: 760px){
  width: 92vw;  
  margin: 0 auto;
  padding: 0 .5rem;
}

@media screen and (min-width: 1200px){
  width: 92vw;  
  margin-left: 3.5rem;
margin-top:3rem;
padding: .5rem;

}
`

export const ContainerImg = styled.div`

margin-left: 1rem;
height: 1.8rem;
object-fit: cover;
cursor: pointer;
filter: grayscale(1);
transition: all .5s;

 
&:hover{
  filter: grayscale(0);
}

@media screen and (min-width: 1200px){
  margin-left: 2rem;
  margin-bottom: 1.2rem;


}


`