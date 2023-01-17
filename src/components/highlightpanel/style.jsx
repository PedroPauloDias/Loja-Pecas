import styled from "styled-components";

export const Container = styled.div`
margin-top: -1rem;
height: 27vh;
width: 100vw;  
background-color: grey;
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1200px){
 width:68vw;
height: 5rem;
position: absolute;
left: 220px;
margin-top: -40px;
background-color: #6b6b6b;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: flex-end;

flex-direction: row;  
}
  `

export const Text = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: .5rem;
  color: #fff;
  margin-left:2rem;
  
  `


export const Categories = styled.div`
width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, auto));
  justify-content: center;
  align-items: center;
  grid-gap: .5rem;
  margin: 1rem auto;
  margin-bottom: 1rem;
  





  `
export const Category = styled.div`
background-color: #979696;
height: 3.5rem;
display: flex;
align-items: center;
justify-content: space-evenly;
font-size: 18px;
cursor: pointer;
transition: .8s;
border-radius: 12px;
color: #fff;
font-weight: bold;


svg{
  width: 20%;
  height: 50%;
  color: #fff;
  
}

@media screen and (min-width: 1200px){
   
  }

;


  &:hover  {
    background: ${({ theme }) => theme.COLORS.PRIMARY_700};
  color: ${({ theme }) => theme.COLORS.SECONDARY_TEXT};



  };
;




`

