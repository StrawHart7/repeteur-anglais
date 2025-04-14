function speakText() {
    const text = document.getElementById("textToSpeak").value;
    if (!text) return alert("Écris quelque chose à prononcer !");
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // anglais américain
    speechSynthesis.speak(utterance);
  }