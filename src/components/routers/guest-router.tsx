import { Navigate, useLocation } from '../../../src/react-router-dom';
import * as queryString from 'query-string';
import { Splash } from '../../components/splash/splash';
import { useAuth } from '../../components/context/auth';

interface Props {
    children: JSX.Element;
}

const GuestRouter = ({ children }: Props) => {
    const { loading, isAuth } = useAuth();
    const { search } = useLocation();

    if (loading) {
        return <Splash />;
    }

    if (isAuth) {
        const searchObj = queryString.parse(search);

        if (searchObj.redirect) {
            return <Navigate to={`/${searchObj.redirect}`} replace />;
        }

        return <Navigate to="/profile" replace />;
    }

    return children;
};

export { GuestRouter };
