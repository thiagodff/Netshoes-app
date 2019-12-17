import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
`;

export const Container = styled.View`
  padding: 20px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const CartButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const Itens = styled.Text`
  color: #fff;
  position: absolute;
  font-size: 12px;
  background-color: #5b2d83;
  text-align: center;
  align-items: center;
  top: -8px;
  left: 12px;
  width: 18px;
  height: 18px;
  border-radius: 9px;
`;
