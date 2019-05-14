import { fromJS } from 'immutable';
import gettestimonialReducer from '../reducer';

describe('gettestimonialReducer', () => {
  it('returns the initial state', () => {
    expect(gettestimonialReducer(undefined, {})).toEqual(fromJS({}));
  });
});
