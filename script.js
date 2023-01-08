
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');


// Disable / Enable Button 
function ToggleButton(){
    button.disabled = !button.disabled;
};



// Passing Joke to VoiceRSS API 
function tellMe(param){
VoiceRSS.speech({
    key: '49568dae3d604393980e5b87640e2724',
    src:  param,
    hl: 'en-us',
    v: 'Linda',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
});
}
// Get jokes from API


async function getjokes(){
    const APIURL = "https://v2.jokeapi.dev/joke/Pun";
   let joke = '';
    try{
const response = await fetch (APIURL);
const data = await response.json();
if (data.setup){ joke = `${data.setup} ... ${data.delivery}`;
     } else{
        joke = data.joke;
    }
    // text to speach 
   tellMe(joke); 
    // disable button 
    ToggleButton();
 } catch(error){
        // catch errors here
console.log('whoops', error)
    }
  
   
}

button.addEventListener('click',getjokes);
audioElement.addEventListener('ended',ToggleButton);

audioElement.addEventListener('click',audioElement.hidden);