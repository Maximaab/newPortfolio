import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

        React.useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth)
            window.addEventListener("resize", handleWindowResize);

            // Return a function from the effect that removes the event listener
            return () => window.removeEventListener("resize", handleWindowResize);
        }, []);


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} aligne={"center"}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu/> :<DesktopMenu/>}
                </FlexWrapper>

            </Container>

        </S.Header>
    );
};

