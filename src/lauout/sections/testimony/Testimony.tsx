import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";
import {Container} from "../../../components/container/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} aligne={"center"}>
                    <IconWrapper>
                        <Icon iconId={"quote-alt-right-svg 1"}/>
                    </IconWrapper>

                    <Slider/>
                </FlexWrapper>
            </Container>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #ababf5;
 min-height: 50vh;
  
  ${IconWrapper} {
  margin: 40px 0 60px;  
  }
}
`

