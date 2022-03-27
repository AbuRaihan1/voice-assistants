let recognition = new webkitSpeechRecognition();

recognition.onresult = function (event) {
  var text = event.results[0][0].transcript;
  text.toLowerCase();
  var user_voice = (document.getElementById("user_voice").innerHTML = text);
  var myRate = speechSynthesisUtteranceInstance.rate;
speechSynthesisUtteranceInstance.rate = 1;
  read(text);
};

function read(text) {
  var speech = new SpeechSynthesisUtterance();
  speech.text = text;
  // speech.text.toLowerCase();
  if (text == "hello how are you" || text== "how are you" || text=="hi. how are you") {
    speech.text = " i'm fine. and you?";
  } 
  
  else if (text == "I am also fine") {
    speech.text = "oh nice";
  } 
  
  else if (text == "I am also fine what are you doing now") {
    speech.text = "nothing. i'm just talking with you";
  }
   else if (text == "hello") {
    speech.text = "hi. how are you?";
  } 
  
  else if (text == "hi") {
    speech.text = "hello! How are you?";
  } 
  
  else if (text == "who is made you"  || text=="who is make you" || text=="who makes you" || text=="who made you" ) {
    speech.text = " Ruhan Ahmed Makes me.";
  } 

  else if(text=="who is raihan ahmed"){
    speech.text= "raihan ahmed is a programmer. he is makes me. and i hope she love me more"
  }
  
  else if (text == "who is shiblu girlfriend") {
    speech.text =
      "haha. its a weard question. if i said this, i think shiblu will heart me. but, i don't have nothing to do anything. Raihan Ahmed called me to say this. so, i have to say this Name. Shiblu's gf name is Rima. sorry shiblu. hahaha";
  } 
  
  else if (text == "rima bf name") {
    speech.text =
      "haha. its a weard question. if i said this, i think rima will heart me. but, i don't have nothing to do anything. Raihan Ahmed called me to say this. so, i have to say this Name. rima's bf name is Shiblu. sorry Rima. hahaha";
  } 
  
  else if (text =="I am fine and you") {
    speech.text = "I'm Also fine";
  } 
  
  else if (text == "nice to meet you") {
    speech.text = "thank you. nice to meet you too.";
  } 
  
  else if (text == "your voice is so nice") {
    speech.text = "haha. thank you so much. your too";
  } 
  
  else if (text == "what is your name") {
    speech.text =
      "my name not defined yet. my name will defined jalajontrona. so, what is your name?";
  }
  else if (text == "" + text) {
    speech.text = "oh nice name."
  }
  else if (text == "thank you") {
    speech.text = "you are wellcome";
  } else if (text == "hmm" || text=="hmmm" || text=="he" || text=="hmmmm") {
    speech.text = "oyo";
  } 
  
  else if (text == "what is my mother name") {
    speech.text = "Lutpha begom";
  } 
  
  else if (text == "what is my father name") {
    speech.text = "Abdul Hakim";
  } 

  else if(text== "may i makes a girlfriend" || text=="have i should to make girlfriend"){
    speech.text = "no.i will care you more. i am enough for you. you do not need any girl friend"
  }
  
  else if(text=="hey do you like me" || text=="will you marry me" || text=="do you like me"){
    speech.text="yeah ofcourse. you are looking so nice. i want to marry you"
  }

  else {
    speech.text = " I din't understant your voice. please try again";
  }
  document.getElementById("ai_voice").innerHTML = speech.text;
  window.speechSynthesis.speak(speech);
}
