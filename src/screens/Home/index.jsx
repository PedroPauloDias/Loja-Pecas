import React from 'react'
import { Navbar } from '../Navbar'
import promotion from '../../assets/promotion.webp'
import { HighlightPanel } from '../../components/highlightpanel'
import * as S from "./style"

import bannerPrincipal from '../../assets/banner-principal.webp'
import { Banners } from '../../components/Banners'
import { Brands } from '../../components/Brands'
import { Cards } from '../../components/Cards'
import { NewsLetter } from '../../components/NewsLetter'

export const Home = () => {
  return (
    <>
      <Navbar />
      <picture>
        <source srcSet={bannerPrincipal} media="(min-width:900px)" />        
        <source srcSet={promotion} media="(min-width:600px)" />
      <S.Promo src={promotion} alt="" />
      </picture>
      <HighlightPanel />
      <Banners />
      <Brands />
      <Cards />
      <NewsLetter/>
    
    </>
  )
}
