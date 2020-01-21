const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    return (user = {
      firstName: "",
      lastName: ""
    });
  },

  fetchUser: () =>
    axios
      .get("http://jsonplaceholder.typicode.com/users/1")
      .then(response => response.data)
      .catch(err => "error")
};

module.exports = functions;
