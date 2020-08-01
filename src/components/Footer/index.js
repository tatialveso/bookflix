import React from 'react';
import { FooterBase } from './style';

function Footer() {
  return (
    <FooterBase>
      <p>
        criado com ❤ por
        {' '}
        <a href="http://github.com/tatialveso" target="_blank">tati</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
