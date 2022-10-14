import { Navigate } from '../../react-router-dom';
// import { Splash } from '../../components/splash/splash';
import { useAuth } from '../../components/context/auth';

interface Props {
	children: JSX.Element;
}

const UserRouter = ({ children }: Props) => {
	const { loading, isAuth } = useAuth();

	if (loading) {
		// return <Splash />;
	}

	if (!isAuth) {
		return <Navigate to="/login" />;
	}

	return children;
};

export { UserRouter };
