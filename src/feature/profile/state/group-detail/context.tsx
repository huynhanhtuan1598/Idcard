import React, {
  createContext, ReactNode,
  useContext,
  useMemo
} from 'react';
import {Group , GroupInfoFragment } from '../../../../components/generated/graphql';

interface IContext {
  group?: GroupInfoFragment;
  refetch: () => void;
}

const initialContext = { group: undefined, refetch: () => { } };
const Context = createContext<IContext>(initialContext);

interface Props {
  children: ReactNode;
  group?: GroupInfoFragment;
  refetch: () => void;
}

export const GroupDetailProvider = ({
  children,
  group,
  refetch,
}: Props) => {
  const value = useMemo(() => ({ group, refetch }), [group, refetch]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export function useGroupDetail() {
  const value = useContext(Context);
  return {
    ...value,
  };
}
