let TimingID;
let SPEED = 300;

window.onload = function() {
    let startElem = document.getElementById("start");
    let stopElem = document.getElementById("stop");
    let theSpeed = document.getElementById("turbo");
    let fontSize = document.getElementById("fontsize");
    let textArea = document.getElementById("text-area");
    let anim = document.getElementById("animation");

    textArea.classList.toggle(fontSize.value);

    startElem.onclick = function() {
        document.getElementById("stop").disabled = false;
        startAnimation();
    };

    stopElem.onclick = function() {
        document.getElementById("stop").disabled = true;
        stopAnimation();
    };

    theSpeed.onchange = function() {
        if(this.checked === true)
            SPEED = 50;
        else
            SPEED = 250;
    }

    fontSize.onchange = function() {
        textArea.classList = "";
        textArea.classList.toggle(this.value);
    }

    anim.onchange = function() {
        stopAnimation();
        if(!stopElem.disabled)
            startAnimation();
    }
}

function startAnimation() {
    let selectedAnimationValue = document.getElementById("animation").value;
    let frameStr = ANIMATIONS[selectedAnimationValue];
    let frameSeq = "";

    if(frameStr.indexOf("\r\n") != -1)
        frameSeq = frameStr.split("=====\r\n");
    else
        frameSeq = frameStr.split("=====\n");

    let currentFrame = 0;
    showNextFrame(frameSeq, currentFrame);
}

function showNextFrame(frameSeq, currentFrame) {
    document.getElementById("text-area").value = frameSeq[currentFrame]
    currentFrame = (currentFrame + 1) % frameSeq.length;

    TimingID = setTimeout(showNextFrame, SPEED, frameSeq, currentFrame);
}

function stopAnimation() {
    document.getElementById("text-area").value = "";
    clearTimeout(TimingID);
}
