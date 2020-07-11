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
 * Initialises the transaction
 * @params : amount, email
 */
Paystack.initialize = async function (amount, email) {
	const response = await fetch(`${BASE_URL}/transaction/initialize`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${SK}`
		},
		body: JSON.stringify({
			amount,
			email
		})
	})
	return response.json()
}

/**
 * Verifies the status of a transaction
 * @param :reference
 */
Paystack.verifyTrx = async function (reference) {
	const response = await fetch(`${BASE_URL}/transaction/verify/${reference}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${SK}`
		}
	})
	return response.json()
}