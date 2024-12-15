import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthenticate from '../../hooks/useAuthenticate';
import Fallback from '../Fallback/Fallback';

interface ParamsUserAuthenticate {
	path: string;
	children: ReactNode;
	router: string;
}

const UserAuthenticate: React.FC<ParamsUserAuthenticate> = ({
	path,
	children,
	router,
}) => {
	const { isLogin, isLoading } = useAuthenticate(router);
	if (isLoading) return <Fallback />;
	if (isLogin) return <Navigate to={path} replace />;
	return <>{children}</>;
};

export default UserAuthenticate;
