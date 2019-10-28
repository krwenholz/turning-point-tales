import {
  browserStore
} from '../browserStore';
import {
  MAIN_ADVENTURE
} from './preDefinedKeys';
import {
  safeWindow
} from 'src/lib/client/safe-window';

const initialState = {
  storyNode: undefined,
  history: [{
    storyNode: 'start',
    consequences: [],
    requires: [],
  }],
}

export const mainAdventure = (state = initialState) => browserStore(
  MAIN_ADVENTURE,
  safeWindow().localStorage,
  state,
);