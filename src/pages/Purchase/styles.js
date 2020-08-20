import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    height: auto;
    padding: 20px;
    margin: 20px auto;
`;

export const Title = styled.div`
    width: 170px;
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