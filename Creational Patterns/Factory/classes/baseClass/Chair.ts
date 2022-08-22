import { IChair } from "../../interface/IChair";
import { dimension } from "../../types/dimension.types";

export default class Chair implements IChair {
    height = 0;
    width = 0;
    depth = 0;

    getDimensions(): dimension {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth
        }
    }
}