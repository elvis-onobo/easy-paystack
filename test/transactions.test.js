'use strict'

const env = require('dotenv').config()
const transactions = require('../lib/transactions')

const bvn = process.env['MY_BVN']
const bin = process.env['CARD_BIN']

const Paystack = { transactions }

test('Test that a transaction can be initialized', async () => {
	const data = await Paystack.transactions.initialize(100, 'rapknowlogy@gmail.com')
	expect(data.status).toBe(true);
})

test('Test that a transaction can be verified', async () => {
	const data = await Paystack.transactions.verifyTrx('qp2lr9313q')
	expect(data.status).toBe(true);
})

test('Test that a list of transactions carried out on the integration can be retrieved', async () => {
	const data = await Paystack.transactions.listTrx()
	expect(data.status).toBe(true);
})
