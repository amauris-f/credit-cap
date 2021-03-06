const {Account} = require('../../server/db/models/account');
const {Admin} = require('../../server/db/models/admin');
const {User} = require('../../server/db/models/user');



const DBUsers = [
  {
    name: 'John',
    username: 'user1',
    password: 'password123'
  },
  {
    name: 'Doe',
    username: 'user2',
    password: 'password456'
  }
];

const DBAdmins = [
  {
    name: 'Jane',
    username: 'adminOne',
    password: 'password321'
  },
  {
    name: 'Josh',
    username: 'adminTwo',
    password: 'password654'
  }
];

const newUser = new User({
  name: 'Bill',
  username: 'newuser',
  password: 'newpassword'
});

const newAdmin = new Admin({
  name: 'Tim',
  username: 'newadmin',
  password: 'newadminpassword'
});

var populateUsers = function(done){
  console.log('Emptying Database');
  Account.deleteMany({}).then(() => {
    console.log('Inserting mock users and admins');
    var results = []
    for(var user of DBUsers){
      results.push(new User(user).save());
    }
    for(var admin of DBAdmins){
      results.push(new Admin(admin).save());
    }
    return Promise.all(results);
  }).then(() => {
    done();
  });
};

module.exports = {
  DBAdmins, DBUsers,
  newUser, newAdmin,
  populateUsers
}