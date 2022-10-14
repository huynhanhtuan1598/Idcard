import { NetworkStatus } from '@apollo/client';
import React, {
    createContext,
    ReactNode,
    useContext,
    useMemo,
    useReducer,
} from 'react';
import { removeToken } from '../api/token';
// import { IThemeConfig } from '../collection';
// import { Splash } from '../components';
import {
    AvatarConfigInfoFragment,
    useMeQuery,
    User,
} from '../generated/graphql';
import { Splash } from '../splash/splash';
// import { IAction } from './interface';
interface IState {
    loading: boolean;
    isAuth: boolean;
    user?: User;
}

interface IContext {
    state: IState;
    dispatch: React.Dispatch<any>;
    refetch: () => void;
}

// reducer
const initialState: IState = {
    loading: true,
    user: undefined,
    isAuth: false,
};

const types = {
    LOADING: 'AUTH/LOADING',
    LOAD_USER_SUCCESS: 'AUTH/LOAD_USER_SUCCESS',
    LOAD_USER_FAILED: 'AUTH/LOAD_USER_FAILED',
    LOGOUT: 'AUTH/LOGOUT',
    UPDATE_INFO: 'AUTH/UPDATE_INFO',
    UPDATE_AVATAR: 'AUTH/UPDATE_AVATAR',

    CHANGE_THEME: 'PROFILE/CHANGE_THEME',
    UPDATE_THEME_CONFIG: 'PROFILE/UPDATE_THEME_CONFIG',

    UPDATE_AVATAR_CONFIG: 'PROFILE/UPDATE_AVATAR_CONFIG',
};

// const reducer = (state: IState, action: IAction): IState => {
//     switch (action.type) {
//         case types.LOADING:
//             return {
//                 ...state,
//                 loading: true,
//             };

//         case types.LOAD_USER_SUCCESS:
//             return {
//                 ...state,
//                 user: action.payload,
//                 isAuth: true,
//                 loading: false,
//             };

//         case types.UPDATE_AVATAR_CONFIG:
//             return {
//                 ...state,
//                 user: action.payload,
//             };

//         // case types.UPDATE_INFO:
//         //     return {
//         //         ...state,
//         //         user: {
//         //             ...state.user,
//         //             ...pick(action.payload, [
//         //                 'hash_url',
//         //                 'fullname',
//         //                 'career_position',
//         //                 'company',
//         //                 'list',
//         //             ]),
//         //         },
//         //     };

//         // case types.UPDATE_AVATAR:
//         //     return {
//         //         ...state,
//         //         user: {
//         //             ...state.user,
//         //             avatarS3: action.payload,
//         //         },
//         //     };

//         case types.LOAD_USER_FAILED:
//             return {
//                 ...state,
//                 user: undefined,
//                 isAuth: false,
//                 loading: false,
//             };

//         // case types.CHANGE_THEME:
//         //     return {
//         //         ...state,
//         //         user: { ...state.user, defaultTemplate: action.payload },
//         //     };

//         // case types.UPDATE_THEME_CONFIG:
//         //     return {
//         //         ...state,
//         //         user: {
//         //             ...state.user,
//         //             themeConfig: action.payload,
//         //         },
//         //     };

//         case types.LOGOUT:
//             return {
//                 ...initialState,
//                 loading: false,
//             };

//         default:
//             return state;
//     }
// };

const defaultValue = {
    state: initialState,
    dispatch: () => {},
    refetch: () => {},
};
const AuthContext = createContext<IContext>(defaultValue);

interface Props {
    children: ReactNode;
}

// export const ProviderAuthContext = ({ children }: Props) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const { networkStatus, refetch } = useMeQuery({
//         notifyOnNetworkStatusChange: true,
//         onError(_error) {
//             dispatch({ type: types.LOAD_USER_FAILED });
//         },
//         onCompleted(data) {
//             if (data.me?.success) {
//                 dispatch({
//                     type: types.LOAD_USER_SUCCESS,
//                     payload: data.me.user,
//                 });
//             } else {
//                 dispatch({ type: types.LOAD_USER_FAILED });
//             }
//         },
//     });

//     const value = useMemo(
//         () => ({ state, dispatch, refetch }),
//         [state, refetch, dispatch]
//     );
//     if (networkStatus === NetworkStatus.refetch) return <Splash />;

//     return (
//         <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
//     );
// };

export const useAuth = () => {
    const value = useContext(AuthContext);

    const { state, dispatch, refetch } = value;

    const loadUserSuccess = (user: any) => {
        dispatch({
            type: types.LOAD_USER_SUCCESS,
            payload: user,
        });
    };

    const logout = () => {
        removeToken();
        dispatch({
            type: types.LOGOUT,
        });
    };

    const updateInfo = (user: any) => {
        dispatch({
            type: types.UPDATE_INFO,
            payload: user,
        });
    };

    const updateAvatarConfig = (user: any) => {
        dispatch({
            type: types.UPDATE_AVATAR_CONFIG,
            payload: user,
        });
    };

    const updateAvatar = (avatarS3: any) => {
        dispatch({
            type: types.UPDATE_AVATAR,
            payload: avatarS3,
        });
    };

    const changeTheme = (theme: string) => {
        dispatch({
            type: types.CHANGE_THEME,
            payload: theme,
        });
    };

    // const changeConfigTheme = (themeConfig: IThemeConfig) => {
    //     dispatch({
    //         type: types.UPDATE_THEME_CONFIG,
    //         payload: themeConfig,
    //     });
    // };

    const loadUserFailed = () => {
        dispatch({ type: types.LOAD_USER_FAILED });
    };

    return {
        ...state,
        updateInfo,
        updateAvatarConfig,
        updateAvatar,
        loadUserSuccess,
        logout,
        loadUserFailed,
        changeTheme,
        // changeConfigTheme,
        refetch,
    };
};
