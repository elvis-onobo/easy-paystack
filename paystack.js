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

/**
 * resolved account number and returns the holder's name
 */
Paystack.resolveAccount = async function (accountNumber, bankCode) {
	const response = await fetch(`${BASE_URL}/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`, {
		method: 'GET', // can use GET, POST, PUT, DELETE
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${SK}`
		}
	})
	return response.json()
}

/**
 * Resolves BVN and returns the holder's data
 */
Paystack.resolveBVN = async function (bvn) {
	const response = await fetch(`${BASE_URL}/bank/resolve_bvn/${bvn}`, {
		method: 'GET', // can use GET, POST, PUT, DELETE
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${SK}`
		}
	})
	return response.json()
}