# Easy Paystack
The goal of the Easy Paystack package is to make working with Paystack APIs as easy as possible for the newbie.

### Some Advantages
1. While other packages are structured in a way that allows developers to include API keys within their code, with Easy 
Paystack you only need to set it up in your as an environment variable and you are good to go. This reduces the margin of error
from copying and pasting your API keys all over the place. Also, this helps you build more secure apps and avoid the mistake
of pushing your API keys to version control such as Github.
2. The main code makes heavy use of async/await so you can access returned values with just about two lines of code. I'd be optimizing
this such that the promise is resolved from the end of the package and only one response is sent back: the success case or the error
case.

### Contribution
You are welcome to contribute to this package. However, you need to follow this convention:
1. Kindly stick to the use of __async/await__
2. Write a test for for the methods you contribute
3. Write an example usage for the method you contribute and add it to the __usage.js__ file
4. Add your methods to the Paystack object to keep sync and maintain the naming convention. The naming convention is as below:
  ```Paystack.groupName.methodName()```
  For example, a method created to check for a user's BVN will be under the Verification group name. It will therefor be:
  ```Paystack.verification.resolveBVN()```
  This is not rigid. You can use appropriate shorter versions of the words as long as the meaning is not lost and users will 
  be able to understand what it stands for and what your code does.
  
  ### Licence
  MIT
  
  ### Help This Package Get Noticed
  You can share this package with your friends and give us it a star here on Github.
