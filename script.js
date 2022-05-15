const title = document.querySelector("h1");
const CHAR_TIME = 80;

let text, index;

function requestCharAnimation(char, value) {
  setTimeout(function() {
    char.textContent = value;
    char.classList.add("fade-in");
  }, CHAR_TIME);
}

function addChar() {
  const char = document.createElement("span");
  char.classList.add("char");
  char.textContent = "▌";
  title.appendChild(char);
  requestCharAnimation(char, text.substr(index++, 1));
  if (index < text.length) {
    requestChar();
  }
}

function requestChar(delay = 60) {
  setTimeout(addChar, CHAR_TIME + delay);
}

function start() {
  index = 0;
  text = title.textContent.trim();
  title.textContent = "";
  requestChar(1000);
}

start();

 

//here invisible after botton press
/*submit = document.getElementById("submitbttn");
textform = document.getElementById("formset");
console.log("haha 1")
submit.addEventListener('click', function swap(){
	
	textform.style.display = 'none !important';
	console.log('chalta hai bous');
	});
console.log("haha 2")

function swap1(){
	document.getElementById('t4').style.display = 'none';
	console.log('chalta hai bous 2')} */
	
// flickering text
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  '1011001110101,',
  'Agent: K K K',
  'Error: ISRO server not active',
  'Error: API not fetched',
  'human civilisation',
  'shaktiman is GOD',
  'Connecting to NASA'
]

const el = document.querySelector('.text_flicker')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1200)
  })
  counter = (counter + 1) % phrases.length
}

next()


// creating sorry
const sorry = document.getElementById('earth3');
var lode = sorry.innerHTML

console.log(lode)

const submit = document.getElementById("submitbttn");

submit.addEventListener('click', function adder(){ 
	setTimeout(lod_adder, 1000);
	setTimeout(lod_adder1, 3000);
	setTimeout(lod_adder2, 4700);
	setTimeout(lod_adder3, 6200);
	setTimeout(lod_adder4, 7800);
	setTimeout(lod_adder5, 8400);
	setTimeout(lod_adder6, 9800);
	setTimeout(lod_adder7, 11700);
	setTimeout(lod_adder8, 15000);
	

	
});

//<p class="line-1 anim-typewriter">Initiating Global Search</p>
function lod_adder(){ sorry.innerHTML += "<p>Initiating Global Search</p>";
	sorry.classList.add("line-1 anim-typewriter");}
function lod_adder1(){ sorry.innerHTML += "<br>CID call records nikal...";}
function lod_adder2(){ sorry.innerHTML += "<br>envelop-tracking intercepted ";}
function lod_adder3(){ sorry.innerHTML += "<br> Error: Modi ji calling...";}
function lod_adder4(){ sorry.innerHTML += "<br>quantum Qubits overloaded";}
function lod_adder5(){ sorry.innerHTML += "<br>cloud firewall breached..";}
function lod_adder6(){ sorry.innerHTML += "<br>--/-97% completeed-/--";}
function lod_adder7(){ sorry.innerHTML += "<br><br>results compiled";}
/*function lod_adder6(){ 
	document.getElementById("hahabhai").classList.add("line-1");
	document.getElementById("hahabhai").classList.add("anim-typewriter");
	console.log("ye bhi chla")
	document.getElementById("hahabhai").innerHTML += "<br>95% done --/--";}*
	
function lod_adder7(){ 
	sorry.innerHTML = "";
	sorry.classList.add("line-1");
	sorry.classList.add("anim-typewriter");
	console.log("ye bhi chla")
	sorry.innerHTML = "Sorry bhai dil se bura lagta hai";}*/
function lod_adder8(){ sorry.innerHTML = "";
	sorry.innerHTML = "With Auto-regressive GPT-3 AI and IBM Quantum Qubit Computer we simulated and analysed every conversation carried till now since humanity's inception. Archives consisting 15 Yotta-bytes of raw data were also thoroughly explored. Every phone call made between last 24 hours was intercepted by combined effort of CBI and The Pantagon. But still we couldn't find <strong>WHO THE FUCK ASKED</strong>";
	}	


