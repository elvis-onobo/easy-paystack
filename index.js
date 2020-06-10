'use strict'

const env = require('dotenv').config()
const Paystack = require('./paystack')

const bvn = process.env['MY_BVN']

// resolve an account
const accountOwner = Paystack.resolveAccount(2003560903, '057')

accountOwner.then(data => console.log(data))
	.catch(err => console.log(err))

// resolve a BVN
// const bvnOwner = Paystack.resolveBVN(bvn)

// bvnOwner.then(data => console.log(data))
// 	.catch(err => console.log(err))

// resolve a card
const cardBIN = Paystack.resolveCardBin(506109)

cardBIN.then(data => console.log(data))
	.catch(err => console.log(err))