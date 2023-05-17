import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { IRefsPromise } from '../types/appType';


const refs:IRefsPromise = {
  form: document.querySelector(".form"),

}
if(refs.form){
  refs.form.addEventListener("submit", onFoRmSubmit)
}

function onFoRmSubmit(e:Event):void {
  e.preventDefault();
  const form = e.currentTarget as HTMLFormElement;
  if (!form) return;
  const inputValue = form.elements;
  const delayInput = inputValue.namedItem("delay") as HTMLInputElement | null;
  const stepInput = inputValue.namedItem("step") as HTMLInputElement | null;
  const amountInput = inputValue.namedItem("amount") as HTMLInputElement | null;

  if (!delayInput || !stepInput || !amountInput) return;

  let delay = +delayInput.value;
  const step = +stepInput.value;
  const amount = +amountInput.value;
  let position = 1;


  for (let i = 0; i < amount; i += 1) {
    createPromise(position, delay).then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    
    position += 1;
    delay += step;
  }
}


function createPromise(position:number, delay:number) {
  return new Promise<{position: number; delay: number }>((resolve, reject) => {
    const shouldResolve:boolean = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
  } 
      reject({ position, delay });
    }, delay)
  })
}
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
