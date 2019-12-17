import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Wrapper, Logo, CartButton, Itens } from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <CartButton onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart-outline" size={24} color="#FFF" />
          <Itens>9</Itens>
        </CartButton>
      </Container>
    </Wrapper>
  );
}
