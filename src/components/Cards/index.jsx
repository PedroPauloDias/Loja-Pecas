import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axial from "../../assets/dp458-1.webp"
import * as S from "./style"

export const Cards = () => {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },

    ]
  };







  return (
    <S.CompleteCard>
      <S.Text>Produtos</S.Text>
      <S.Container>
        <Slider {...settings}>
          <S.CardsContainer  >
            <div>
              <S.Img src={axial} alt="" />
            </div>
            <div>
              <S.ProductName>nome peca</S.ProductName>
            </div>
            <div>
              <S.ProductDescription>descricao da peca</S.ProductDescription>
            </div>
            <div>
              <S.ProductPrice>valor</S.ProductPrice>
            </div>
            <div>
              <S.Payment>parcelamento</S.Payment>
            </div>
            <div >
              <S.BuyButton >Comprar</S.BuyButton>

            </div>
          </S.CardsContainer>
          <S.CardsContainer  >
            <div>
              <S.Img src={axial} alt="" />
            </div>
            <div>
              <S.ProductName>nome peca</S.ProductName>
            </div>
            <div>
              <S.ProductDescription>descricao da peca</S.ProductDescription>
            </div>
            <div>
              <S.ProductPrice>valor</S.ProductPrice>
            </div>
            <div>
              <S.Payment>parcelamento</S.Payment>
            </div>
            <div >
              <S.BuyButton >Comprar</S.BuyButton>

            </div>
          </S.CardsContainer>
          <S.CardsContainer  >
            <div>
              <S.Img src={axial} alt="" />
            </div>
            <div>
              <S.ProductName>nome peca</S.ProductName>
            </div>
            <div>
              <S.ProductDescription>descricao da peca</S.ProductDescription>
            </div>
            <div>
              <S.ProductPrice>valor</S.ProductPrice>
            </div>
            <div>
              <S.Payment>parcelamento</S.Payment>
            </div>
            <div >
              <S.BuyButton >Comprar</S.BuyButton>

            </div>
          </S.CardsContainer>
          <S.CardsContainer  >
            <div>
              <S.Img src={axial} alt="" />
            </div>
            <div>
              <S.ProductName>nome peca</S.ProductName>
            </div>
            <div>
              <S.ProductDescription>descricao da peca</S.ProductDescription>
            </div>
            <div>
              <S.ProductPrice>valor</S.ProductPrice>
            </div>
            <div>
              <S.Payment>parcelamento</S.Payment>
            </div>
            <div >
              <S.BuyButton >Comprar</S.BuyButton>

            </div>
          </S.CardsContainer>
          <S.CardsContainer  >
            <div>
              <S.Img src={axial} alt="" />
            </div>
            <div>
              <S.ProductName>nome peca</S.ProductName>
            </div>
            <div>
              <S.ProductDescription>descricao da peca</S.ProductDescription>
            </div>
            <div>
              <S.ProductPrice>valor</S.ProductPrice>
            </div>
            <div>
              <S.Payment>parcelamento</S.Payment>
            </div>
            <div >
              <S.BuyButton >Comprar</S.BuyButton>

            </div>
          </S.CardsContainer>
        </Slider>
      </S.Container>
    </S.CompleteCard>

  )
}
