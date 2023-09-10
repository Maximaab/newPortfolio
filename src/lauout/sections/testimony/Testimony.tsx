import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/container/Container";
import {S} from './../skills/skill/Skills_Styles'
export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} aligne={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"quote-alt-right-svg 1"}/>
                    </S.IconWrapper>

                    <Slider/>
                </FlexWrapper>
            </Container>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #ababf5;
 min-height: 50vh;
  
  ${S.IconWrapper} {
  margin: 40px 0 60px;  
  }
}
`


