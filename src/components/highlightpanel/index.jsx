import { AiOutlineCar } from 'react-icons/ai'
import { FiTruck } from 'react-icons/fi'
import { FaTruckPickup } from 'react-icons/fa'
import { Truck } from 'phosphor-react'


import * as S from './style'


export const HighlightPanel = () => {
  return (
    <S.Container>
      <div>
        <S.Text>Buscar peças para:</S.Text>
      </div>
      <S.Categories>
        <S.Category> <AiOutlineCar/> automoveis</S.Category>
        <S.Category> <FiTruck/> caminhoes</S.Category>
        <S.Category> <FaTruckPickup/> picapes</S.Category>
        <S.Category> <Truck size={25} /> utilitarios  </S.Category>
      </S.Categories>
    </S.Container>
  )
}
