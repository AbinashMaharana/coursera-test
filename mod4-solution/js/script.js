(function () {

var names = ["Yaakov", "John", "jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];

for (var i = 0; i < names.length; i++) {

 var firstLetterlower = names[i].charAt(0).toLowerCase();
 var firstLetterupper = names[i].charAt(0).toUpperCase();
  if (firstLetterlower === 'j' || firstLetterupper === 'J') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
