import React, { useState } from 'react';
import { Container, Title, ContentForm, Input, ActionSave } from './styles';

import api from '../../service/api';

function Client() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [address_number, setAddress_number] = useState('');
    const [phone, setPhone] = useState('');
    const [form, setForm] = useState(true);

    async function save() {
        await api.post(`/sistema/cadastrar-cliente`, {
            name,
            address,
            phone,
            address_number
            })
            .then(() => {
                setForm(false);
            })
            .catch(err => {
                return err; 
            })
            .finally(() => {
                cleanForm();
            })
    }

    function cleanForm() {
        if (form) {
            setName('');
            setPhone('');
            setAddress('');
            setAddress_number('');
        }
    }

    return (
        <Container>
            <Title>
                <h3>Cadastrar Cliente</h3>
            </Title>
            <ContentForm>
                <Input>
                    <span>Nome</span>
                    <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}/>
                </Input>
                <Input>
                    <span>Endereço</span>
                    <input type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}/>
                </Input>
                <Input>
                    <span>Telefone</span>
                    <input type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}/>
                </Input>
                <Input>
                    <span>Número</span>
                    <input type="text"
                    value={address_number}
                    onChange={e => setAddress_number(e.target.value)}/>
                </Input>
                <ActionSave>
                    <button type="button" onClick={cleanForm}>Cancelar</button>
                    <button type="button" onClick={save}>Salvar</button>
                </ActionSave>
            </ContentForm>
        </Container>
    );
} 

export default Client;