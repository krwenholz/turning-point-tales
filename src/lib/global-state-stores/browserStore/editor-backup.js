import { browserStore } from './index';
import { EDITOR_BACKUP } from './preDefinedKeys';
import { safeWindow } from 'src/lib/client/safe-window';

const initialState = {
  story: {
    start: {
      text: ['Once upon a time'],
      decisions: [
        {
          label: 'go to woods',
          storyNode: 'woods',
        }
      ],
    },
  },
  aboutStory: {}
}

export const editorBackup = () => browserStore(
  EDITOR_BACKUP,
  safeWindow().localStorage,
  initialState,
);
