import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

const types = {
  CHANGE_TYPE_DATE: 'report/change-type-date',
};

export enum ETypeDate {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

interface IState {
  typeDate: ETypeDate;
}
interface IAction {
  type: string;
  payload?: any;
}

const initialState: IState = {
  typeDate: ETypeDate.Month,
};

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case types.CHANGE_TYPE_DATE:
      return {
        ...state,
        typeDate: action.payload,
      };
    default:
      return state;
  }
}

interface IContext {
  state: IState;
  dispatch: React.Dispatch<any>;
}

const initialContext = {
  state: initialState,
  dispatch: () => { },
};
const Context = createContext<IContext>(initialContext);

interface Props {
  children: ReactNode;
}

export const ReportContext: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export function useReport() {
  const { state, dispatch } = useContext(Context);

  function setTypeDate(typeDate: ETypeDate) {
    dispatch({
      type: types.CHANGE_TYPE_DATE,
      payload: typeDate,
    });
  }

  return {
    ...state,
    setTypeDate,
  };
}
