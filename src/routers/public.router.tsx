import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticate } from "../hooks/Use.authenticate";
import Fallback from "../components/Fallback/Fallback";

interface ParamsRouterPublic {
	redirectionToRouterAuthenticate: string;
	children: ReactNode;
	pathname: string;
}

const RouterPublic: React.FC<ParamsRouterPublic> = ({ redirectionToRouterAuthenticate, children, pathname }) => {
	const { isLogin, isLoading } = useAuthenticate(pathname);
	if (isLoading) return <Fallback />;
	if (isLogin) return <Navigate to={redirectionToRouterAuthenticate} replace />;
	return <>{children}</>;
};

export default RouterPublic;
