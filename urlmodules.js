const url = require('url');

const myURL = new URL('http://luckyjain.com')

myURL.pathname = '/projects/react/adminDashboard'
myURL.hash = 'details'

console.log(myURL)