import { kebabCase } from 'lodash'
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

export const mainAdventure = (title, state = initialState) => browserStore(
  `${MAIN_ADVENTURE}-${kebabCase(title)}`,
  safeWindow().localStorage,
  state,
);
