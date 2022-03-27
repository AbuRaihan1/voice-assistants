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
  // speech.text.toLowerCase();
  if (text == "hello how are you") {
    speech.text = "hi. i am fine. thank you. and you?";
  } else if (text == "i am also fine") {
    speech.text = "oh nice"
  } else if (text == "i am also fine what are you doing now") {
    speech.text = "nothing. i am just talking with you";
  } else if (text == "i am also fine") {
    speech.text = "oh nice"
  } else if (text == "hello") {
    speech.text = "hi. how are you?"
  } else if (text == "hi") {
    speech.text = "hello How are you?"
  } else if (
    text == "who is made you" ||
    "who makes you" ||
    "who is makes you" ||
    "who makes you"
  ) {
    speech.text = " Raihan Ahmed Makes me."
  } 
  else if (text == "who is shiblu GF") {
    speech.text =
      "haha. its a weard question. if i said this, i think shiblu will heart me. but, i don't have nothing to do anything. Raihan Ahmed called me to say this. so, i have to say this Name. Shiblu's gf name is Rima. sorry shiblu. haha"
  } else if (text == "i am fine and you") {
    speech.text = "I'm Also fine."
  } else if (text == "nice to meet you") {
    speech.text = "thank you. nice to meet you too.";
  } else if (text == "your voice is so nice") {
    speech.text = "thank you"
  } else if (text == "what is your name") {
    speech.text =
      "my name not defined yet. my name will defined jalajontrona. so, what is your name?"
  } else if (text == "my name is " + text) {
    speech.text = "oh nice name.";
  } else if (text == "thank you") {
    speech.text = "you are wellcome";
  } else if (text == "hmm" || "hmmm" || "hmmmm" || "oyo") {
    speech.text = "oyo"
  } else {
    speech.text = "please try again"
  }
  document.getElementById("ai_voice").innerHTML = speech.text;
  window.speechSynthesis.speak(speech);
}
