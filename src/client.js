import * as sapper from '@sapper/app';
import {
  Store
} from 'svelte/store.js';

sapper.start({
  target: document.querySelector('#sapper'),
  store: (data) => new Store(data),
});
