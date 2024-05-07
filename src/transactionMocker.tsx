import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {Transaction} from '../types/Transaction';

export const initTransactionMock = (enabled: boolean = true): void => {
  const mock = new MockAdapter(axios);
  if (enabled) {
    mock
      .onGet('/transactions')
      .reply(200, require('./mocks/getTransaction.json') as Transaction[]);
  }
};
