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
createbutton.innerText = ('Next')
createbluebutton.innerText = ('Back')
createredbutton.innerText = ('Reset')
createbutton.addEventListener('click', bigFunction)
createbluebutton.addEventListener('click', bigFunction)
createredbutton.addEventListener('click', bigFunction)



let state = {
    pg : 0,
    pages : [
        {
            header : 'I can read your mind',
            bluetext : '<br>',
        },
        {
            header : 'Pick a number from 01-99',
            bluetext : 'when you have your number click next',
        },
        {
            header : 'Add both digits together to get a new number',
            bluetext : 'Ex: 14 is 1 + 4 = 5 <br> <br> click next to proceed',
        },
        {
            header : 'Subract your your new number from the original number',
            bluetext : 'Ex: 14 - 5 = 9 <br> <br> click next to proceed ',
        },
        {
            header: symbolPicker(),
            bluetext : 'Find your new number. <br> <br> Note the symbol beside the number',
        },
        {
            header : '&',
            bluetext : 'your symbol is: <br> <br> &',
        }
    ]
} 

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
    var bluediv = document.getElementById('bluetext')
    let content = state.pages[state.pg].header;
    let content2 = state.pages[state.pg].bluetext;
    bigDiv.innerHTML = content;
    bluediv.innerHTML = content2;

}

function symbolPicker() {
    let arr1 = []
    let arr2 = ['*', '%', '^', '#', '@', '$', '!', '=',]
    for (let i = 0; i <= 99; i++){
        if (i % 9 == 0) {
            arr1.push(`${i} - &\r\n`)
        } else {
            arr1.push(`${i} - ${arr2[Math.ceil(Math.random() * arr2.length - 1)]}\r\n`)
        }
    }
    return arr1.join('')
}

/*if (state.pg === 0) {
    bluebutton.style.display="none";
    redbutton.style.display="none"
    } else if (state.pg > 0) {
        bluebutton.style.display="inline"
        redbutton.style.display="inline"
    }*/




render()





