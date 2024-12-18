import { ReactNode } from 'react';
import useAuthenticate from '../hooks/useAuthenticate';
import Fallback from '../components/Fallback/Fallback';
import { Navigate } from 'react-router-dom';

interface ParamsRouterPublic {
	redirectionToRouterAuthenticate: string;
	children: ReactNode;
	pathname: string;
}

const RouterPublic: React.FC<ParamsRouterPublic> = ({
	redirectionToRouterAuthenticate,
	children,
	pathname,
}) => {
	const { isLogin, isLoading } = useAuthenticate(pathname);
	if (isLoading) return <Fallback />;
	if (isLogin) return <Navigate to={redirectionToRouterAuthenticate} replace />;
	return <>{children}</>;
};

export default RouterPublic;
