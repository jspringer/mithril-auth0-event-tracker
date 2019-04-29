// NavBar.jsx

const m = require("mithril");

import NavButton from '../ui/NavButton.jsx';

const NavBar = {
	view: () =>
		<div class="nav-bar">
			<div class="nav-bar-title-outer">
			  <span class="nav-bar-title">Conference Tracker</span>
			</div>
			<div class="nav-bar-icons-outer">
				<NavButton path={`cfp`} icon={<i class="fas fa-stopwatch nav-bar-icon"/>} />
				<NavButton path={`conferences`} icon={<i class="far fa-calendar-alt nav-bar-icon"/>} />
				<NavButton path={`entry`} icon={<i class="fas fa-edit nav-bar-icon"/>} />
			</div>
		</div>
};

export default NavBar;