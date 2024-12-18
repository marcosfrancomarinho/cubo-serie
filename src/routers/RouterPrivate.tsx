import { ReactNode } from 'react';
import useAuthenticate from '../hooks/useAuthenticate';
import Fallback from '../components/Fallback/Fallback';
import { Navigate } from 'react-router-dom';

interface ParamsRouterPrivate {
	redirectionRouter: string;
	children: ReactNode;
	pathname: string;
}

const RouterPrivate: React.FC<ParamsRouterPrivate> = ({
	redirectionRouter,
	children,
	pathname,
}) => {
	const { isLogin, isLoading } = useAuthenticate(pathname);
	if (isLoading) return <Fallback />;
	if (isLogin) return <>{children}</>;
	return <Navigate to={redirectionRouter} replace />;
};

export default RouterPrivate;
