'use strict'

const env = require('dotenv').config()
const transactions = require('../lib/transactions')

const bvn = process.env['MY_BVN']
const bin = process.env['CARD_BIN']

const Paystack = { transactions }

test('Test that a transaction is initialized', async () => {
	const data = await Paystack.transactions.initialize(100, 'rapknowlogy@gmail.com')
	expect(data.status).toBe(true);
})

