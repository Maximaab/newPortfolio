import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/foto1.webp'
import Timer from "./../../../assets/images/foto2.webp"
import {Container} from "../../../components/container/Container";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {S} from "./work/Works_Styles"





const tabsItems: Array<{ status: TabsStatusType , title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "React"
    },
    {
        title: "Spa",
        status: "Spa"
    }
]

const worksData = [{
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "Spa",
},
    {
        title: "Timer",
        src: Timer,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "React",
    },


]


export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing")
        filteredWorks = worksData.filter(work => work.type === "landing")
    if (currentFilterStatus === "React")
        filteredWorks = worksData.filter(work => work.type === "React")
    if (currentFilterStatus === "Spa")
        filteredWorks = worksData.filter(work => work.type === "Spa")

    function changeFilterStates (value: TabsStatusType ) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                 <SectionTitle>My Works</SectionTitle>

                <TabMenu tabsItems={tabsItems}
                         changeFilterStates={changeFilterStates}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} aligne={"flex-start"} wrap={"wrap"}>
                    {filteredWorks.map((w, index) => {
                        return <Work title={w.title} key={index}
                                     src={w.src}
                                     text={w.text}/>
                    })}

                </FlexWrapper>
            </Container>

        </S.Works>
    );
};

