import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type UsualBtnPropsType = {
    btnType: 'primary' | 'outlined'
}

export const UsualBtn = styled.button<UsualBtnPropsType>`
  width: 86px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 700;

  color: #FFFFFF;

  ${props => props.btnType === 'primary' && css<UsualBtnPropsType>`
    background-color: #4E71FE;
  `}
  ${props => props.btnType === 'outlined' && css<UsualBtnPropsType>`
    background-color: transparent;
    border: 2px solid;
    border-color: #4E71FE;
    color: #4E71FE;
  `}
  
  &:hover {
    animation: ${MyAnimation} 0.5s ease-in-out;
  }
`