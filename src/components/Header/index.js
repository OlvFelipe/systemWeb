import React from 'react';
import { Container, Menu } from './styles';


function Header() {

    return (
      <Container>
          <Menu>
            <a href="/pedido">Pedido</a>
            <span className="divider" />
            <a href="/cliente">Cliente</a>
            <span className="divider" />
            <a href="/item">Item</a>
            </Menu>
      </Container>
    );
}

export default Header;