import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './style.css';
import Button from '../Button';

function Menu() {
  return (
    <div className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo da flix" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        NOVO VÍDEO
      </Button>
    </div>
  );
}

export default Menu;
