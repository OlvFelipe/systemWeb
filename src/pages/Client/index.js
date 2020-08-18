import React from 'react';
import { Container, Title, ContentForm, Input, ActionSave } from './styles';

function Client() {
    return (
        <Container>
            <Title>
                <h3>Cadastro cliente</h3>
            </Title>
            <ContentForm>
                <Input>
                    <span>Nome</span>
                    <input type="text"/>
                </Input>
                <Input>
                    <span>Endereço</span>
                    <input type="text"/>
                </Input>
                <Input>
                    <span>Número</span>
                    <input type="text"/>
                </Input>
                <Input>
                    <span>Telefone</span>
                    <input type="text"/>
                </Input>
                <ActionSave>
                    <button type="button">Cancelar</button>
                    <button type="button">Salvar</button>
                </ActionSave>
            </ContentForm>
        </Container>
    );
} 

export default Client;