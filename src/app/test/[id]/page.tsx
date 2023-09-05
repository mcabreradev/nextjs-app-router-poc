'use client';

import React from 'react';

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return <div className='container mt-5 mx-auto'>
    Hola el parametro es: {params.id}!!
  </div>;
}
