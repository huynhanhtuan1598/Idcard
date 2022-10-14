import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
} from 'react';
import { useAuth } from '../../../../components/context/auth';
// import { useAuth } from '../../../../components/context';

interface IState {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    boxShadow?: number;
}

const types = {
    CHANGE_VALUE: 'edit-avatar/change-value',
    INIT_VALUE: 'edit-avatar/init-value',
};

interface IAction {
    type: string;
    payload: any;
}

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case types.INIT_VALUE:
            return action.payload;
        case types.CHANGE_VALUE:
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };
        default:
            return state;
    }
};

const initialState: IState = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 5,
    borderRadius: 50,
    boxShadow: 0,
};

interface IContext {
    state: IState;
    dispatch: React.Dispatch<any>;
}
const initialContext = {
    state: initialState,
    dispatch: () => {},
};

const EditAvatarContext = createContext<IContext>(initialContext);

interface Props {
    children: ReactNode;
}

export const ProviderEditAvatarContext = ({ children }: Props) => {
    const { user } = useAuth();
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    useEffect(() => {
        dispatch({
            type: types.INIT_VALUE,
            payload: user?.avatarConfig,
        });
    }, [user]);

    return (
        <EditAvatarContext.Provider value={value}>
            {children}
        </EditAvatarContext.Provider>
    );
};

export const useEditAvatar = () => {
    const { state, dispatch } = useContext(EditAvatarContext);

    const changeSettingAvatar = useCallback(
        (payload: { value: string | number; field: keyof IState }) => {
            dispatch({
                type: types.CHANGE_VALUE,
                payload,
            });
        },
        [dispatch]
    );

    return {
        ...state,
        changeSettingAvatar,
    };
};
