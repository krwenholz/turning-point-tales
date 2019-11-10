import sha256 from 'crypto-js/sha256'
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
  canSkipIntro: false,
  history: [{
    storyNode: 'start',
    consequences: [],
    requires: [],
  }],
}

export const mainAdventure = (content, state = initialState) => browserStore(
  `${MAIN_ADVENTURE}-${sha256(JSON.stringify(content))}`,
  safeWindow().localStorage,
  state,
);