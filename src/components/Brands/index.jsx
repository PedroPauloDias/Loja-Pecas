import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from "./style"

import nakata from "../../assets/logos/logo-marca-nakata.png";
import bosch from "../../assets/logos/logo-marca-bosch.png";
import driveway from "../../assets/logos/logo-marca-driveway.png";
import loctite from "../../assets/logos/logo-marca-loctite.png";
import lonaflex from "../../assets/logos/logo-marca-lonaflex.png";
import mobil from "../../assets/logos/logo-marca-mobil.png";
import petrobras from "../../assets/logos/logo-marca-petrobras.png";
import philips from "../../assets/logos/logo-marca-philips.png";
import trw from "../../assets/logos/logo-marca-trw.png";




export const Brands = () => {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },

    ]
  };

  return (

    <S.Container>
      <S.Title> Compre por marcas </S.Title>
      <S.ContainerBrands>
        <Slider {...settings}>
          <S.ContainerImg>
            <img src={nakata} alt="" />
          </S.ContainerImg>
          <S.ContainerImg>
            <img src={bosch} alt="" />
          </S.ContainerImg>
          <S.ContainerImg>
            <img src={driveway} alt="" />
          </S.ContainerImg>
          <S.ContainerImg>
            <img src={petrobras} alt="" />
          </S.ContainerImg>
          <S.ContainerImg>
            <img src={philips} alt="" />
          </S.ContainerImg>
          <S.ContainerImg>
            <img src={mobil} alt="" />
          </S.ContainerImg>
          <S.ContainerImg>
            <img src={trw} alt="" />
          </S.ContainerImg>
          <S.ContainerImg>
            <img src={lonaflex} alt="" />
          </S.ContainerImg>
          <S.ContainerImg>
            <img src={loctite} alt="" />
          </S.ContainerImg>
        </Slider>
      </S.ContainerBrands>
    </S.Container>

  )
}
