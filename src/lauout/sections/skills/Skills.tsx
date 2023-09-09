import React from 'react';
import styled  from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "../skills/skill/Skill"
import {SectionTitle} from "../../../components/SectionTitle"
import {Container} from "../../../components/container/Container";
export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle>My Skills</SectionTitle>
    <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Skill iconId={"codeSvg"} title={"Html5"}
               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
        <Skill iconId={"css"} title={"CSS"}
               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
        <Skill iconId={"reactSvg"} title={"React"}
               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
        <Skill iconId={"typescriptSvg"} title={"typescript"}
               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
        <Skill iconId={"styledComponentsIcon"} title={"styled components"}
               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
        <Skill iconId={"figmaSvg"} title={"WEB DESIGN"}
               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
    </FlexWrapper>
</Container>


        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  
`