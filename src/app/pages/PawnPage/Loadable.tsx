/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const PawnPage = lazyLoad(
  () => import('./index'),
  module => module.PawnPage,
);
