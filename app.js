var express = require("express"); 
var app = express();
var bodyParser = require('body-parser')
    _ = require("underscore");

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

var users = [
	{
		id: 1, 
		username: "bob", 
		firstname: "Bob", 
		lastname: "Jones", 
		age: 35
	}, 
	{
		id: 2, 
		username: "joe", 
		firstname: "Joseph", 
		lastname: "Smith", 
		age: 23
	}
]; 


app.get('/users', function (req, res) {
  res.json(users);
});

//create user 

app.post('/users', function (req, res){
	var newUser = req.body; 
	users.push(newUser)
	res.json(users)
});

//update user
app.put('/users/:id', function(req, res) {
  console.log("req.body: ", req.body); 
  console.log("req.params: ", req.params); 

  // set the value of the id
var userID = parseInt(req.params.id); 
  // find item in `users` array matching the id
var targetUser = _.findWhere(users, {id:userID}); 
  // update the user's id
targetUser.id = req.body.id; 
  // update the user's username
targetUser.username = req.body.username; 
  // update the user's firstname
targetUser.firstname = req.body.firstname;  
  // update the user's lastname
targetUser.lastname = req.body.lastname;   
  // update the user's age
targetUser.age = req.body.age;   
  // send back edited object
 res.json(targetUser); 

});

//delete user

app.delete('/users/:id', function(req, res) {
  
  // set the value of the id
var userID = parseInt(req.params.id); 
  // find item in `users` array matching the id
var targetUser = _.findWhere(users, {id:userID}); 
  // get the index of the found item
var userIndex = users.indexOf(targetUser);  
  // remove the item at that index, only remove 1 item
users.splice(userIndex, 1);  
  // send back deleted object
res.json(targetUser);
});




app.listen(3000); 