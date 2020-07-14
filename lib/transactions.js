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

/**
 * Gets a list of transactions carried out on your integration
 */
Paystack.listTrx = async function () {
	const response = await fetch(`${BASE_URL}/transaction`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${SK}`
		}
	})
	return response.json()
}

/**
 * Gets details of a single transaction
 * @params Integer: ID
 */
Paystack.fetchTrx = async function (id) {
	const response = await fetch(`${BASE_URL}/transaction/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${SK}`
		}
	})
	return response.json()
}

/**
 * Charges reusable endpoints
 * @params : amount, email
 */
// Paystack.chargeAuth = async function (amount, email, authCode) {
// 	const response = await fetch(`${BASE_URL}/transaction/charge_authorization`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `Bearer ${SK}`
// 		},
// 		body: JSON.stringify({
// 			amount,
// 			email,
// 			authorization_code: authCode
// 		})
// 	})
// 	return response.json()
// }