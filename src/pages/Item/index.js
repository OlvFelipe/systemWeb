import React, { useState } from 'react';
import { Container, Title, ContentForm, Input, ActionSave } from './styles';

import api from '../../service/api';

function Item() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    async function save() {
        await api.post(`/sistema/cadastrar-item`, {
            name,
            quantity,
            price,
            })
            .then((item) => {
                return item.data.msg;
            })
            .catch(err => {
                return err; 
            })
    }


    return (
        <Container>
            <Title>
                <h3>Cadastrar Item</h3>
            </Title>
            <ContentForm>
                <Input>
                    <span>Nome</span>
                    <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}/>
                </Input>
                <Input>
                    <span>Quantidade</span>
                    <input type="text"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}/>
                </Input>
                <Input>
                    <span>Preço</span>
                    <input type="text"
                    value={price}
                    onChange={e => setPrice(e.target.value)}/>
                </Input>
                <ActionSave>
                    <button type="button">Cancelar</button>
                    <button type="button" onClick={save}>Salvar</button>
                </ActionSave>
            </ContentForm>
        </Container>
    );
} 

export default Item;