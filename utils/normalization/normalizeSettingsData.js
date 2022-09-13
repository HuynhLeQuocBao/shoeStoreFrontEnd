import _ from 'lodash';

export const normalizeSettingsData = (settings = []) => {
  if (_.isArray(settings)) {
    return _.reduce(
      settings,
      (result, currentValue) => {
        result[currentValue.name] = currentValue.content;

        return result;
      },
      {}
    );
  }

  return {};
};
