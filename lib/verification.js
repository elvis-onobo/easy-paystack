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

/**
 * 
 * Checks if the BVN and data submitted matches 
 */
Paystack.matchBVN = async function (bvn, accountNumber, bankCode, firstName, lastName) {
	const response = await fetch(`${BASE_URL}/bvn/match`, {
		method: 'POST', // can use GET, POST, PUT, DELETE
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${SK}`
		},
		body: JSON.stringify({
			bvn: bvn,
			account_number: accountNumber,
			bank_code: bankCode,
			first_name: firstName,
			last_name: lastName
		})
	})
	return response.json()
}


/**
 * Resolves Card BIN, returns card details
 */
Paystack.resolveCardBin = async function (bin) {
	const response = await fetch(`${BASE_URL}/decision/bin/${bin})`, {
		method: 'GET', // can use GET, POST, PUT, DELETE
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${SK}`
		}
	})
	return response.json()
}


/*
 * Verifies a customer profile by Truecaller 
 */
Paystack.resolvePhoneNumber = async function (phoneNumber, callbackURL) {
	const response = await fetch(`${BASE_URL}/verifications`, {
		method: 'POST', // can use GET, POST, PUT, DELETE
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${SK}`,
			'User-Agent': 'Paystack-Developers-Hub'
		},
		body: JSON.stringify({
			verification_type: 'truecaller',
			phone: phoneNumber,
			callback_url: callbackURL
		})
	})
	return response.json()
}