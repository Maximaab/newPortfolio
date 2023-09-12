import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "./Skills_Styles"

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <FlexWrapper direction={"column"} aligne={"center"}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId} />
                </S.IconWrapper>

                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>

        </S.StyledSkill>
    );
};
