import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export type TabsStatusType = "all" | "landing" | "React" | "Spa"

type TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType , title: string}>
    changeFilterStates:(value: TabsStatusType ) => void
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>

                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link active={props.currentFilterStatus=== item.status} as={"button"} onClick={()=>{props.changeFilterStates(item.status)}} >{item.title}</Link>
                    </ListItem>
                })}

            </ul>

        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  
  ul {

    display: flex;
    justify-content: space-between;
    
    max-width: 352px;
    width: 100%;
    border: 1px solid red;
    margin: 0 auto 40px;
  }
`
const ListItem = styled.li`
  
`