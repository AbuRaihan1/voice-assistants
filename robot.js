let recognition = new webkitSpeechRecognition();

recognition.onresult = function (event) {
  var text = event.results[0][0].transcript;
  text.toLowerCase();
  var user_voice = (document.getElementById("user_voice").innerHTML = text);

  read(text);
};

function read(text) {
  var speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.text.toLowerCase();
  if (text == "hello") {
    speech.text = "hi. how are you?";
  }
  if (text == "hi") {
    speech.text = "hello. How are you?";
  } else if (text == "who is made you") {
    speech.text = " Raihan Ahmed Makes me";
  } else if (text == "who is shiblu GF") {
     speech.text = "haha. its a weard question. if i said this, i think shiblu will heart me. but, i don't have to do anything. Raihan Ahmed called me to say this. so, i have to say this Name. Shiblu's gf name is Rima";
  } else if (text == "i am fine and you") {
    speech.text = "I'm Also fine.";
  } else if (text == "what is your name") {
    speech.text = "my name not defined yet. my name will defined jalajontrona";
  } else {
    speech.text = "please try again";
  }
  document.getElementById("ai_voice").innerHTML = speech.text;
  window.speechSynthesis.speak(speech);
}
