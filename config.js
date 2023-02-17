// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'FatAss',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Wake up!',
	greetingAfternoon: 'It only noon,',
	greetingEvening: 'Monsters come out in dark,',
	greetingNight: 'Why are you awake!',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '9f43463f2f8eb40b6df87c0facba61ee', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Vercel',
			icon: 'mail',
			link: 'https://vercel.com/uvacoder',
		},
		{
			id: '3',
			name: 'Mastadon',
			icon: 'server',
			link: 'https://mastodon.social/@uvacoder',
		},
		{
			id: '4',
			name: 'Notion',
			icon: 'list',
			link: 'https://notion.so',
		},
		{
			id: '5',
			name: 'Slack',
			icon: 'slack',
			link: 'https://app.slack.com/client/T0266FRGM/D049HS9GB0W',
		},
		{
			id: '6',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Codepen',
			icon: 'codepen',
			link: 'https://codepen.io/uvacoder',
		},
		{
			id: '2',
			name: 'Codesandbox',
			icon: 'codesandbox',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'Stackblitz',
			icon: 'dribbble',
			link: 'https://dribbble.com/uvacoder',
		},
		{
			id: '4',
			name: 'Dribbble',
			icon: 'dribbble',
			link: 'https://dribbble.com/uvacoder',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/@uvacoder',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://www.figma.com/@uvacoder',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Inspirational',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Classic',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Oldies',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Rock',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Dribbble',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
