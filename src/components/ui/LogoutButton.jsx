// LogoutButton.jsx

const m = require("mithril");

const LogoutButton = {
	view: ({ attrs }) =>
		<div onclick={attrs.action} class="mouse-pointer logout-button">
			<i class="fas fa-sign-out-alt logout-button-color"/>
		</div>
};

export default LogoutButton;