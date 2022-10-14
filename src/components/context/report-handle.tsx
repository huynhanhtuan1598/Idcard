import React, {
  createContext, ReactNode,
  useContext,
  useMemo,
  useState
} from 'react';
import { CreateReportUserInput, useCreateReportUserMutation, User } from '../generated/graphql';
// import { User } from '../collection';
// import { useCreateReportUserMutation, CreateReportUserInput } from '../../generated/graphql';

interface IContext {
  user?: User;
  typeDate: string;
  setUser: React.Dispatch<any>;
  setTypeDate: React.Dispatch<any>;
  createReportUser: React.Dispatch<any>;
}

const initialContext = {
  user: undefined,
  typeDate: 'month',
  setUser: () => { },
  setTypeDate: () => { },
  createReportUser: () => { },
};

const Context = createContext<IContext>(initialContext);

interface Props {
  children: ReactNode;
}

export const ReportHandleContext = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>();
  const [typeDate, setTypeDate] = useState<string>('month');

  const [createReportUser] = useCreateReportUserMutation({
    onError(error: any) {
      console.log({ error })
    }
  });

  const value = useMemo(
    () => ({ createReportUser, user, setUser, typeDate, setTypeDate }),
    [createReportUser, user, setUser, typeDate, setTypeDate]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export function useReportHandle() {
  const { createReportUser, user, setUser, typeDate, setTypeDate } = useContext(
    Context
  );

  const clickReport = ({ itemId, name }: { itemId: string; name: string }) => {
    if (user) {
      const createReportUserInput: CreateReportUserInput = {
        userId: user._id,
        type: 'click',
        itemId,
        name,
      }

      createReportUser({ variables: { createReportUserInput } })
    }
  };

  return {
    createReportUser,
    user,
    setUser,
    clickReport,
    typeDate,
    setTypeDate,
  };
}
