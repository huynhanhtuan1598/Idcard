import { Navigate } from '../../../src/react-router-dom';

import { Splash } from '../../components/splash/splash';
import { useAuth } from '../../components/context/auth';

import { ETypeUser } from '../generated/graphql';

interface Props {
    children: JSX.Element;
}

const AdminRouter = ({ children }: Props) => {
    const { loading, isAuth, user } = useAuth();

    if (loading) {
        return <Splash />;
    }

    if (!isAuth) {
        return <Navigate to="/login?redirect=admin" replace />;
    }

    if (user?.type !== ETypeUser.Admin) {
        return <Navigate to="/profile" />;
    }

    return children;
};

export { AdminRouter };
