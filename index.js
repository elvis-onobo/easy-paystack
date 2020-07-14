'use strict'

const env = require('dotenv').config()
const verify = require('./lib/verification')
const misc = require('./lib/miscellaneous')
const transactions = require('./lib/transactions')
const { listBanks } = require('./lib/miscellaneous')

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