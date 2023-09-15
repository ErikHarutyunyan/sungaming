import React, { lazy, Suspense } from 'react';

const LazyBrands = lazy(() => import('./Brands'));

const Brands = props => (
  <Suspense fallback={null}>
    <LazyBrands {...props} />
  </Suspense>
);

export default Brands;
