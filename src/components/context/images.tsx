import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useReducer,
} from 'react';
import { Loading } from '../loading/loading';
import { ImageS3, useGetImagesS3Query } from '../generated/graphql';
import { useAuth } from './auth';
import { IAction } from './interface';

interface IState {
    loading: boolean;
    images: ImageS3[];
}

const initialState: IState = {
    loading: true,
    images: [],
};

const types = {
    LOADING: 'IMAGES/LOADING',
    LOAD_IMAGE_DONE: 'IMAGES/LOAD_IMAGE_DONE',
    ADD_IMAGE: 'IMAGES/ADD_IMAGE',
};

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case types.LOADING:
            return { ...state, loading: true };

        case types.LOAD_IMAGE_DONE:
            return { ...state, images: action.payload, loading: false };

        case types.ADD_IMAGE:
            return {
                ...state,
                images: [...state.images, action.payload],
            };
        default:
            return state;
    }
};

interface IContext {
    state: IState;
    dispatch: React.Dispatch<any>;
    refetchImagesUser: () => void;
}

const initialContext: IContext = {
    state: initialState,
    dispatch: () => {},
    refetchImagesUser: () => {},
};

const Context = createContext<IContext>(initialContext);

interface Props {
    children: ReactNode;
}

const ProviderImagesUser = ({ children }: Props) => {
    const { user, loading: loadingAuth } = useAuth();
    const [state, dispatch] = useReducer(reducer, initialState);

    const { loading, refetch } = useGetImagesS3Query({
        onError(error) {
            console.log(error);
            dispatch({
                type: types.LOAD_IMAGE_DONE,
                payload: [],
            });
        },
        onCompleted(data) {
            if (data.getImagesS3.success) {
                dispatch({
                    type: types.LOAD_IMAGE_DONE,
                    payload: data.getImagesS3.images,
                });
            }
        },
    });

    useEffect(() => {
        if (user) {
            refetch();
        }
    }, [user]);

    const value = useMemo(
        () => ({ state, dispatch, refetchImagesUser: refetch }),
        [state, dispatch, refetch]
    );

    if (loadingAuth || loading) {
        return <Loading />;
    }

    // if (error) {
    //     return <></>;
    // }

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useImagesUser = () => {
    const { state, dispatch, refetchImagesUser } = useContext(Context);

    const loadImagesDone = (images: ImageS3[]) => {
        dispatch({
            type: types.LOAD_IMAGE_DONE,
            payload: images,
        });
    };

    const addImage = (image: ImageS3) => {
        dispatch({
            type: types.ADD_IMAGE,
            payload: image,
        });
    };

    return {
        ...state,
        refetchImagesUser,
        loadImagesDone,
        addImage,
    };
};

export { ProviderImagesUser, useImagesUser };
