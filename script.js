let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning");
  } else if (hours >= 12 && hours < 16) {
    speak("Good afternoon");
  } else {
    speak("Good Evening");
  }
}

window.addEventListener("load", () => {
  wishMe();
});

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});

function takeCommand(message) {
  btn.style.display = "flex";
  voice.style.display = "none";
  if (
    message.includes("hello") ||
    message.includes("helo") ||
    message.includes("helllo") ||
    message.includes("hi") ||
    message.includes("helo mam") ||
    message.includes("hlo") ||
    message.includes("hallo") ||
    message.includes("heLLo") ||
    message.includes("halo") ||
    message.includes("heyy") ||
    message.includes("helLo maam") ||
    message.includes("helo maam") ||
    message.includes("helo madam") ||
    message.includes("hello madam") ||
    message.includes("hello maam") ||
    message.includes("namaste") || // Hindi
    message.includes("namaskar") ||
    message.includes("pranam") || // Hindi/Marathi
    message.includes("namaskaar") ||
    message.includes("नमस्ते") || // Hindi (Devanagari)
    message.includes("नमस्कार") ||
    message.includes("hii") ||
    message.includes("hello there") ||
    message.includes("hello mamji")
  ) {
    speak("helLo mam, what can I help you with?");
  } else if (
    message.includes("hey") ||
    message.includes("heyy") ||
    message.includes("heya") ||
    message.includes("heyy mam") ||
    message.includes("he mam") ||
    message.includes("hey maam") ||
    message.includes("hey madam") ||
    message.includes("he mamji") ||
    message.includes("hey madamji") ||
    message.includes("hey maamji") ||
    message.includes("heyya") ||
    message.includes("hey dude") ||
    message.includes("he mamji") ||
    message.includes("heyyy") ||
    message.includes("heeeey") ||
    message.includes("hey there") ||
    message.includes("heyy there") ||
    message.includes("हेय") ||
    message.includes("हेय मॅम") || // Marathi
    message.includes("हे") ||
    message.includes("hey mummy") ||
    message.includes("हाय")
  ) {
    speak("helLo mam, what can I help you with?");
  } else if (
    message.includes("who are you") ||
    message.includes("who r u") ||
    message.includes("who're you") ||
    message.includes("whor u") ||
    message.includes("who is you") ||
    message.includes("who r u mam") ||
    message.includes("hu r u") ||
    message.includes("kon ho tum") || // Hindi
    message.includes("tum kaun ho") ||
    message.includes("tum kaun") || // Hindi
    message.includes("tum kon aahe") ||
    message.includes("तू कोण आहेस") || // Marathi
    message.includes("तुम कौन हो") ||
    message.includes("आप कौन हो") || // Hindi
    message.includes("kaun ho tum") ||
    message.includes("aap kaun ho") || // Hindi
    message.includes("tu kon") ||
    message.includes("आप कौन") ||
    message.includes("कौन हो") ||
    message.includes("you who are") ||
    message.includes("who ru") ||
    message.includes("who're u") ||
    message.includes("who you are") ||
    message.includes("you are who")
  ) {
    speak("I am a virtual assistant of Akshata, created by Omkar sir!");
  } else if (
    message.includes("open youtube") ||
    message.includes("youtube kholo") || // Hindi
    message.includes("youtube open karo") ||
    message.includes("youtube") ||
    message.includes("play youtube") ||
    message.includes("can you open youtube") ||
    message.includes("kya tum youtube khol sakte ho") || // Hindi
    message.includes("please open youtube") ||
    message.includes("youtube start karo") || // Hindi
    message.includes("can you youtube") ||
    message.includes("youtube shuru karo") || // Hindi
    message.includes("open yt") ||
    message.includes("start youtube") ||
    message.includes("youtube kholo na") ||
    message.includes("खोल youtube") || // Marathi
    message.includes("youtube open kar") ||
    message.includes("khol youtube") ||
    message.includes("kya aap youtube kholenge") ||
    message.includes("open karna youtube") ||
    message.includes("start kar youtube") ||
    message.includes("chalu karo youtube") || // Marathi
    message.includes("youtube kholo") ||
    message.includes("youtube on karo")
  ) {
    speak("Sure! Opening YouTube.");
    window.open("https://www.youtube.com");
  } else if (
    message.includes("open instagram") ||
    message.includes("instagram kholo") || // Hindi
    message.includes("open insta") ||
    message.includes("instagram open karo") ||
    message.includes("play instagram") ||
    message.includes("can you open instagram") ||
    message.includes("insta kholna") ||
    message.includes("kya tum instagram khol sakte ho") || // Hindi
    message.includes("please open instagram") ||
    message.includes("start instagram") ||
    message.includes("instagram chalu karo") ||
    message.includes("खोल instagram") || // Marathi
    message.includes("open ig") ||
    message.includes("start instagram") ||
    message.includes("instagram kholo na") ||
    message.includes("instagram open kar") ||
    message.includes("instagram khol") ||
    message.includes("kya aap instagram kholenge") ||
    message.includes("open karna instagram") ||
    message.includes("start kar instagram") ||
    message.includes("chalu karo instagram") ||
    message.includes("instagram kholo")
  ) {
    speak("Sure! Opening Instagram.");
    window.open("https://www.instagram.com");
  } else if (
    message.includes("open google") ||
    message.includes("google kholo") || // Hindi
    message.includes("open ggle") ||
    message.includes("google open karo") ||
    message.includes("play google") ||
    message.includes("can you open google") ||
    message.includes("search on google") ||
    message.includes("google me dhundho") || // Hindi
    message.includes("please open google") ||
    message.includes("start google") ||
    message.includes("google chalu karo") ||
    message.includes("खोल google") || // Marathi
    message.includes("open search engine") ||
    message.includes("start google") ||
    message.includes("google kholo na") ||
    message.includes("google open kar") ||
    message.includes("google khol") ||
    message.includes("kya aap google kholenge") ||
    message.includes("open karna google") ||
    message.includes("start kar google") ||
    message.includes("chalu karo google") ||
    message.includes("google kholo")
  ) {
    speak("Sure! Opening Google.");
    window.open("https://www.google.com");
  } else if (
    message.includes("who is akshata") ||
    message.includes("can you tell me who is akshata") ||
    message.includes("who is akshita") || // Misspelling: akshita
    message.includes("who is aksata") || // Misspelling: aksata
    message.includes("who is akshat") || // Misspelling: akshat
    message.includes("who is akshta") || // Misspelling: akshta
    message.includes("who is ashata") || // Misspelling: ashata
    message.includes("who is aksh") || // Misspelling: aksh
    message.includes("who's akshata") || // Conversational variation: who's
    message.includes("can you tell me who akshata is") || // Phrase variation
    message.includes("do you know who is akshata") || // Phrase variation
    message.includes("tell me who is akshata") || // Phrase variation
    message.includes("who is akshat a") || // Typo: space in between
    message.includes("akshata kaun hai") || // Hindi-English mix
    message.includes("akshata kaun aahe") || // Marathi
    message.includes("can u tell me who is akshata") || // "you" shorthand: u
    message.includes("who is akhsata") || // Typo: letter swap
    message.includes("tula mahitiye ka akshata kon aahe") ||
    message.includes("tula mahitiye ka akshita kon aahe")
  ) {
    speak(
      "akshata is omkar Sir's mami. Akshata is an amazing person with a heart full of kindness She’s always there for her friends, spreading positivity and joy. Whether it's sharing a laugh or offering support, Akshata mam's presence is truly special."
    );
  } else if (
    message.includes("sing a song for my bestfriend") ||
    message.includes("play a song for my bestfriend") ||
    message.includes("sing a song") ||
    message.includes("sing a song for Mami") ||
    message.includes("sing a song for akshata")
  ) {
    speak("Playing a special song for your best friend...");
    let audio = document.getElementById("bestFriendSong");
    audio.play();
    console.log("Attempting to play song...");
    audio.play().catch(error => console.error("Audio play error:", error));
  } else if (message.includes("open calculator")) {
    speak("opening calculator..");
    window.open("calculator://");
  } else if (
    message.includes("time") ||
    message.includes("what's the time") ||
    message.includes("what time is it") ||
    message.includes("tell me the time") ||
    message.includes("current time") ||
    message.includes("kya samay hua hai") || // Hindi
    message.includes("samay kya hai") || // Hindi
    message.includes("samay batao") || // Hindi
    message.includes("kitna time hua hai") || // Hindi
    message.includes("kitne baje hai") || // Hindi
    message.includes("aaj ka time") || // Hindi
    message.includes("समय क्या है") || // Hindi (Devanagari)
    message.includes("abhi ka time") || // Hindi
    message.includes("वर्तमान समय") || // Hindi (Devanagari)
    message.includes("batao time") ||
    message.includes("what's time") ||
    message.includes("wat time") ||
    message.includes("whats da time") ||
    message.includes("time batao") || // Hindi
    message.includes("samay") ||
    message.includes("samay batao") || // Hindi
    message.includes("sadyacha vel kay aahe") || // Marathi-English mix: "सध्याचा वेळ काय आहे"
    message.includes("kitna time aahe") || // Marathi-English mix: "किती वेळ आहे"
    message.includes("aata kiti vajle aahe") || // Marathi-English mix: "अबھی किती वाजले"
    message.includes("kiti vajle") || // Marathi-English mix: "कसा आहे टाइम"
    message.includes("time sang kiti vajle") || // Marathi-English mix: "सांगा टाइम"
    message.includes("time kay chalu aahe") || // Marathi-English mix: "टाइम चालू आहे"
    message.includes("time kay aahe") || // Marathi-English mix: "हेय, टाइम काय आहे"
    message.includes("time cha vichar kartoy") // Marathi-English mix: "टाइमचा विचार करत आहे"
  ) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speak(` aabhi baje hai ${time}`);
  } else {
    speak(`this is what I found on internet regarding ${message}`);
    window.open(`https://www.google.com/search?q=${message}`);
  }
}
