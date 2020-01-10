import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  CartInfo,
  TextCartEmpty,
  ProductList,
  Item,
  ProductImg,
  InfoProduct,
  ProductTitle,
  ProductPrice,
  ProductTotal,
  ProductAmount,
  ProductTotalPrice,
  ItemAmount,
  RemoveItem,
  AddItem,
  RemoveOneItem,
  TextTotal,
  TotalPrice,
  FinishOrder,
  TextButton,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.length === 0 ? (
        <CartInfo>
          <Icon name="cart-off" size={60} color="#eee" />
          <TextCartEmpty>Seu carrinho está vazio.</TextCartEmpty>
        </CartInfo>
      ) : (
        <CartInfo>
          <ProductList
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({ item, index }) => (
              <>
                <Item index={index}>
                  <ProductImg source={{ uri: item.image }} />
                  <InfoProduct>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{item.priceFormatted}</ProductPrice>
                  </InfoProduct>
                  <RemoveItem onPress={() => removeFromCart(item.id)}>
                    <Icon name="trash-can-outline" size={25} color="#5b2d83" />
                  </RemoveItem>
                </Item>
                <ProductTotal>
                  <ItemAmount>
                    <RemoveOneItem onPress={() => decrement(item)}>
                      <Icon
                        name="minus-circle-outline"
                        size={20}
                        color="#5b2d83"
                      />
                    </RemoveOneItem>
                    <ProductAmount>{item.amount}</ProductAmount>
                    <AddItem onPress={() => increment(item)}>
                      <Icon
                        name="plus-circle-outline"
                        size={20}
                        color="#5b2d83"
                      />
                    </AddItem>
                  </ItemAmount>
                  <ProductTotalPrice>{item.subtotal}</ProductTotalPrice>
                </ProductTotal>
              </>
            )}
          />
          <TextTotal>TOTAL</TextTotal>
          <TotalPrice>{total}</TotalPrice>
          <FinishOrder>
            <TextButton>FINALIZAR PEDIDO</TextButton>
          </FinishOrder>
        </CartInfo>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
