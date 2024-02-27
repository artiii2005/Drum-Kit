var wDrum = document.getElementById("w-drum")
var tom1 = new Audio("tom-1.mp3")
var tom2 = new Audio("tom-2.mp3")
var tom3 = new Audio("tom-3.mp3")
var tom4 = new Audio("tom-4.mp3")
var snare = new Audio("snare.mp3")
var crash = new Audio("crash.mp3")
var kick = new Audio("kick-bass.mp3")

wDrum.addEventListener("click", function() {
    tom1.play()
    wDrum.classList.add("pressed")
    setTimeout(function() {
        wDrum.classList.remove("pressed", 100)
    })
})

var aDrum = document.getElementById("a-drum")

aDrum.addEventListener("click", function() {
    tom2.play()
    aDrum.classList.add("pressed")
    setTimeout(function() {
        aDrum.classList.remove("pressed", 100)
    })
})

var sDrum = document.getElementById("s-drum")

sDrum.addEventListener("click", function() {
    tom3.play()
    sDrum.classList.add("pressed")
    setTimeout(function() {
        sDrum.classList.remove("pressed", 100)
    })
})

var dDrum = document.getElementById("d-drum")

dDrum.addEventListener("click", function() {
    tom4.play()
    dDrum.classList.add("pressed")
    setTimeout(function() {
        dDrum.classList.remove("pressed", 100)
    })
})

var jDrum = document.getElementById("j-drum")

jDrum.addEventListener("click", function() {
    snare.play()
    jDrum.classList.add("pressed")
    setTimeout(function() {
        jDrum.classList.remove("pressed", 100)
    })
})

var kDrum = document.getElementById("k-drum")

kDrum.addEventListener("click", function() {
    crash.play()
    kDrum.classList.add("pressed")
    setTimeout(function() {
        kDrum.classList.remove("pressed", 100)
    })
})

var lDrum = document.getElementById("l-drum")

lDrum.addEventListener("click", function() {
    kick.play()
    lDrum.classList.add("pressed")
    setTimeout(function() {
        lDrum.classList.remove("pressed", 100)
    })
})

document.addEventListener("keypress", function(event) {
    makeSound(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("tom-1.mp3")
            tom1.play()
            wDrum.classList.add("pressed")
            setTimeout(function() {
                wDrum.classList.remove("pressed", 100)
            })
            break
        
        case "a":
            var tom2 = new Audio("tom-2.mp3")
            tom2.play()
            aDrum.classList.add("pressed")
            setTimeout(function() {
                aDrum.classList.remove("pressed", 100)
            })
            break

        case "s":
            var tom3 = new Audio("tom-3.mp3")
            tom3.play()
            sDrum.classList.add("pressed")
            setTimeout(function() {
                sDrum.classList.remove("pressed", 100)
            })
            break
        
        case "d":
            var tom4 = new Audio("tom-4.mp3")
            tom4.play()
            dDrum.classList.add("pressed")
            setTimeout(function() {
                dDrum.classList.remove("pressed", 100)
            })
            break

        case "j":
            var snare = new Audio("snare.mp3")
            snare.play()
            jDrum.classList.add("pressed")
            setTimeout(function() {
                jDrum.classList.remove("pressed", 100)
            })
            break

        case "k":
            var crash = new Audio("crash.mp3")
            crash.play()
            kDrum.classList.add("pressed")
            setTimeout(function() {
                kDrum.classList.remove("pressed", 100)
            })
            break

        case "l":
            var kick = new Audio("kick-bass.mp3")
            kick.play()
            lDrum.classList.add("pressed")
            setTimeout(function() {
                lDrum.classList.remove("pressed", 100)
            })
            break
    }
}