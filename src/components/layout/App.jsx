// App.jsx

const m = require('mithril');

import MainStage from './MainStage.jsx';
import NavBar from './NavBar.jsx';

// Components
import StageBanner from '../../components/ui/StageBanner.jsx';
import CardContainer from '../../components/layout/CardContainer.jsx';
import ConferenceCard from '../../components/cards/ConferenceCard.jsx';
import CFPCard from '../../components/cards/CFPCard.jsx';
import EntryForm from '../../components/EntryForm.jsx';
import UIButton from "../../components/ui/UIButton.jsx";

import Auth from "../../services/auth.js";
const auth = new Auth();

// Mock data
import {getMockData} from '../../store/data';
const CONFERENCES = getMockData();

const ConferenceView = (conferences) => [
	<StageBanner action={() => auth.logout()} title="Conferences" />,
	<CardContainer>
		{
			conferences
				.map((conference) => <ConferenceCard conference={conference} />)
		}
	</CardContainer>
];

const CFPView = (conferences) => [
	<StageBanner action={() => auth.logout()} title="Registration Deadline" />,
	<CardContainer>
		{
			conferences
				.filter(conference => conference.CFP)
				.map(conferenceWithCFP => <CFPCard cfp={true} conference={conferenceWithCFP} />)
		}
	</CardContainer>
];

const FormView = () => [
	<StageBanner action={() => auth.logout()} title="Add Event" />,
	<CardContainer>
		<EntryForm />
	</CardContainer>
];

const WelcomeView = () => [
	<div class="welcomeViewOuter">
		<h1 class="app-title">Conference Tracker</h1>
		<h2 class="app-greeting">Welcome</h2>
		<div class="app-description">Track conferences and other event dates.</div>
		<div class="login-button-outer">
		  <UIButton action={() => auth.login()} buttonName="Login" class="login-button" />
		</div>
	</div>
];

const App = {
	oncreate: (vnode) => {
		const mainStage = vnode.dom.querySelector(".main-stage");

		m.route(mainStage, "/conferences", {
      "/auth": {
        view: () => WelcomeView()
      },
      "/conferences": {
        view: () => ConferenceView(CONFERENCES)
      },
      "/cfp": {
        view: () => CFPView(CONFERENCES)
      },
      "/entry": {
        view: () => FormView()
      }
		});
	},
	view: ({ children }) =>
		<div class="App">
		  <NavBar />
			<MainStage>
				{children}
			</MainStage>
		</div>
};

export default App;