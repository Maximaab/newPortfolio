import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer.Styles"
const SocialListData = [
    {
        iconId: "instagram-svg"
    },
    {
        iconId: "telegram-svg"
    },
    {
        iconId: "Group"
    },
    {
        iconId: "vk-logo-svg"
    },
]
export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} aligne={"center"}>
                <S.Name>Maxim</S.Name>
                <S.SocialList>
                    {SocialListData.map((s, index) => {

                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}



                </S.SocialList>
                <S.Copyright>© 2023 Maxim Gordienko, All Rights Reserved.</S.Copyright>
            </FlexWrapper>

        </S.Footer>
    );
};


