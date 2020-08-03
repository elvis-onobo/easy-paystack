# Easy Paystack

The goal of the Easy Paystack package is to make working with Paystack APIs as easy as possible for the newbie. It simplifies each API call into a simple method that can be called and used.

### Some Advantages

1. While other packages are structured in a way that allows developers to include API keys within their code, with Easy Paystack you only need to set it up in your as an environment variable and you are good to go. This reduces the margin of error from copying and pasting your API keys all over the place. Also, this helps you build more secure apps and avoid the mistake of pushing your API keys to version control such as Github.
2. The main code makes heavy use of async/await so you can access returned values with just a simple line of code in your async method.

### Contribution

You are welcome to contribute to this package. However, kindly follow this convention:

Kindly stick to the use of async/await

Write a test for for the methods you contribute

Write an example usage for the method you contribute and add it to the usage.js file

Add your methods to the Paystack object to keep sync and maintain the naming convention. The naming convention is as below:

`Paystack.groupName.methodName()`

For example, a method created to check for a user's BVN will be under the Verification group name. It will therefore be:

`Paystack.verification.resolveBVN()`

This is not rigid. You can use appropriate shorter versions of the words as long as the meaning is not lost and users will be able to understand what it stands for and what your code does.

### Using the Package

`const Paystack = require('easy-paystack')`

`const banks = Paystack.misc.listBanks()`

```
banks.then(data => console.log(data))
  .catch(err => console.log(err))
```

Result: You get the list of banks currently supported by Paystack

An async use would be something like this:

```
const getListOfBanks = async ()=>{
  let result = await Paystack.misc.listBanks()

  // use result to do somthing else
}
```

Result: You get the list of banks currently supported by Paystack

### Current Methods

#### Transactions

Initialize transaction: `transactions.initialize(amount, email)`

Verify Transaction: `transactions.verifyTrx(reference)`

List Transactions: `transactions.listTrx()`

Fetch Transaction: `transactions.fetchTrx(id)`

#### Verification

Verify BVN Match: `verify.matchBVN((bvn, accountNumber, bankCode, firstName, lastName)`

Resolve BVN: `verify.resolveBVN(bvn)`

Resolve Account Number: `verify.resolveAccount(bankAccount, bankCode)`

Resolve Card BIN: `verify.resolveCardBin(bin)`

#### Miscellaneous

List Banks: `misc.listBanks()`

List Countries: `misc.countries()`

### Environment Settings

Easy Paystack has been built such that you would not need to copy your public and private keys around. All you need to do is to create a .env file in the root of your app and add your keys like so:

PAYSTACK_SECRET_KEY=sk_test**\*\*\*\***\*\*\***\*\*\*\***

PAYSTACK_PUBLIC_KEY=pk_test**\*\*\*\***\*\*\***\*\*\*\***

You may also add your BVN and Card Bin using .env like so when testing:

MY_BVN=\***\*\*\*\*\*\*\***

CARD_BIN=**\*\***

### Licence

MIT

### Help This Package Get Noticed

You can share this package with your friends and give it a star here on Github.
