import { Navigate } from '../../../react-router-dom';
import { Splash } from '../../../components/splash/splash';
import { useAuth } from '../../../components/context/auth';

const Home = () => {
    const { loading, isAuth } = useAuth();

    if (loading) {
        return <Splash />;
    }

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return <Navigate to="/profile" />;
};

export default Home;
