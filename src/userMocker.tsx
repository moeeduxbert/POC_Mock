import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {User} from './types/User';

export const initUserMock = (enabled: boolean = true): void => {
  const mock = new MockAdapter(axios);
  if (enabled) {
    mock.onGet('/user').reply(200, require('./mocks/getUser.json') as User);
  }
};
