import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getTokenLocalStorage } from '../../utils/localStorage';


interface ParamsUserAuthenticate {
	path: string;
	children: ReactNode;
}

const UserAuthenticate: React.FC<ParamsUserAuthenticate> = ({
	path,
	children,
}) => {
	const token: string | null = getTokenLocalStorage();
	if (token) return <Navigate to={path}></Navigate>;
	return <>{children}</>;
};
export default UserAuthenticate;
