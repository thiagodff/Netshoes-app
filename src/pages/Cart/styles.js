import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  margin-top: 34px;
  padding-top: 20px;
`;

export const CartInfo = styled.View`
  background-color: #fff;
  margin: 20px;
  border-radius: 4px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  max-height: 520px;
`;

export const TextCartEmpty = styled.Text`
  color: #000;
  margin-top: 10px;
  font-size: 24;
  font-weight: bold;
`;

export const Item = styled.View`
  flex-direction: row;
  margin: 5px;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ProductImg = styled.Image`
  width: 80px;
  height: 80px;
`;

export const InfoProduct = styled.View`
  flex-direction: column;
  padding: 10px;
  max-width: 180px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductTotal = styled.View`
  flex-direction: row;
  width: 300px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: #eeee;
  padding: 10px;
`;

export const ItemAmount = styled.View`
  width: 120px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductAmount = styled.Text`
  background-color: #fff;
  border-radius: 4px;
  width: 50px;
  height: 26px;
  padding-left: 12px;
  font-size: 14;
  padding-top: 3px;
  border: 1px #ddd;
`;

export const ProductTotalPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const RemoveItem = styled.TouchableOpacity`
  margin-top: 25px;
`;

export const AddItem = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export const RemoveOneItem = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export const TextTotal = styled.Text`
  margin-top: 20px;
  color: #999;
  font-weight: bold;
  font-size: 16;
`;

export const TotalPrice = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 30;
`;

export const FinishOrder = styled(RectButton).attrs({
  rippleColor: darken(0.08, '#5b2d83'),
})`
  width: 300px;
  height: 42px;
  background-color: #5b2d83;
  border-radius: 4px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14;
`;
