import { browserStore } from '../browserStore';
import { AD_SEEN } from './preDefinedKeys';
import { safeWindow } from 'src/lib/client/safe-window';

const initialState = {
  dateSeen: Date.parse('04 Dec 1995 00:12:00 GMT'),
}

export const adStore = (state = initialState) => browserStore(
  AD_SEEN,
  safeWindow().localStorage,
  state,
);
