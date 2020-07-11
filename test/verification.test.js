'use strict'

const env = require('dotenv').config()
const verify = require('../lib/verification')

const bvn = process.env['MY_BVN']
const bin = process.env['CARD_BIN']

const Paystack = { verify }

test('returns account holder\'s name', async () => {
	const data = await Paystack.verify.resolveAccount(2003560903, '057')
	expect(data.data.account_name).toBe('ELVIS SUNDAY ONOBO');
})

// test('returns BVN owner data', async () => {
// 	const data = await Paystack.verify.resolveBVN(bvn)
// 	expect(data.status).toBe(true);
// })

// test('check for a matching BVN', async () => {
// 	const data = await Paystack.verify.matchBVN(bvn, 2003560903, '057', 'Elvis', 'Onobo')
// 	expect(data.status).toBe(true);
// })

// test('returns card data', async () => {
// 	const data = await Paystack.verify.resolveCardBin(bin)
// 	expect(data.status).toBe(true);
// })