import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gettestimonial state domain
 */
const selectGettestimonialDomain = state => state.get('gettestimonial' , initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Gettestimonial
 */

const makeSelectGettestimonial = () =>
  createSelector(
    selectGettestimonialDomain,
    substate => substate.dataList
  );

  const makeSelectDeleteTestimonial = () =>
  createSelector(
    selectGettestimonialDomain,
    substate => substate.deleteResponse,
  );

export { makeSelectGettestimonial,makeSelectDeleteTestimonial };
