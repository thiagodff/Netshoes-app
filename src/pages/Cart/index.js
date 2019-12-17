import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, CartEmpty, TextCartEmpty } from './styles';

export default function Cart() {
  return (
    <Container>
      <CartEmpty>
        <Icon name="cart-off" size={60} color="#eee" />
        <TextCartEmpty>Seu carrinho está vazio.</TextCartEmpty>
      </CartEmpty>
    </Container>
  );
}
