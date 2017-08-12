import { tweenDefaults } from 'mojs-tween';

/**
 * Function to split the delta object to `tween` options and actual `delta`.
 *
 * @param {Object} Object to split.
 * @returns {Object} Split `delta`.
 */
export const separateTweenOptions = (object) => {
  let tweenOptions;
  const defaultKeys = Object.keys(tweenDefaults);
  for (let i = 0; i < defaultKeys.length; i++) {
    const option = defaultKeys[i];

    if (object[option] !== undefined) {
      tweenOptions = tweenOptions || {};
      tweenOptions[option] = object[option];
      delete object[option];
    }
  }

  return tweenOptions;
};

export default separateTweenOptions;
