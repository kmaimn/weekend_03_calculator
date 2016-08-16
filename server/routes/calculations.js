var express = require('express');
var router = express.Router();
//set empty array to hold the answers (which is really answer since I empty it after each resposne)
var calculations = [];

//set the post route for each function, push the answer to the array and then send the array, then clear the array; I feel like there are a few unnecessary steps in there...
router.post('/add', function (req, res) {
  var calculate = req.body;
  console.log('do this math: ', req.body);
  var answer = parseInt(calculate.valueOne) + parseInt(calculate.valueTwo);
  console.log('answer: ', answer);
  calculations.push(answer);
  res.send(calculations);
  calculations = [];
});

router.post('/subtract', function(req, res){
  var calculate = req.body;
  console.log('do this math: ', req.body);
  var answer = calculate.valueOne - calculate.valueTwo;
  console.log('answer: ', answer);
  calculations.push(answer);
  res.send(calculations);
  calculations = [];
});

router.post('/multiply', function(req, res){
  var calculate = req.body;
  console.log('do this math: ', req.body);
  var answer = calculate.valueOne * calculate.valueTwo;
  console.log('answer: ', answer);
  calculations.push(answer);
  res.send(calculations);
  calculations = [];
})

router.post('/divide', function(req, res){
  var calculate = req.body;
  console.log('do this math: ', req.body);
  var answer = calculate.valueOne / calculate.valueTwo;
  console.log('answer: ', answer);
  calculations.push(answer);
  res.send(calculations);
  calculations = [];
})

module.exports = router;
