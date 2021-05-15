export class Quote {
    public showCite: boolean;
    constructor(public name: string, public cite: string, public dateCreated: Date) {
        this.showCite=false;


    }

}
