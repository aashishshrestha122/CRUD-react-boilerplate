import { fromJS } from 'immutable';
import dashReducer from '../reducer';

describe('dashReducer', () => {
  it('returns the initial state', () => {
    expect(dashReducer(undefined, {})).toEqual(fromJS({}));
  });
});
