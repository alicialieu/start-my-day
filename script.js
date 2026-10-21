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