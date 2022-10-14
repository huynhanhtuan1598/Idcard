import { createContext, ReactNode, useContext } from 'react';
import {
    CreateNotificationInput
} from '../generated/graphql';

import {
    useCreateNotificationMutation
} from '../generated/graphql';


interface INotificationContext {
    createNotification: (data: CreateNotificationInput) => void;
    loading: boolean;
}

const initalContext = {
    createNotification: () => {},
    loading: false,
};

const NotificationContext = createContext<INotificationContext>(initalContext);

interface Props {
    children: ReactNode;
}

export const NotificationProvider = ({ children }: Props) => {
    const [_createNotification, { loading }] = useCreateNotificationMutation();

    const createNotification = (variables: CreateNotificationInput) => {
        _createNotification({
            variables: {
                createNotificationInput: variables,
            },
        });
    };
    const value = {
        createNotification,
        loading,
    };

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);

    return {
        ...context,
    };
};
