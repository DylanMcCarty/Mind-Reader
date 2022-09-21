var createbutton = document.createElement('button')
var createbluebutton = document.createElement('button')
var createredbutton = document.createElement('button')
let placeholder = document.getElementById('btn');
let bluebutton = document.getElementById('btn2')
let redbutton = document.getElementById('btn3')
createbutton.id = 'next'
createbluebutton.id = 'back'
createredbutton.id = 'reset'
placeholder.appendChild(createbutton);
bluebutton.appendChild(createbluebutton);
redbutton.appendChild(createredbutton);
createbutton.innerText = ('something inappropriate')
createbluebutton.innerText = ('something stupid')
createredbutton.innerText = ('something cute')
createbutton.addEventListener('click', bigFunction)
createbluebutton.addEventListener('click', bigFunction)
createredbutton.addEventListener('click', bigFunction)

function bigFunction(e) {
    if (e.target.id == 'next') {
        if (state.pg < (state.pages.length - 1)) {
            //0 < 3
            state.pg++;
        }
    }
    if(e.target.id == 'back')
        if (state.pg > 0 && state.pg <= state.pages.length){
            state.pg--
        }
    if (e.target.id == 'reset'){
        if (state.pg > 0){
            state.pg = 0
        }
    }

    render()
}

function render() {
    console.log(state.pages[state.pg])
    var bigDiv = document.getElementById('header');
    let content = state.pages[state.pg].header;
    bigDiv.textContent = content;
}

let state = {
    pg : 0,
    pages : [
        {
            header : 'my first test, does it work?',
        },
        {
            header : 'my second test, does it also work?',
        },
        {
            header : 'my third test, does it really work a third time?',
        }
    ]
}   

render()





