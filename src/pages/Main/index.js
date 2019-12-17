import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import {
  Container,
  List,
  Category,
  Products,
  ProductList,
  Item,
  Title,
  Img,
  Price,
  AddCartButton,
  AddCartButtonText,
  Amount,
  AmountText,
} from './styles';

export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      pieces: product.pieces.map(piece => ({
        ...piece,
        priceFormatted: formatPrice(piece.price),
      })),
    }));

    this.setState({ products: data });
  }

  addToCart = item => {};

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => product.type}
          renderItem={({ item }) => (
            <Products>
              <Category>{item.type}</Category>
              <ProductList
                data={item.pieces}
                keyExtractor={piece => String(piece.id)}
                horizontal
                // eslint-disable-next-line no-shadow
                renderItem={({ item, index }) => (
                  <Item index={index}>
                    <Img source={{ uri: item.image }} />
                    <Title>{item.title} </Title>
                    <Price>{item.priceFormatted}</Price>
                    <AddCartButton onPress={() => this.addToCart()}>
                      <Amount>
                        <Icon name="cart-arrow-down" size={20} color="#fff" />
                        <AmountText>0</AmountText>
                      </Amount>
                      <AddCartButtonText>ADICIONAR</AddCartButtonText>
                    </AddCartButton>
                  </Item>
                )}
              />
            </Products>
          )}
        />
      </Container>
    );
  }
}
