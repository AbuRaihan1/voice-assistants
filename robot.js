let recognition = new webkitSpeechRecognition();

recognition.onresult = function (event) {
  var text = event.results[0][0].transcript;
  var user_voice = (document.getElementById("user_voice").innerHTML = text);

  read(text);
};

function read(text) {
  var speech = new SpeechSynthesisUtterance();
  speech.text = text;
  if (text == "hello") {
    speech.text = "hi. how are you?";
  } else if (text == "who is made you ?") {
    (" Raihan Ahmed Make me");
  } else if (text == "who is shiblu's gf ?") {
    (" haha. its a weard question. if i said this, i think shiblu will heart me. but, i don't have to do anything. Raihan called me to say this.so, i have to say this. Shiblu's gf name is Rima");
  } else if (text == "i am fine . and you?") {
    speech.text = "I'm Also fine.";
  } else {
    ("i am not a dynamic robot. i have a simple program. please ask me another question");
  }
  document.getElementById("ai_voice").innerHTML = speech.text;
  window.speechSynthesis.speak(speech);
}
