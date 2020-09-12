import React from 'react';

import { Container, Title, ContentForm, Input, ActionSave } from './styles';

function Purchase() {
    return (
        <Container>
            <Title>
                <h3>Registrar pedido</h3>
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
                <ActionSave>
                    <button type="button">Registrar</button>
                    <button type="button">Cancelar</button>
                </ActionSave>
            </ContentForm>
        </Container>
    );
} 

export default Purchase;