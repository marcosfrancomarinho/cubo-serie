import { ReactNode } from "react";
import { useAuthenticate } from "../hooks/Use.authenticate";
import Fallback from "../components/Fallback/Fallback";
import { Navigate } from "react-router-dom";

interface ParamsRouterPrivate {
	redirectionToRouterDenied: string;
	children: ReactNode;
	pathname: string;
}

const RouterPrivate: React.FC<ParamsRouterPrivate> = ({ redirectionToRouterDenied, children, pathname }) => {
	const { isLogin, isLoading } = useAuthenticate(pathname);
	if (isLoading) return <Fallback />;
	if (isLogin) return <>{children}</>;
	return <Navigate to={redirectionToRouterDenied} replace />;
};

export default RouterPrivate;
