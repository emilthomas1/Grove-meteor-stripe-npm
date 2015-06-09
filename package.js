Package.describe({
	summary: "Stripe npm package for Meteor.",
	version: "0.2.0",
	name: "grove:stripe-npm",
	git: "https://github.com/grovelabs/meteor-stripe-npm.git"
});

Npm.depends({ "stripe": "3.3.4" });

Package.onUse(function (api) {
  api.addFiles('npm.stripe.js', 'server');
  api.export([
    'StripeAPI'
  ], 'server');
});
