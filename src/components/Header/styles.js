import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    background: #444;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 70px;
    margin: auto;

    a {
        color: #dcdcdc;
        font-weight: bold;
        text-decoration: none;
        font-size: 18px;
        margin: 0 10px;

        &:hover{
            color: #708090;
        }
    }

    .divider::after{
        content: "|";
        color: #dcdcdc;
        margin: 0 10px;
        font-size: 18px;
    }

`;