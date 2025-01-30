import React from "react";
import { Navigate } from "react-router-dom";
import style from "../../../styles/Form.module.css";
import BtnSubmit from "../../Button/Submit/Btn.submit";
import BtnReset from "../../Button/Reset/Btn.reset";
import BtnRedirection from "../../Button/Redirection/Btn.redirection";
import Spinner from "../../Spinner/Spinner";
import Alert from "../../Alert/Alert";
import { useFormLogin } from "./Login.form.hook";
import InputEmail from "../../Input/Email/Input.email";
import InputPassword from "../../Input/Password/Input.password";

const LoginForm: React.FC = () => {
	const { datas, abortRequest, emailLocation, error, handleSubmit, hide, loading, setHide } = useFormLogin();

	if (datas && !error) return <Navigate to="/welcome" replace />;
	return (
		<section className={style.container_form}>
			<h2 className={style.title}>Faça o Login e Aproveite o Cinema em Casa:</h2>
			<form onSubmit={handleSubmit} className={style.form}>
				<InputEmail value={emailLocation} />
				<InputPassword />
				<div className={style.btn_group}>
					<BtnSubmit disabled={loading} content={loading ? <Spinner /> : "Entrar"} />
					<BtnReset onClick={abortRequest} content="Cancelar" />
					<BtnRedirection path="/signup">Criar conta</BtnRedirection>
				</div>
			</form>
			{error && !loading && hide && (
				<Alert hide={hide} setHide={setHide}>
					{error.message || "Erro desconhecido. Tente novamente mais tarde."}
				</Alert>
			)}
		</section>
	);
};

export default LoginForm;
