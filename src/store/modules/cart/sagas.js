// responsavel por chamada asincrona que retorna promisse, put dispara action
import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import NavigationService from '../../../services/navigation';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExist = yield select(state => state.cart.find(p => p.id === id));

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExist ? productExist.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert(
      '',
      'Quantidade solicitada fora de estoque',
      [{ text: 'OK', style: 'default' }],
      {
        cancelable: false,
      }
    );
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const type = id > 6 ? 2 : 1;
    const response = yield call(api.get, `/products/${type}`);

    if (type === 2) id -= 6;

    const data = {
      ...response.data.pieces[id - 1],
      amount: 1,
      priceFormatted: formatPrice(response.data.pieces[id - 1].price),
    };

    yield put(addToCartSuccess(data));

    NavigationService.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert(
      '',
      'Quantidade solicitada fora de estoque',
      [{ text: 'OK', style: 'default' }],
      {
        cancelable: false,
      }
    );
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  // pega a ultima requisicao do botao ate a chamada a api ser finalizada
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
