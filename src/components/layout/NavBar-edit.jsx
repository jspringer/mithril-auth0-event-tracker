// NavBar.jsx

const m = require("mithril");

import NavButton from '../ui/NavButton.jsx';
import LogoutButton from '../ui/LogoutButton.jsx';

const NavBar = {
	view: ({ attrs }) =>
		<div class="nav-bar">
			<div class="nav-bar-title-outer">
			  <span class="nav-bar-title">Conference Tracker</span>
			</div>
			<div class="nav-bar-icons-outer">
				<NavButton path={`cfp`} icon={<i class="fas fa-microphone"/>} />
				<NavButton path={`conferences`} icon={<i class="fas fa-users"/>} />
				<NavButton path={`entry`} icon={<i class="fas fa-edit"/>} />
			</div>
			<div class="nav-bar-logout-outer">
			  <LogoutButton action={attrs.action} />
			</div>
		</div>
};

export default NavBar;