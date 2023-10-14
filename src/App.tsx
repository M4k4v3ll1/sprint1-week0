import React from 'react';
import styled from 'styled-components';
import {Link} from "./components/Link.styled";
import {MainTheme} from "./styles/Theme.styled";
import {Card, Img} from "./components/Card.styled";
import {UsualBtn} from "./components/UsualBtn.styled";
import {CardTitle, Info, TextContent} from "./components/Info.styled";
import {BtnArea} from "./components/BtnArea.styled";
import desertIcon from './img/desert.svg'
import lakeIcon from './img/baikal-lake.jpg'
import mountainIcon from './img/everest-montain.jpg'

function App() {
    return (
        <div className="App">
            <Box>
                <Card contentType='desert'>
                    <Img src={desertIcon}/>
                    <Info>
                        <CardTitle>Sahara desert</CardTitle>
                        <TextContent>The Sahara is a desert on the African continent. It is the largest hot desert in the
                            world</TextContent>
                    </Info>
                    <BtnArea>
                        <UsualBtn btnType='primary'>See more</UsualBtn>
                        <UsualBtn btnType='outlined'>Save</UsualBtn>
                    </BtnArea>
                </Card>
                <Card contentType='lake'>
                    <Img src={lakeIcon}/>
                    <Info>
                        <CardTitle>Baikal lake</CardTitle>
                        <TextContent>Baikal lake located in Great Mother Russia. It is the biggest freshwater lake on
                            Earth</TextContent>
                    </Info>
                    <BtnArea>
                        <UsualBtn btnType='primary'>See more</UsualBtn>
                        <UsualBtn btnType='outlined'>Save</UsualBtn>
                    </BtnArea>
                </Card>
                <Card contentType='mountain'>
                    <Img src={mountainIcon}/>
                    <Info>
                        <CardTitle>Mount Everest</CardTitle>
                        <TextContent>Mount Everest is Earth's highest mountain above sea level, located in the Himalayas</TextContent>
                    </Info>
                    <BtnArea>
                        <UsualBtn btnType='primary'>See more</UsualBtn>
                        <UsualBtn btnType='outlined'>Save</UsualBtn>
                    </BtnArea>
                </Card>
                {/*<StyledBtn color='green' fontSize='20px'>Hello</StyledBtn>
                <StyledBtn color='red'>Hello</StyledBtn>
                <StyledBtn fontSize='30px'>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.primary} btnType='primary' active>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} btnType='outlined'>Hello</StyledBtn>*/}
            </Box>
        </div>
    );
}

export const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${MainTheme.media.tablet} {
    flex-direction: column;
  }
`

export default App;