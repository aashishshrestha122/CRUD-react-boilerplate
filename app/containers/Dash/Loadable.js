/**
 *
 * Asynchronously loads the component for Dash
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
