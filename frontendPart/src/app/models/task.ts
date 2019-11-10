export class Task{
    title:string;
    desciption: string;
    done: boolean;
  
   /**
    *
    */
   constructor(title?:string, desciption?:string, done: boolean = false) {
     this.title = title;
     this.desciption = desciption;
     this.done = done;
   }
  }
  