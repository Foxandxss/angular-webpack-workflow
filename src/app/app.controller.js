class AppCtrl {
	constructor(Generic) {
		this.url = 'https://github.com/suvsoob/angularjs-webpack';
		this.greetingText = 'Hello from Angular!';
		this.serviceName = Generic.getName();
	}
}

export default AppCtrl;