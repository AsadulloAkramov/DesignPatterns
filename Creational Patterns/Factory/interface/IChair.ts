import { dimension } from "../types/dimension.types";

// Chair interface
// All subclasses implement this common interface
export interface IChair {
    height: number,
    width: number,
    depth: number,
    getDimensions(): dimension
}