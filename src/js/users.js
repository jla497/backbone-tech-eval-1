// This is a plain old Backbone Model
var user = Backbone.Model.extend({
  defaults: {
    name: "",
    phonenumber: 0,
    username: ""
  }
});

var users = Backbone.Firebase.Collection.extend({
  url: 'https://backbone-demo-a094e.firebaseio.com/users',
  url: 'https://<your-firebase>.firebaseio.com/todos',
  model: user
});