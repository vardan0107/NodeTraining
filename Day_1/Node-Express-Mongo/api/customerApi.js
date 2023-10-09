var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var CustomerDAO = require('../service/CustomerDAO')

var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';

var app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

var CustomerService = new CustomerDAO();

/*
@params 
@method 
@returns
@errors
*/
app.get('/get-all-customer', async function (req, res) {  
    const result = await CustomerService.getAllCustomer()
    if(result){
        res.status(200).send(result);
    }else{
        res.status(404)
    }
});

/*
@params 
@method 
@returns
@errors
*/
app.post('/add-customer', async function (req, res) {
  const {name, address} = req.body
  console.log(req.body);
  if(!name || !address) {
    throw new Error("Please provide name and address")
  }
  const result = await CustomerService.addCustomer(name, address)
  if (result) {
    res.status(200).send('Customer added successfully-->' + result);
  } else {
    res.status(404);
  }
});

/*
@params 
@method 
@returns
@errors
*/
app.put('/update-customer', async function (req, res) {
  const {name, address} = req.body
  if(!name || !address) {
    throw new Error("Please provide name and address")
  }
  const result = await CustomerService.updateCustomer(name, address)
  if (result) {
    res.status(201).send('Customer updated successfully-->' + result);
  } else {
    res.status(404);
  }
});

/*
@params 
@method 
@returns
@errors
*/
app.delete('/delete-customer',async function (req, res) {
  const {name} = req.body
  console.log(req.body);
  if(!name) {
    throw new Error("Please provide name to be deleted")
  }
  const result = await CustomerService.deleteCustomer(name)
  if(result){
      res.status(200).send("Customer deleted successfully-->" + result)
  }else{
    res.send(404).send("error deleting customer")
  }
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});