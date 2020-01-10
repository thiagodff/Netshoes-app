import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Wrapper, Logo, CartButton, Itens } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <CartButton onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart-outline" size={24} color="#FFF" />
          <Itens>{cartSize}</Itens>
        </CartButton>
      </Container>
    </Wrapper>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
