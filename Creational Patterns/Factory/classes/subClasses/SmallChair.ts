import Chair from "../baseClass/Chair";

export class SmallChair extends Chair {
    constructor() {
        super();
        this.width = 40;
        this.height = 40;
        this.depth = 40;
    }
}