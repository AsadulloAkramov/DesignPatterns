import { CHAIR_TYPES } from "./enums/chair-types.enum";
import { IChair } from "./interface/IChair";
import { BigChair } from "./classes/subClasses/BigChair";
import { MediumChair } from "./classes/subClasses/MediumChair";
import { SmallChair } from "./classes/subClasses/SmallChair";

export default class ChairFactory {
    static getChair(chair: CHAIR_TYPES): IChair {
        if(chair == CHAIR_TYPES.BIG_CHAIR) return new BigChair();
        if(chair == CHAIR_TYPES.MEDIUM_CHAIR) return  new MediumChair();
        if(chair == CHAIR_TYPES.SMALL_CHAIR) return new SmallChair();
    }
}