import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill"
import {SectionTitle} from "../../../components/SectionTitle"
import {Container} from "../../../components/container/Container";
import {S} from "./skill/Skills_Styles"
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "codeSvg",
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
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title}
                                          description={s.description}
                            />
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>


        </S.Skills>
    );
};

