/*let settings = {
        'default': false,
        'lang': "es-US",
        'localService': false,
        'name': "Google español de Estados Unidos",
        'voiceURI': "Google español de Estados Unidos"
      }

document.getElementById('xd').addEventListener('click', () => {
    let talk = new SpeechSynthesisUtterance('Bienvenido Marcelo')
    talk.lang = 'es-US';
    //talk.voice = settings
    //talk.pitch = 1;
    //talk.voice  =this.speechSynthesis.getVoices()[0]; 
    speechSynthesis.speak(talk)
    console.log()
})
console.log('xd')*/

const rec = new webkitSpeechRecognition()

rec.lang = 'es-US';
rec.continuous = false;
rec.interimResults = false;

document.getElementById('listen').onclick = () => {
  rec.start();
};

rec.onresult = (e) => {
  let res = event.results[0][0].transcript;
  document.getElementById('xd').innerHTML = res
}