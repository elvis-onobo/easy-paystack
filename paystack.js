/*
 * Copyright(c) 2020, Elvis Onobo
 * Twitter: elvis_onobo
 * elvis.onobo@gmail.com
 */

'use strict'

/**
 * Packages
 */
const env = require('dotenv').config()
const fetch = require("node-fetch");

const Paystack = {}

/*
 * Get Paystack keys from .env 
 */
const PK = process.env['PAYSTACK_PUBLIC_KEY']
const SK = process.env['PAYSTACK_SECRET_KEY']

const BASE_URL = 'https://api.paystack.co'

/*
 * Exports
 */
module.exports = Paystack

Paystack.account = async function (accountNumber, bankCode) {
	//takes account number and returns the name of the user that owns the account
	// use secret key with this endpoint

	const response = await fetch(`${BASE_URL}/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`, {
		method: 'GET', // can use GET, POST, PUT, DELETE
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${SK}`
		}
	})
	return response.json()
}

Paystack.bvn = function () {
	return `${process.env.PAYSTACK_PUBLIC_KEY}`
}