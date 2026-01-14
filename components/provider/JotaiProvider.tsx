'use client';

import { useRef } from 'react';
import { Provider, createStore } from 'jotai';

type InitialValue<T> = [any, T];

export default function JotaiProvider({
  children,
  initialValues,
}: {
  children: React.ReactNode;
  initialValues?: InitialValue<any>[];
}) {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);

  if (!storeRef.current) {
    const store = createStore();

    initialValues?.forEach(([atom, value]) => {
      store.set(atom, value);
    });

    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
