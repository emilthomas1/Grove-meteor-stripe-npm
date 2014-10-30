## Stripe for Meteor
####[Stripe](https://stripe.com) - Payment infrastructure for the Internet

This package includes the [Stripe npm package](https://www.npmjs.org/package/stripe) .

### Installation

```
meteor add grove:stripe
```


### Usage

#### Client

The same as in the [docs](<https://stripe.com/docs/stripe.js>). Example for reference:

    Stripe.setPublishableKey('YOUR_PUBLISHABLE_KEY');

#### Server

To initiate a Stripe object:

    var Stripe = StripeAPI('YOUR_SECRET_API_KEY');

And then use it:

    Stripe.charges.create({
		amount: 1000,
		currency: "USD",
		card: {
			number: "4242424242424242",
			exp_month: "03",
			exp_year: "2014"
		}
	}, function (err, res) {
		console.log(err, res);
	});
