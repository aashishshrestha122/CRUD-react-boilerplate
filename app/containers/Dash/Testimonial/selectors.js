import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the testimonial state domain
 */

const selectTestimonialDomain = state => state.get('Testimonial',initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Testimonial
 */

const makeSelectTestimonial = () =>
  createSelector(
    selectTestimonialDomain,
    substate => substate,
  );

  const makeSelectTestimonialById = () =>
  createSelector(
    selectTestimonialDomain,
    substate => substate.testimonialByIdData,
  );

// export default makeSelectTestimonial;
export { makeSelectTestimonial, makeSelectTestimonialById };
