import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    height: auto;
    padding: 20px;
    margin: 20px auto;
`;

export const Title = styled.div`
    width: 150px;
    height: 2rem;
    margin: auto;
`;

export const ContentForm = styled.div`
    width: 80%;
    height: 19em;
    padding: 10px;
    margin: 10px auto;
    border-radius: 10px;
    background: #555;
`;

export const Input = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;

    span{
        color: #dcdcdc;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    input{
        color: #dcdcdc;
        font-size: 16px;
        background: none;
        border: none;
        border-bottom: 1px solid #836FFF
    }
`;

export const ActionSave = styled.div`
    width: 80%;
    margin: 30px auto;
    align-items: center;

    button{
        width: 100px;
        margin-top: 10px;
        margin-right: 15px;
        color: #dcdcdc;
        font-size: 18px;
        font-weight: bold;
        background: #836FFF;
        border-radius: 5px;
        border: none;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }
`;