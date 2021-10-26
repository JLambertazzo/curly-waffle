var express = require('express');
var router = express.Router();

/** Part 3
 * Routes in a router object work exactly the same as in the app itself
 * Let me know if you have any more questions and good luck habibti!!!!
 */
router.get('/fetchAllData', (req, res) => {
  res.json({data1: 'judy', data2: 'naamani', data3: 'habibti'});
})

module.exports = router
