exports.config = {
	framework: 'jasmine2',
	specs: ['specs/*spec.js'],
	seleniumAddress: 'http://hub:4444/wd/hub',
	capabilities: {
		browserName: 'chrome',
		'goog:chromeOptions': {
			args: ["--disable-gpu", "--window-size=800,600"]
		}
	},
	getPageTimeout: 180000,
	allScriptsTimeout: 180000,
	jasmineNodeOpts: {
		defaultTimeoutInterval: 300000
	},
	onPrepare: function() {
		var jasmineReporters = require('jasmine-reporters');
		var junitReporter = new jasmineReporters.JUnitXmlReporter({
	
		  // setup the output path for the junit reports
		  savePath: 'output/',
		  consolidateAll: true
	
		});
		jasmine.getEnv().addReporter(junitReporter);
	  }
};