/*
*
*
*
*/

var environments ={};


//Staging
environments.staging={
	'httpPort' : 3000,
	'httpsPort' : 3001,
	'envName': 'staging'
};

//Staging
environments.production={
	'httpPort' : 5000,
	'httpsPort' : 5001,
	'envName': 'production'
};


var currentEnvironment = typeof(process.env.NODE_ENV)=='string'? process.env.NODE_ENV.toLowerCase():'';

var envoronmentToExport= typeof(environments[currentEnvironment])=='object'?environments[currentEnvironment]:environments.staging;

//export The Module

module.exports=envoronmentToExport;