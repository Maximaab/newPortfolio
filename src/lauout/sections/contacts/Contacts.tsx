import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/container/Container";
import {S} from "./Contacts_Styles"

export const Contacts:React.FC = () => {
    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}/>
                    <S.Field placeholder={"subject"}/>
                    <S.Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>


        </S.Contacts>
    );
};


