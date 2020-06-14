/*
 * @ Verification
 * resolve an account
 */
const accountOwner = Paystack.verify.resolveAccount(2003560903, '057')

accountOwner.then(data => console.log(data))
	.catch(err => console.log(err))

/*
 * resolve a BVN
 */
const bvnOwner = Paystack.resolveBVN(bvn)

bvnOwner.then(data => console.log(data))
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
