var xhr = new XMLHttpRequest();
var channels = ["twit", "ESL_SC2", "freecodecamp"];
// var url = ""

var a1 = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/twit"
});
var a2 = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2"
});
var a3 = $.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/freecodecamp"
});

// var a2 = $.ajax()

$.when(a1, a2, a3).done(function(r1, r2, r3) {
  var responseArr = [r1, r2, r3];
  responseArr.forEach(function(el, ind) {
    var statusId = channels[ind] + "_status";
    var infoId = channels[ind] + "_info";
    if (el[0].stream) {
      document.getElementById(statusId).append("streaming");
      console.log(el[0].stream);
      document.getElementById(infoId).append("streaming: " + el[0].stream.game + ", viewers: " + el[0].stream.viewers);
    } else {
      document.getElementById(statusId).append("offline");
    }
  });
});



// function requestChannel(channel) {
//   console.log(channel);
//   url = "https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/" + channel
//   xhr.open('GET', url, true);
//   xhr.send();
//   xhr.addEventListener("readystatechange", processRequest, false);

//   function processRequest(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       var response = JSON.parse(xhr.responseText);
//       console.log(response);
//     }
//   };
// };