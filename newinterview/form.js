// console.log("start");
// function hello(string) {
//   return string.split("").reverse().join("");
// }

// console.log(hello("welcome"));

// http://dummyjson.com/users

fetch("http://dummyjson.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data.users[0].firstName + " " +data.users[0].university))
  .catch((err) => console.log(err));
