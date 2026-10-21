// Function with no parameters
var startMyDay = function () {
  return "Time for coffee and a shower!";
};
console.log(startMyDay());

// Function with one parameter
var favoriteCookie = function (cookie) {
  return `My  favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie()); // Oops! Without the argument, we get "Your favorite cookie is undefined."
console.log(favoriteCookie("oatmeal raisin"));

// Function with two parameters
var introduce = function (name, occupation) {
  return `Hello, my name is ${name} and I am a ${occupation}. Glad to meet you!`;
};
console.log(introduce("Ann", "developer"));
console.log(introduce("Pujah", "designer"));