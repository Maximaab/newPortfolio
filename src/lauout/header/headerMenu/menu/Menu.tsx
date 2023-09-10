import React from 'react';
import {S} from './../HeaderMenu_Styles'
export const Menu: React.FC<{ menyItems: Array<string> }> = (props: { menyItems: Array<string> }) => {
    return (
        <ul>

            {props.menyItems.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.Link href="">
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.Link>
                </S.MenuItem>
            })}

        </ul>
    );
};

