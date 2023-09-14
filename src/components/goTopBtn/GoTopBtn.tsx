import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {

    const [showBtn,setshowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY>200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)

            }
        })
    }, []);
    return (

        <>
            {showBtn && (
            <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
                <Icon iconId={"btn-go-top"} height={"20"} width={"20"} viewBox={"12 4 6 20"}/>
            </StyledGoTopBtn>
            )}
                </>


    );
};

const StyledGoTopBtn = styled.button`
  background-color: #0000004D;
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  
`