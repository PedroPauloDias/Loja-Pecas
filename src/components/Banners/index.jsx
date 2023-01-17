import React from 'react'
import MiniBanner from "../../assets/minibanner1.png"
import MiniBanner2 from "../../assets/minibanner2.png"
import MiniBanner3 from "../../assets/minibanner4.png"
import Pecas from "../../assets/pecas-motor.jpg"

import * as S from './style'


export const Banners = () => {
  return (

    <S.ContainerBanner>
      <S.TextBanner>
        Produtos de qualidade e procedência é só aqui !
      </S.TextBanner>
      <S.ImgContainer>
        <div>
          <S.ImgBanner src={MiniBanner} alt="banner da promocao" />
        </div>
        <div>
        <S.ImgBanner src={Pecas} alt="banner da promocao" />
        </div>
        <div>
        <S.ImgBanner src={MiniBanner2} alt="banner da promocao" />
        </div>
      </S.ImgContainer>
    </S.ContainerBanner>

      )
}
