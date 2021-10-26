const express = require('express');
const apiRouter = require('./routes/api')
const app = express()
const port = 3000

/** Part 1
 * This is a demo for express router
 * The purpose of the router is to serve backend information
 * in a convenient way for your frontend to access.
 * The fancy stuff with express router is just to keep your app.js
 * from getting too big
 * [jump to part 2]
 */

// IGNORE until after you read the rest
// The string before the router object specifies a prefix for all routes
// in the router. If the router has a /fetch route, in your app it will be
// at /api/fetch
// app.use('/api', apiRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/** Part 2
 * Here is an example api call, you'll notice if you run this app (npm start)
 * and open your browser to http://localhost:3000/api/fetchAllData you'll get
 * json data - which is useful for your frontend, but if you write your whole
 * api here app.js will be huge and hard to maintain!!
 * This is where express router comes in, we make a router - not a full express
 * app - just an object to define and handle certain routes. To see it in action,
 * uncomment the line above "app.use(apiRouter..." and restart your app. Note that
 * since the .use call is before the route below is defined, the one below will
 * be overwritten
 * 
 * Part 3 in routes>api.js
 */
app.get('/api/fetchAllData', (req, res) => {
  res.json({keeping: 'functions', here: 'will', make: 'app.js', bloated: '!'})
})

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`)
})
