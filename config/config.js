/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "de",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},		
		{
			module: "clock",
			position: "top_center"
		},		
		
		{
			module: "calendar",
			header: "Feiertage",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://www.schulferien.org/media/ical/oesterreich/feiertage_2024.ics?k=mHaVuHfBcmdejKpaZ4i8Tg3i7g2WDK8ZNEhNNKivTgtReiz5QFWFc1w4F09zOhhsWBIlasXVY-U4ZjTW0WUTaQ"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "upper_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Wien",
				locationID: "2761369", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "0f0eaf735901e44cda03f033ba6fdcb6"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Wien",
				locationID: "2761369", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "0f0eaf735901e44cda03f033ba6fdcb6"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_center",
			config: {
				feeds: [
					{
						title: "Orf News",
						url: "https://rss.orf.at/news.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
		module: 'MMM-WienerLinien',
		position: 'bottom_left',
		config: {
        stations: ['4134'],
        // Place the other config options here
			}
		},	
			{
	module: "MMM-cryptocurrency",
	position: "bottom_right",
	config: {
		apikey: '0231ee7b-88bc-40a1-8e9b-06e4d9bf2b2b',
		currency: ['ethereum', 'bitcoin'],
		conversion: 'EUR',
		headers: ['change24h', 'change1h', 'change7d'],
		displayType: 'logo',
		showGraphs: false
	}
},
		{
		module: "MMM-Bring",
		position: "bottom_bar",
		config: {
			email: "david.nefzger.gm@gmail.com",
			password: "tivcig-fosquH-6ricko",
			updateInterval: 15, // in Minutes
			listName: "Zuhause", // optional
			showListName: false,
			activeItemColor: "#EE524F",
			latestItemColor: "#4FABA2",
			showLatestItems: false,
			maxItems: 10,
			maxLatestItems: 0,
			locale: "de-DE",
			useKeyboard: false,			
			listDropdown: false
				}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
