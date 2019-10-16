import {
  call,
  put,
  all,
  takeEvery,
  takeLatest,
  select,
} from 'redux-saga/effects';

import apiClient from '../utils/apiClient';

import getNextGame, { clickedRow } from './game';

function* requestModule(action) {
  try {
    const token = yield select((state) => state.Users.token);
    yield put({ type: 'FETCH_INIT' });

    const params = {
      token,
      method: action.options.method || 'get',
      path: action.options.path || '/',
      query: action.query,
      data: action.data,
      ...action.payload,
    };

    const response = yield call(apiClient, params);
    if (action.dispatchAction) {
      yield put({ type: action.dispatchAction, payload: response });
    }

    yield put({ type: 'FETCH_REQUEST_END' });
  } catch (e) {
    console.info(e);
  }
}

function* initAppState() {
  try {
    yield all([
      getNextGame(),
    ]);
  } catch (e) {
    console.error('Error initialState: ', e);
  }
}


function* mySaga() {
  try {
    yield takeLatest('INIT_APP_STATE', initAppState);
    yield takeEvery('GAME_USER_CLICKED', clickedRow);
    yield takeEvery('GAME_GET_NEXT_GAME', getNextGame);
    yield takeEvery([
      'UNIVERSAL_FETCH',
    ], requestModule);
  } catch (err) {
    console.error('mySaga Error: ', err);
  }
}


export default mySaga;
