        document.addEventListener("DOMContentLoaded", function() {

var win = document.createElement('div');
win.style.width = '600px';
win.style.height = '600px';
win.style.backgroundImage = 'url(https://wallpapercave.com/wp/wp2324687.jpg)';
win.style.backgroundSize = 'cover';
win.style.position = 'absolute';
win.style.top = '50%';
win.style.left = '50%';
win.style.transform = 'translate(-50%, -50%)';
win.style.borderRadius = '10px';
win.style.boxShadow = '0px 0px 10px black';
win.style.overflow = 'hidden';
win.style.display = 'flex';
win.style.flexDirection = 'column';
win.style.alignItems = 'center';
win.style.justifyContent = 'center';

var text1 = document.createElement('input');
text1.style.width = '300px';
text1.style.height = '50px';
text1.style.borderRadius = '10px';
text1.style.border = 'none';
text1.style.outline = 'none';
text1.style.padding = '0px 10px';
text1.style.margin = '10px';
text1.style.fontSize = '20px';
text1.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
text1.style.color = 'white';

var text2 = document.createElement('input');
text2.style.width = '300px';
text2.style.height = '50px';
text2.style.borderRadius = '10px';
text2.style.border = 'none';
text2.style.outline = 'none';
text2.style.padding = '0px 10px';
text2.style.margin = '10px';
text2.style.fontSize = '20px';
text2.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
text2.style.color = 'white';

var text3 = document.createElement('input');
text3.style.width = '300px';
text3.style.height = '50px';
text3.style.borderRadius = '10px';
text3.style.border = 'none';
text3.style.outline = 'none';
text3.style.padding = '0px 10px';
text3.style.margin = '10px';
text3.style.fontSize = '20px';
text3.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
text3.style.color = 'white';

var close = document.createElement('div');
close.style.width = '50px';
close.style.height = '50px';
close.style.position = 'absolute';
close.style.top = '0px';
close.style.right = '0px';
close.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
close.style.borderRadius = '0px 0px 0px 10px';
close.style.display = 'flex';
close.style.justifyContent = 'center';
close.style.alignItems = 'center';
close.style.cursor = 'pointer';
close.innerHTML = 'X';
close.onclick = function() {
  document.body.removeChild(win);
}

win.appendChild(text1);
win.appendChild(text2);
win.appendChild(text3);
win.appendChild(close);
document.body.appendChild(win);

text1.style.color = 'white';
text2.style.color = 'white';
text3.style.color = 'white';

text1.placeholder = 'IP';
text2.placeholder = 'Port';
text3.placeholder = 'Time';

var send = document.createElement('div');
send.style.width = '300px';
send.style.height = '50px';
send.style.borderRadius = '10px';
send.style.border = 'none';
send.style.outline = 'none';
send.style.padding = '0px 10px';
send.style.margin = '10px';
send.style.fontSize = '20px';
send.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
send.style.color = 'white';
send.style.display = 'flex';
send.style.justifyContent = 'center';
send.style.alignItems = 'center';
send.style.cursor = 'pointer';
send.innerHTML = 'Send Request';
send.onclick = function() {
  var ip = text1.value;
  var port = text2.value;
  var time = text3.value;
  var url = 'http://localhost:3000/api/' + ip + '/' + port + '/' + time;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
}

win.appendChild(send);

send.onclick = function() {
  var ip = text1.value;
  var port = text2.value;
  var time = text3.value;
  var ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  var portRegex = /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;
  if (ipRegex.test(ip) && portRegex.test(port) && time <= 300) {
    var url = 'http://localhost:3000/api/' + ip + '/' + port + '/' + time;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    send.style.backgroundColor = 'green';
    var error = document.createElement('div');
    error.style.width = '300px';
    error.style.height = '50px';
    error.style.borderRadius = '10px';
    error.style.border = 'none';
    error.style.outline = 'none';
    error.style.padding = '0px 10px';
    error.style.margin = '10px';
    error.style.fontSize = '20px';
    error.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    error.style.color = 'white';
    error.style.display = 'flex';
    error.style.justifyContent = 'center';
    error.style.alignItems = 'center';
    error.innerHTML = 'The API has received the request.';
    win.appendChild(error);
    setTimeout(function() {
      win.removeChild(error);
      text1.value = '';
      text2.value = '';
      text3.value = '';
      send.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }, 3000);
  } else {
    var error = document.createElement('div');
    error.style.width = '300px';
    error.style.height = '50px';
    error.style.borderRadius = '10px';
    error.style.border = 'none';
    error.style.outline = 'none';
    error.style.padding = '0px 10px';
    error.style.margin = '10px';
    error.style.fontSize = '20px';
    error.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    error.style.color = 'white';
    error.style.display = 'flex';
    error.style.justifyContent = 'center';
    error.style.alignItems = 'center';
    error.innerHTML = 'Recheck what you have typed.';
    win.appendChild(error);
    setTimeout(function() {
      win.removeChild(error);
      text1.value = '';
      text2.value = '';
      text3.value = '';
    }, 3000);
  }
}

var tos = document.createElement('div');
tos.style.width = '600px';
tos.style.height = '600px';
tos.style.backgroundImage = 'url(https://wallpapercave.com/wp/wp2324687.jpg)';
tos.style.backgroundSize = 'cover';
tos.style.position = 'absolute';
tos.style.top = '50%';
tos.style.left = '50%';
tos.style.transform = 'translate(-50%, -50%)';
tos.style.borderRadius = '10px';
tos.style.boxShadow = '0px 0px 10px black';
tos.style.overflow = 'hidden';
tos.style.display = 'flex';
tos.style.flexDirection = 'column';
tos.style.alignItems = 'center';
tos.style.justifyContent = 'center';

var tosText = document.createElement('div');
tosText.style.width = '300px';
tosText.style.height = '50px';
tosText.style.borderRadius = '10px';
tosText.style.border = 'none';
tosText.style.outline = 'none';
tosText.style.padding = '0px 10px';
tosText.style.margin = '10px';
tosText.style.fontSize = '20px';
tosText.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
tosText.style.color = 'white';
tosText.style.display = 'flex';
tosText.style.justifyContent = 'center';
tosText.style.alignItems = 'center';
tosText.innerHTML = 'This is for educational purposes only!!!';

var tosClose = document.createElement('div');
tosClose.style.width = '50px';
tosClose.style.height = '50px';
tosClose.style.position = 'absolute';
tosClose.style.top = '0px';
tosClose.style.right = '0px';
tosClose.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
tosClose.style.borderRadius = '0px 0px 0px 10px';
tosClose.style.display = 'flex';
tosClose.style.justifyContent = 'center';
tosClose.style.alignItems = 'center';
tosClose.style.cursor = 'pointer';
tosClose.innerHTML = 'X';
tosClose.onclick = function() {
  document.body.removeChild(tos);
  document.body.appendChild(win);
}

tos.appendChild(tosText);
tos.appendChild(tosClose);
document.body.appendChild(tos);

var tosTimer = document.createElement('div');
tosTimer.style.width = '300px';
tosTimer.style.height = '50px';
tosTimer.style.borderRadius = '10px';
tosTimer.style.border = 'none';
tosTimer.style.outline = 'none';
tosTimer.style.padding = '0px 10px';
tosTimer.style.margin = '10px';
tosTimer.style.fontSize = '20px';
tosTimer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
tosTimer.style.color = 'white';
tosTimer.style.display = 'flex';
tosTimer.style.justifyContent = 'center';
tosTimer.style.alignItems = 'center';
tosTimer.innerHTML = '10';

var tosTimerInterval = setInterval(function() {
  var timer = parseInt(tosTimer.innerHTML);
  if (timer > 0) {
    tosTimer.innerHTML = timer - 1;
  } else {
    clearInterval(tosTimerInterval);
    document.body.removeChild(tos);
    document.body.appendChild(win);
  }
}, 1000);

tos.appendChild(tosTimer);

text1.onkeyup = function() {
  var ip = text1.value;
  var ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (ipRegex.test(ip)) {
    text1.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    text1.style.backgroundColor = 'red';
  }
}

text2.onkeyup = function() {
  var port = text2.value;
  var portRegex = /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;
  if (portRegex.test(port)) {
    text2.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    text2.style.backgroundColor = 'red';
  }
}

text3.onkeyup = function() {
  var time = text3.value;
  if (time <= 300) {
    text3.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    text3.style.backgroundColor = 'red';
  }
}

var newButton = document.createElement('div');
newButton.style.width = '300px';
newButton.style.height = '50px';
newButton.style.borderRadius = '10px';
newButton.style.border = 'none';
newButton.style.outline = 'none';
newButton.style.padding = '0px 10px';
newButton.style.margin = '10px';
newButton.style.fontSize = '20px';
newButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
newButton.style.color = 'white';
newButton.style.display = 'flex';
newButton.style.justifyContent = 'center';
newButton.style.alignItems = 'center';
newButton.style.cursor = 'pointer';
newButton.innerHTML = 'About';

win.appendChild(newButton);

newButton.onclick = function() {
  var about = document.createElement('div');
  about.style.width = '600px';
  about.style.height = '600px';
  about.style.backgroundImage = 'url(https://wallpapercave.com/wp/wp2324687.jpg)';
  about.style.backgroundSize = 'cover';
  about.style.position = 'absolute';
  about.style.top = '50%';
  about.style.left = '50%';
  about.style.transform = 'translate(-50%, -50%)';
  about.style.borderRadius = '10px';
  about.style.boxShadow = '0px 0px 10px black';
  about.style.overflow = 'hidden';
  about.style.display = 'flex';
  about.style.flexDirection = 'column';
  about.style.alignItems = 'center';
  about.style.justifyContent = 'center';

  var aboutText = document.createElement('div');
  aboutText.style.width = '300px';
  aboutText.style.height = '50px';
  aboutText.style.borderRadius = '10px';
  aboutText.style.border = 'none';
  aboutText.style.outline = 'none';
  aboutText.style.padding = '0px 10px';
  aboutText.style.margin = '10px';
  aboutText.style.fontSize = '20px';
  aboutText.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  aboutText.style.color = 'white';
  aboutText.style.display = 'flex';
  aboutText.style.justifyContent = 'center';
  aboutText.style.alignItems = 'center';
  aboutText.innerHTML = 'This interface is a DDoS tool, It is used to stress test servers. ONLY USE IT WITH PERMISSON BY THE OWNER OF THE SERVER!!';

  var aboutClose = document.createElement('div');
  aboutClose.style.width = '50px';
  aboutClose.style.height = '50px';
  aboutClose.style.position = 'absolute';
  aboutClose.style.top = '0px';
  aboutClose.style.right = '0px';
  aboutClose.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  aboutClose.style.borderRadius = '0px 0px 0px 10px';
  aboutClose.style.display = 'flex';
  aboutClose.style.justifyContent = 'center';
  aboutClose.style.alignItems = 'center';
  aboutClose.style.cursor = 'pointer';
  aboutClose.innerHTML = 'X';
  aboutClose.onclick = function() {
    document.body.removeChild(about);
  }

  about.appendChild(aboutText);
  about.appendChild(aboutClose);
  document.body.appendChild(about);
}
