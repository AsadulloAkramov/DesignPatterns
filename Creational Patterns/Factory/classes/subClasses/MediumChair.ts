import Chair from "../baseClass/Chair";

export class MediumChair extends Chair {
    constructor() {
        super();
        this.height = 60;
        this.width = 60;
        this.depth = 60;
    }
}