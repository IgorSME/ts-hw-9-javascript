export interface IRefs {
    startBtn: HTMLButtonElement | null;
    stopBtn: HTMLButtonElement | null;
    body: HTMLElement | null;
  }

  export interface IRefsTimer{
    input: HTMLInputElement | null,
    start: HTMLButtonElement | null,
    days: HTMLSpanElement | null,
    hours: HTMLSpanElement | null,
    minutes: HTMLSpanElement | null,
    seconds: HTMLSpanElement | null,
  }

  export interface IFlatpickrOptions {
    enableTime: boolean;
    time_24hr: boolean;
    defaultDate: Date;
    minuteIncrement: number;
    onClose: (selectedDates: Date[]) => void;
    
  }

  export interface IClock {
    days: string, 
    hours: string, 
    minutes: string, 
    seconds: string 
  }

  export interface IRefsPromise{
    form:HTMLFormElement | null
  }