import { browserStore } from '../browserStore';
import { MAIN_ADVENTURE } from './preDefinedKeys';
import { safeWindow } from 'src/lib/safe-window';

export const mainAdventure = (initialState) => browserStore(
  MAIN_ADVENTURE,
  safeWindow().localStorage,
  initialState
);