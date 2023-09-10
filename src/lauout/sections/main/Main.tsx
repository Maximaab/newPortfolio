import React from 'react';
import photo from '../../../assets/images/Max.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/container/Container";
import {S} from "./Main_Styles"

export const Main:React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper aligne={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Maxim Gordienko</span></S.Name>
                        <S.MainTitle>A Web Developer</S.MainTitle>

                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>

        </S.StyledMain>
    );
};


