import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "../skills/skill/Skill"
import {SectionTitle} from "../../../components/SectionTitle"
import {Container} from "../../../components/container/Container";
import {S} from "./skill/Skills_Styles"

const skillData = [
    {
        iconId: "code",
        title: "html5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",

    },
    {
        iconId: "css",
        title: "CSS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",

    },
    {
        iconId: "reactSvg",
        title: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",

    },
    {
        iconId: "typescriptSvg",
        title: "typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",

    },
    {
        iconId: "styledComponentsIcon",
        title: "styled components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",

    },
    {
        iconId: "figmaSvg",
        title: "WEB DESIGN",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",

    }
]
export const Skills = () => {
    return (
        <S.StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      description={s.description}
                        />
                    })}

                </FlexWrapper>
            </Container>


        </S.StyledSkills>
    );
};

