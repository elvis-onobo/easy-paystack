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


