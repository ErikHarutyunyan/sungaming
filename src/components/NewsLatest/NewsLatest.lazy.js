import React, { lazy, Suspense } from 'react';

const LazyNewsLatest = lazy(() => import('./NewsLatest'));

const NewsLatest = props => (
  <Suspense fallback={null}>
    <LazyNewsLatest {...props} />
  </Suspense>
);

export default NewsLatest;
