var request = require('request'); 
var expect = require('chai').expect;

var app, users = './app.js';

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

describe('localhost:3000/users', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://localhost:3000/users', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});



describe("Testing user page functionality", function(){
  it("Should successfully get users", function(done) {
    request('http://localhost:3000/users', function(err, res, body) {
      expect(users).to.exist;
    done();
      });
      });

  it("Should successfully post new user to users array", function(){
    request('http://localhost:3000/users', function(err, res, body) {
      var newUser = {id: 3, username: "katiego", firstname: "katie", lastname: "gaudin", age: 26}
      app.post(newUser);
      expect(users.length).equal(3);
      done(); 
    }); 
    });

  it("Should update the user", function(){
    request('http://localhost:3000/users/2', function(err, res, body) {
    var newUser = {id: 3, username: "katiego", firstname: "katie", lastname: "gaudin", age: 26}
    app.put(newUser);
    expect(users[1].id).equal(3);
    done(); 
    }); 
    });

  it("Should remove the user", function(){
    request('http://localhost:3000/users/2', function(err, res, body) {
    var newUser = users[1]
    app.delete(newUser);   
    expect(users.length).equal(1); 
    done (); 
    }); 
    });
  });





