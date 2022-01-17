/* 
  Author : Istiaq Hasan
  Email: istiaq.me@gmail.com
*/
speechSynthesis.cancel();

var isSpeaking = false;

var speech = new SpeechSynthesisUtterance();
speech.rate = 1;
speech.pitch = 1;
speech.volume = 1;
speech.voice = speechSynthesis.getVoices()[0];

function speakInputText() {
  isSpeaking = true;

  speech.text = document.getElementById("textInput").value;
  speechSynthesis.speak(speech);
}

function pauseSpeech() {
  if (isSpeaking) {
    isSpeaking = false;
    speechSynthesis.pause();
    document.getElementById(
      "pauseButton"
    ).innerHTML = `Resume<img class="icon-link-small"
    src="./assets/icons/resumeIcon.svg">`;
  } else {
    isSpeaking = true;
    speechSynthesis.resume();
    document.getElementById(
      "pauseButton"
    ).innerHTML = `Pause<img class="icon-link-small"
    src="./assets/icons/pauseIcon.svg">`;
  }
}

function stopSpeech() {
  isSpeaking = false;
  speechSynthesis.cancel();
}

function changeVoice(voice) {
  if (voice == "voice1") {
    speech.voice = speechSynthesis.getVoices()[8];
  } else if (voice == "voice2") {
    speech.voice = speechSynthesis.getVoices()[0];
  } else if (voice == "voice3") {
    speech.voice = speechSynthesis.getVoices()[1];
  } else if (voice == "voice4") {
    speech.voice = speechSynthesis.getVoices()[11];
  } else if (voice == "voice5") {
    speech.voice = speechSynthesis.getVoices()[12];
  } else if (voice == "voice6") {
    speech.voice = speechSynthesis.getVoices()[18];
  } else if (voice == "voice7") {
    speech.voice = speechSynthesis.getVoices()[33];
  } else if (voice == "voice8") {
    speech.voice = speechSynthesis.getVoices()[37];
  } else if (voice == "voice9") {
    speech.voice = speechSynthesis.getVoices()[41];
  }
}

function changeVoiceSpeed(voiceSpeed) {
  if (voiceSpeed == "speed2") {
    speech.rate = 2;
  } else if (voiceSpeed == "speed1.75") {
    speech.rate = 1.75;
  } else if (voiceSpeed == "speed1.5") {
    speech.rate = 1.5;
  } else if (voiceSpeed == "speed1.25") {
    speech.rate = 1.25;
  } else if (voiceSpeed == "speed1") {
    speech.rate = 1;
  } else if (voiceSpeed == "speed0.75") {
    speech.rate = 0.75;
  } else if (voiceSpeed == "speed0.5") {
    speech.rate = 0.5;
  }
}
