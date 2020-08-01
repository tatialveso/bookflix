import styled from 'styled-components';

export const CategoriesList = styled.ul`
    line-height: 30px;
    font-size: 18px;
`;

export const Loader = styled.div`
    @keyframes spinner {
        to {transform: rotate(360deg);}
    } 
    &:before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 90%;
        left: 50%;
        width: 30px;
        height: 30px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 50%;
        border: 2px solid var(--primary);
        border-top-color: #000;
        animation: spinner .6s linear infinite;
    }
`;
