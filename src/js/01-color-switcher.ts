import { IRefs } from "../types/appType";

const refs:IRefs = {
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector("button[data-stop]"),
    body: document.querySelector("body")
}

if(refs.startBtn && refs.stopBtn && refs.body){
    refs.startBtn.addEventListener("click",onStartClick)
refs.stopBtn.addEventListener("click", onStopClick)
}

const DELAY = 1000;
let intervalId:number | null = null;
let isActive = false;

function onStartClick():void {
    if (isActive) {
        //  console.log("test");
        return
    }
    isActive = true;
    intervalId = setInterval(() => {
        if(refs.body){
            refs.body.style.backgroundColor = getRandomHexColor();
        }
    }, DELAY)
}

function onStopClick():void {
    if(intervalId){
        clearInterval(intervalId);
    }
    isActive = false;
}

function getRandomHexColor():string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}