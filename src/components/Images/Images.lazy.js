import React, { lazy, Suspense } from 'react';

const LazyImages = lazy(() => import('./Images'));

const Images = props => (
  <Suspense fallback={null}>
    <LazyImages {...props} />
  </Suspense>
);

export default Images;
