
let recognition = new webkitSpeechRecognition()
console.log(recognition)

recognition.onresult = function(event){
  var text = event.onresults[0][0].transcript;
  var user_voice = document.getElementById('user_voice').innerHTML = text;

  read(text)
}

function read(text){
  var speech = new SpeechSynthesisUtterance();
  speech.text = text;
  if(text == 'hello'){
    speech.text = 'hi. how are you?';
  }
  else if(text == 'who is made you ?'){
    ' Raihan Ahmed Make me'
  }
  else if(text = "who is shiblu's gf ?"){
    "Rima is Shiblu's gf"
  }
  else{
    'i am not a dynamic robot. i have a simple program. please ask me another question'
  }
  document.getElementById('ai_voice').innerHTML = speech.text;
  window.speechSynthesis.speak(speech);
}