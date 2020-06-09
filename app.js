'use strict'

const Paystack = require('./paystack')

const accountOwner = Paystack.account(2003560903, '057')

accountOwner.then(data => console.log(data))
	.catch(err => console.log(err))

// console.log(Paystack.bvn())
