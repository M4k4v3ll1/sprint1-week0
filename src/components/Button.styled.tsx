import styled, {css} from 'styled-components';
//import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string,
    fontSize?: string
    btnType: 'primary' | 'outlined'
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;

  ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
    background-color: ${props => props.color || '#fb3f78'};
    color: snow;

    &:hover {
      background-color: #4053cc;
    }
  `}
  
  ${props => props.active && css<StyledBtnPropsType>`
  box-shadow: 5px 5px 5px 5px rgba(37, 37, 44, 0.6);
  `}

  ${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || '#fb3f78'};
    color: ${props => props.color || '#fb3f78'};
    background-color: transparent;

    &:hover {
      border-color: #4053cc;
      color: #4053cc;
      background-color: transparent;
    }
  `}
`
/*
//Пример анимации
export const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ffe869;
  color: #363636;
  
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`*/
