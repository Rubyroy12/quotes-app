export class Quote {
    [x: string]: any;
    public showCite: boolean;
    constructor(public name: string, public cite: string, public dateCreated: Date,public likes:number,public deslikes:number) {
        this.showCite=false;


    }

}
