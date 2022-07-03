let recognition = new webkitSpeechRecognition();
recognition.lang = "en-us"

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
  if (text == "hello how are you" || text== "how are you" || text=="hi. how are you") {
    speech.text = " i'm fine. and you?";
  } 
  
  else if (text == "I am also fine") {
    speech.text = "oh nice!";
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
    speech.text = "Raihan Ahmed Makes me.";
  } 

  else if(text=="who is raihan ahmed" || text=="who is Raihan " || text=="who is  Ahmed" || text=="who is he"){
    speech.text= "raihan ahmed is a programmer. he makes me. and i hope he loves me more";
  }
  
  else if(text=="may I ask about shiblu" || text=="can I ask about shiblu"  || text=="may I ask about she blue"){
    speech.text= "yeah! of course. shiblu is a raihan ahmed's good friends";
  }
  

  else if (text == "who is shiblu girlfriend" || text=="what is shiblu girlfriend name" || text=="what is she blue girlfriend name") {
    speech.text =
      "haha. its a weard question. if i said this, i think shiblu will heart me. but, i don't have to do anything. Raihan Ahmed called me to say this. so, i have to say this Name. Shiblu's gf name is Rima. sorry shiblu. hahaha";
  } 
  
  else if (text == "what is Rima BF name" || text == "what is Reema BF name") {
    speech.text =
      "haha. its a weard question. if i said this, i think rima will heart me. but, i don't have nothing to do anything. Raihan Ahmed called me to say this. so, i have to say this Name. rima's bf name is Shiblu. sorry Rima. hahaha";
  } 
  
  else if (text =="I am fine and you") {
    speech.text = "I'm Also fine";
  } 
  
  else if (text == "nice to meet you") {
    speech.text = "thank you. nice to meet you too.";
  } 
  
  else if (text == "your voice is so nice" || text=="nice voice") {
    speech.text = "haha. thank you so much. your too";
  } 
  
  else if (text == "what is your name") {
    speech.text =
      "my name not defined yet. maybe will be a good name ";
  }

  else if (text == "oh nice name" || text=="nice name") {
    speech.text =
      "thank you so much.";
  }
  // else if (text == "" + text) {
  //   speech.text = "oh nice name."
  // }
  else if (text == "thank you") {
    speech.text = "you are most wellcome";
  } else if (text == "hmm" || text=="hmmm" || text=="he" || text=="hmmmm") {
    speech.text = "oyo";
  } 
  
  else if (text == "what is my mother name") {
    speech.text = "Lutpha begum";
  } 
  
  else if (text == "what is my father name") {
    speech.text = "Abdul Hakim";
  } 

  else if(text== "may I make a girlfriend" || text=="have I should to make girlfriend"){
    speech.text = "no! you do not need any girlfriend. i will care you more. i'm enough for you.";
  }

  else if(text=="ok ok"){
    speech.text = "yeah. I love you";
  }

  else if(text=="I love you too" || text=="I love you 2" || text=="I love you to"){
    speech.text = "I love you so much!";
  }



  else if(text=="ok"){
    speech.text = "Thank you.";
  }

 
  
  else if(text=="hey do you like me" || text=="will you marry me" || text=="do you like me"){
    speech.text="yeah of course! you are looking so nice. i want to marry you";
  }

  else if(text=="really"){
    speech.text="yes!"
  }
  else if(text=="ok now bye"){
    speech.text="ok bye!"
  }

  
  else {
    speech.text = " I din't understant your voice. please try again";
  }
  document.getElementById("ai_voice").innerHTML = speech.text;
  window.speechSynthesis.speak(speech);
}
