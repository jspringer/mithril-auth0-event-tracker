// data.js

const CONFERENCES = [
	{
		name: "MySQL Tutorial",
		location: "Brooklyn, NY",
		date: "06/07/2019",
		favorite: false,
		CFP: false,
		CFPDate: "",
		CFPCompleted: false
	},
	{
		name: "Vue.js 3 Launch",
		location: "San Francisco, CA",
		date: "07/18/2019",
		favorite: true,
		CFP: false,
		CFPDate: "",
		CFPCompleted: false
	},
	{
		name: "Angular 8 Launch",
		location: "San Francisco, CA",
		date: "09/25/2019",
		favorite: true,
		CFP: true,
		CFPDate: "09/23/2019",
		CFPCompleted: false
  },
];

exports.getMockData = () => CONFERENCES;
exports.setMockData = (conference) => CONFERENCES.push(conference);