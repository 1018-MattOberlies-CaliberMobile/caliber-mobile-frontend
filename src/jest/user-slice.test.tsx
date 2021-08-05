import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from '@jest/globals';
import userSlice, { loginAsync, logoutAsync, UserState } from '../redux/slices/user.slice';

describe('redux user slice', () => {
  jest.mock('@react-native-async-storage/async-storage');
  describe('sign in user with redux', () => {
    it('stores user information', async () => {
      const user: UserState = 'test';

      const api = {
        asyncLogin: (): Promise<UserState> => Promise.resolve(user),
      };

      const initialState = null;

      const store = createStore(
        userSlice,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      await store.dispatch(loginAsync({ username: 'test', password: 'password' }));

      expect(store.getState()).toEqual(user);
    });
  });

  describe('signing out', () => {
    it('removes user information', async () => {
      const api = {
        logoutAsync: (): Promise<UserState> => Promise.resolve(null),
      };

      const initialState: UserState = 'test';

      const store = createStore(
        userSlice,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      await store.dispatch(logoutAsync());

      expect(store.getState()).toEqual(null);
    });
  });

  describe('logging', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('logs login errors', async () => {
      jest.spyOn(global.console, 'log');

      // expect(loginAsync({ username: 'wrong', password: 'password' })).rejects.toThrowError();
      expect(console.log).toHaveBeenCalled();
    });

    it('logs logout errors', () => {
      jest.spyOn(global.console, 'log');

      expect(logoutAsync()).rejects.toThrowError();
      expect(console.log).toHaveBeenCalled();
    });
  });
});
