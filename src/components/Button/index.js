import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 2px solid var(--white);
    background-color: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .75;
    border-color: var(--primary);
    border-radius: 5px;
  }
  @media (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--black);
        border-radius: 0;
        border: 0;
        text-align: center;
    }
  `;

export default Button;
