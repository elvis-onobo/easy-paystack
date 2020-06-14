/*
 * @ Verification
 * resolve an account
 */
const accountOwner = Paystack.verify.resolveAccount(bankAccount, bankCode)

accountOwner.then(data => console.log(data))
	.catch(err => console.log(err))

/*
 * resolve a BVN
 */
const bvnOwner = Paystack.resolveBVN(bvn)

bvnOwner.then(data => console.log(data))
	.catch(err => console.log(err))

/*
 * Checks if the BVN and data submitted matches
 */
const matchBVN = Paystack.verify.matchBVN(bvn, accountNumber, bankCode, firstName, lastName)

matchBVN.then(data => console.log(data))
	.catch(err => console.log(err))

/*
 * resolve a card
 */
const cardBIN = Paystack.verify.resolveCardBin(bin)

cardBIN.then(data => console.log(data))
	.catch(err => console.log(err))

/*
 * @Miscellaneous
 * List all banks
 */
const banks = Paystack.misc.listBanks()

banks.then(data => console.log(data))
	.catch(err => console.log(err))

/*
* List countries where Paystack operates
*/
const countries = Paystack.misc.countries()

countries.then(data => console.log(data))
	.catch(err => console.log(err))
