import React from 'react';
import {S} from './../HeaderMenu_Styles'
import {Menu} from "../menu/Menu";



export const DesktopMenu: React.FC<{ menyItems: Array<string> }> = (props: { menyItems: Array<string> }) => {
    return (
        <S.DesktopMenu>
            <Menu menyItems={props.menyItems}/>
        </S.DesktopMenu>
    );
};




