import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dash state domain
 */

const selectDashDomain = state => state.get('dash', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Dash
 */

const makeSelectDash = () =>
  createSelector(
    selectDashDomain,
    substate => substate.toJS(),
  );

export default makeSelectDash;
export { selectDashDomain };
