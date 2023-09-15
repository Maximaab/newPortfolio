import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/foto1.webp'
import Timer from "./../../../assets/images/foto2.webp"
import {Container} from "../../../components/container/Container";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {S} from "./work/Works_Styles"
import {AnimatePresence, motion} from "framer-motion"


const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
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
    id: 1
},
    {
        title: "Timer",
        src: Timer,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "React",
        id: 2
    },
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "Spa",
        id: 3
    },
    {
        title: "Timer",
        src: Timer,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "React",
        id: 4
    },
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "Spa",
        id: 5
    },
    {
        title: "Timer",
        src: Timer,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "React",
        id: 6
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

    function changeFilterStates(value: TabsStatusType) {
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
                    <AnimatePresence>
                        {filteredWorks.map((w, ) => {
                            return (
                                <motion.div style={{flexGrow: 1, width: "400px", maxWidth: "540px"}}
                                    layout={true}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >
                                    <Work title={w.title}
                                          src={w.src}
                                          text={w.text}
                                          key={w.id}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>

        </S.Works>
    );
};

