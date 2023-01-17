import React from 'react'
import { EnvelopeSimple, ArrowRight } from 'phosphor-react'
import * as S from './style'

export const NewsLetter = () => {
  return (
    <S.NewsContainer>
      <S.TextContainer>
        <div>
          <EnvelopeSimple size={40}/>
        </div>
        <div>
        <S.SecondaryText>Cadastre-se e receba</S.SecondaryText>
        <S.MainText>Novidades e Ofertas Exclusivas</S.MainText>
        </div>
      </S.TextContainer>
      <S.InputsContainer>
        <S.Input type="text" placeholder='Seu Nome'/>
        <S.Input type="email" placeholder='Seu E-mail'/>
      </S.InputsContainer>
      <S.ButtonContainer>
        <S.Button>Cadastrar</S.Button>
        <ArrowRight size={20} />
      </S.ButtonContainer>
    </S.NewsContainer>
  )
}
