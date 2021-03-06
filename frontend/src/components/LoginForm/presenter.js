import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";

export const LoginForm = (props , context) => (
	<div className={formStyles.formComponent}>
		<form className={formStyles.form}>
			<input type="text" placeholder={context.t("Username")} className={formStyles.textInput} />
			<input 
				type="password"
				placeholder="Password"
				className={formStyles.textInput}
			/>
			<input type="submit" value="Log in" className={formStyles.button} />
		</form>
		<span className={formStyles.divider}>{context.t("or")}</span>
		<span className={formStyles.facebookLink}>
			<Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
			{context.t("Log in with Facebook")} 
		</span>
		<span className={formStyles.forgotLink}>Forgot password? </span>
	</div>
);

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LoginForm;