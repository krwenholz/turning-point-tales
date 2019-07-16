import { writable } from 'svelte/store';

const status = (initial) => {
  const { subscribe, set, update } = writable({
    ...initial,
    isSubmitting: false,
    isRejected: false,
    isFulfilled: false,
  });

  return {
    subscribe,
    set: (prop, val) => update(prevState => ({ ...prevState, [prop]: val })),
  };
}

const track = tracker => func => () => {
  tracker.set('isPending', true);

  const promise = func();

  promise.then(() => tracker.set('isFulfilled', true));
  promise.finally(() => tracker.set('isPending', false));
  promise.catch(() => tracker.set('isRejected', true));

  return promise;
}

export const statusTracking = (initial) => {
  let _status = status(initial);
  let _track = track(_status);

  return [_status, _track];
}
