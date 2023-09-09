import React from 'react';
import styled from "styled-components";



export const Menu = (props: { menyItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>

                {props.menyItems.map((item, index) => {
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}

            </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

`