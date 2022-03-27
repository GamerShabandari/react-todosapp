export class Todo{
    name:string;
    isDone:boolean;
    constructor(text:string){
        this.name = text;
        this.isDone = false;
    }
}