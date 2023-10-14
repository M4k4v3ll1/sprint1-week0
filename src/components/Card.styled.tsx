import styled, {css} from 'styled-components';

type CardPropsType = {
    contentType?: string
}

export const Card = styled.div<CardPropsType>`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  display: block;
  
  ${props => props.contentType === 'desert' && css<CardPropsType>`
    background-color: #FDEAA8;
    color: #ff8800;
  `}

  ${props => props.contentType === 'lake' && css<CardPropsType>`
    background-color: #84d8f5;
    color: #044ff1;
  `}

  ${props => props.contentType === 'mountain' && css<CardPropsType>`
    background-color: #daf8f0;
    color: #7905fc;
  `}
`

export const Img = styled.img`
  margin: 10px 10px 0 10px;
  width: 280px;
  height: 170px;
  border-radius: 10px;
`