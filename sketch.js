<<<<<<< HEAD
let w = window.innerWidth - 40;
let h = window.innerHeight - 40



function setup () {
    createCanvas(w, h)
    angleMode(DEGREES)
    rectMode (CENTER)
    frameRate()
}

let rand = Math.floor(Math.random * 256)

let r1 = 300
let r2 = 700
let r3 = 10
let r4 = 1
let r5 = 200

document.addEventListener('input' , () => {
    r1 = document.getElementById('r1').value
    r2 = document.getElementById('r2').value
    r3 = document.getElementById('r3').value
    r4 = document.getElementById('r4').value
    r5 = document.getElementById('r5').value
})

function draw () {
    background(10 , 20 , 30 )
    noFill()
    stroke(255)
    
    

    translate(width /2, height /2)

    for (let i = 0; i < r5 ; i++) {
        
        push()
        
        rotate(sin(frameCount + i * r3) * r4 )

        ellipse(0, 0, r1 - i * 3, r2 - i * 3, 100 - i)

        pop()

        rotate(sin(frameCount / i) * 3)
    }

    

}
||||||| empty tree
=======
let w = window.innerWidth - 40;
let h = window.innerHeight - 40



function setup () {
    createCanvas(w, h)
    angleMode(DEGREES)
    rectMode (CENTER)
    frameRate()
}

let rand = Math.floor(Math.random * 256)

let r1 = 300
let r2 = 700
let r3 = 10
let r4 = 1
let r5 = 200

document.addEventListener('input' , () => {
    r1 = document.getElementById('r1').value
    r2 = document.getElementById('r2').value
    r3 = document.getElementById('r3').value
    r4 = document.getElementById('r4').value
    r5 = document.getElementById('r5').value
})

function draw () {
    background(10 , 20 , 30 )
    noFill()
    stroke(255)
    
    

    translate(width /2, height /2)

    for (let i = 0; i < r5 ; i++) {
        
        push()
        
        rotate(sin(frameCount + i * r3) * r4 )

        ellipse(0, 0, r1 - i * 3, r2 - i * 3, 100 - i)

        pop()

        rotate(sin(frameCount / i) * 3)
    }

    

}
>>>>>>> 0754bea6dfec36208b5e9ddaaa10386378fe53d6
