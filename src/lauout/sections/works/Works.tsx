import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/foto1.webp'
import {Container} from "../../../components/container/Container";
import {TabMenu} from "./tabMenu/TabMenu";
import {S} from "./work/Works_Styles"


const worksItems = ["all", "landing page", "reack", "Spa"]

const workData = [{
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
},
    {
        title: "Timer",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
    },


]


export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>

                <TabMenu menyItems={worksItems}/>
                <FlexWrapper justify={"space-between"} aligne={"flex-start"} wrap={"wrap"}>
                    {workData.map((w,index)=> {
                        return <Work title={w.title} key={index}
                                     src={w.src}
                                     text={w.text}/>
                    })}

                </FlexWrapper>
            </Container>

        </S.Works>
    );
};

