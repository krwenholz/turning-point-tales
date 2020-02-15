import { browserStore } from './index';
import { VISITED } from './preDefinedKeys';
import { safeWindow } from 'src/lib/client/safe-window';

const initialState = {
  pages: [''],
}

export const visited = browserStore(
  VISITED,
  safeWindow().localStorage,
  initialState,
);
