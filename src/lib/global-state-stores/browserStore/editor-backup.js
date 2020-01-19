import { browserStore } from './index';
import { EDITOR_BACKUP } from './preDefinedKeys';
import { safeWindow } from 'src/lib/client/safe-window';

const initialState = {
  start: {
    text: ['Once upon a time'],
    decisions: [
      {
        label: 'back to start',
        storyNode: 'start',
      }
    ],
  },
}

export const editorBackup = () => browserStore(
  EDITOR_BACKUP,
  safeWindow().localStorage,
  initialState,
);
