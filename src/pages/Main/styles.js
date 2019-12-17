import styled from 'styled-components/native';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin-top: 44px;
  padding-top: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Category = styled.Text`
  margin-left: 20px;
  color: #fff;
  font-size: 18;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Products = styled.View``;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const Item = styled.View`
  background-color: #fff;
  width: 220px;
  height: 356px;
  margin-right: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: ${props => (props.index === 0 ? '20px' : '0')};
  border-radius: 4px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #000;
  font-size: 16;
  margin-left: 20px;
  margin-right: 10px;
`;

export const Img = styled.Image`
  width: 200px;
  height: 200px;
  margin: 10px;
`;

export const Price = styled.Text`
  margin-top: 5px;
  margin-left: 20px;
  font-size: 21px;
  font-weight: bold;
`;

export const AddCartButton = styled(RectButton).attrs({
  rippleColor: darken(0.08, '#5b2d83'),
})`
  width: 200px;
  height: 42px;
  background-color: #5b2d83;
  border-radius: 4px;
  margin: 10px;
  flex-direction: row;
  align-items: center;
`;

export const AddCartButtonText = styled.Text`
  color: #fff;
  font-size: 14;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 37px;
`;

export const Amount = styled.View`
  width: 53px;
  height: 42px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${darken(0.03, '#5b2d83')};
`;

export const AmountText = styled.Text`
  color: #fff;
  margin-left: 5px;
  font-size: 14;
  font-weight: bold;
`;
