import React from 'react';

import { Container, Title, ContentForm, Input } from './styles';

function Purchase() {
    return (
        <Container>
            <Title>
                <h3>Registro de pedido</h3>
            </Title>
            <ContentForm>
                <Input>
                    <span>Cliente</span>
                    <input type="text"/>
                </Input>
                <Input>
                    <span>Itens</span>
                    <input type="text"/>
                </Input>
                <Input>
                    <span>Quantidade</span>
                    <input type="number"/>
                </Input>
            </ContentForm>
        </Container>
    );
} 

export default Purchase;