import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as CartActions from '../../store/modules/cart/actions';

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

class Main extends Component {
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

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    // action
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
                    <AddCartButton
                      onPress={() => this.handleAddProduct(item.id)}>
                      <Amount>
                        <Icon name="cart-arrow-down" size={20} color="#fff" />
                        <AmountText>{amount[item.id] || 0}</AmountText>
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
