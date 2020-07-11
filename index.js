'use strict'

const env = require('dotenv').config()
const verify = require('./lib/verification')
const misc = require('./lib/miscellaneous')
const transactions = require('./lib/transactions')

const bvn = process.env['MY_BVN']
const bin = process.env['CARD_BIN']

/**
 * Bundle all the methods into one object
 */
const Paystack = {
	transactions,
	verify,
	misc
}

/*
 * Exports
 */
module.exports = Paystack


const listTrx = Paystack.transactions.listTrx()

listTrx.then(data => console.log(data))
	.catch(err => console.log(err))

/*
 * THIS FUNCTIONALITY APPEARS TO BE DEPRECATED BY PAYSTACK
 * @ params: Phone Number e.g 234802222222, Callback URL
 * Verify a customer by his phone number through Truecaller
 */
// const resolvedPhoneNumber = Paystack.verify.resolvePhoneNumber(2348039101861, 'google.com')

// resolvedPhoneNumber.then(data => console.log(data))
// 	.catch(err => console.log(err))
