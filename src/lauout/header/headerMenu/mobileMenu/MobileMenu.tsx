import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from './../HeaderMenu_Styles'


export const MobileMenu: React.FC<{ menyItems: Array<string> }> = (props: { menyItems: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={false}>
                <Menu menyItems={props.menyItems}/>

            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};




