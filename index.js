'use strict'

const env = require('dotenv').config()
const verify = require('./lib/verification')
const misc = require('./lib/miscellaneous')

const bvn = process.env['MY_BVN']
const bin = process.env['CARD_BIN']

/**
 * Bundle all the methods into one object
 */
const Paystack = {
	verify,
	misc
}

/*
 * Exports
 */
module.exports = Paystack

// // resolve an account
// const accountOwner = Paystack.verify.resolveAccount(2003560903, '057')

// accountOwner.then(data => console.log(data))
// 	.catch(err => console.log(err))

// // resolve a BVN
// const bvnOwner = Paystack.resolveBVN(bvn)

// bvnOwner.then(data => console.log(data))
// 	.catch(err => console.log(err))

// // resolve a card
// const cardBIN = Paystack.verify.resolveCardBin(bin)

// cardBIN.then(data => console.log(data))
// 	.catch(err => console.log(err))

/**
 * List all banks
 */
const banks = Paystack.misc.listBanks()

banks.then(data => console.log(data))
	.catch(err => console.log(err))



