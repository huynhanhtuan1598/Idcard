import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
} from 'react';
import { PAGE } from '../constants/theme';
import { Spinner } from '../spinner/spinner';
// import { PAGE } from '../../constants';
// import { Spinner } from '../spinner';

const types = {
    PROGRESS: 'table/progress',
    CHANGE_PAGINATION: 'table/change-pagination',
    CHANGE_ORDER: 'table/change-order',
};

export interface ITablePagination {
    page: number;
    perPage: number;
    total?: number;
}

export type TTableOrder = 'desc' | 'asc';

interface ITableState {
    isProgress: boolean;
    pagination?: ITablePagination;
    order?: TTableOrder;
    orderBy?: string; // TODO:: update type
}

const initialState: ITableState = {
    isProgress: true,
    pagination: undefined,
    order: undefined,
    orderBy: undefined,
};

interface ITableAction {
    type: string;
    payload?: any;
}

const reducer = (state: ITableState, action: ITableAction): ITableState => {
    switch (action.type) {
        case types.PROGRESS:
            return {
                ...state,
                ...action.payload,
                isProgress: false,
            };

        case types.CHANGE_PAGINATION:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    ...action.payload,
                },
            };

        case types.CHANGE_ORDER:
            return {
                ...state,
                ...action.payload,
                pagination: {
                    ...state.pagination,
                    page: PAGE,
                },
            };
        default:
            return state;
    }
};

interface ITableContext {
    state: ITableState;
    dispatch: React.Dispatch<any>;
    onChangePagination?: (pagination: ITablePagination) => void;
    onChangeOrder?: (value: ITableChangeOrder) => void;
}

const initalContext: ITableContext = {
    state: initialState,
    dispatch: () => {},
    onChangePagination: () => {},
    onChangeOrder: () => {},
};

const TableContext = createContext<ITableContext>(initalContext);

export interface ITableChangeOrder {
    order?: TTableOrder;
    orderBy?: string; // TODO: update type
}

interface Props {
    children: ReactNode;
    pagination?: ITablePagination;
    order?: TTableOrder;
    orderBy?: string;
    onChangePagination?: (pagination: ITablePagination) => void;
    onChangeOrder?: (value: ITableChangeOrder) => void;
}

export const TableContextProvider = ({
    children,
    pagination,
    order,
    orderBy,
    onChangePagination,
    onChangeOrder,
}: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: types.PROGRESS,
            payload: {
                pagination,
                order,
                orderBy,
            },
        });
    }, [dispatch, pagination, order, orderBy]);

    const value = useMemo(
        () => ({ state, dispatch, onChangePagination, onChangeOrder }),
        [state, dispatch, onChangePagination, onChangeOrder]
    );

    if (state.isProgress) {
        return <Spinner />;
    }

    return (
        <TableContext.Provider value={value}>{children}</TableContext.Provider>
    );
};

export const useTable = () => {
    const { state, onChangePagination, onChangeOrder } =
        useContext(TableContext);

    const changePagination = useCallback(
        (value: ITablePagination) => {
            onChangePagination && onChangePagination(value);
        },
        [onChangePagination]
    );
    const changeOrder = useCallback(
        (value: { order: TTableOrder; orderBy: string }) => {
            onChangeOrder && onChangeOrder(value);
        },
        [onChangeOrder]
    );

    return {
        ...state,
        changePagination,
        changeOrder,
    };
};
