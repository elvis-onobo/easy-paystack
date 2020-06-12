'use strict'

const env = require('dotenv').config()
const misc = require('../lib/miscellaneous')

const bvn = process.env['MY_BVN']
const bin = process.env['CARD_BIN']

const Paystack = { misc }

test('returns list of banks', async () => {
	const data = await Paystack.misc.listBanks()
	expect(data.status).toBe(true);
})