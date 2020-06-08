'use strict'

const Paystack = require('./paystack')

const SECRET = 'sk_test_2cdccd9139818be646d42e041fc824bf3861ed54'
const PUBLIC = 'pk_test_f41a511f523c1358e17ef7bc12e945919b6387f4'

const accountOwner = Paystack.account(2003560903, '057', SECRET)

accountOwner.then(data => console.log(data))
	.catch(err => console.log(err))
