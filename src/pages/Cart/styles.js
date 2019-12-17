import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  margin-top: 44px;
  padding-top: 20px;
`;

export const CartEmpty = styled.View`
  background-color: #fff;
  margin: 20px;
  border-radius: 4px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextCartEmpty = styled.Text`
  color: #000;
  margin-top: 10px;
  font-size: 24;
  font-weight: bold;
`;
