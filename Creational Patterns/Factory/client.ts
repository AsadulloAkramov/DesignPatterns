import ChairFactory from "./ChairFactory";
import {CHAIR_TYPES} from "./enums/chair-types.enum";

// To create object for small chair
const smallChair = ChairFactory.getChair(CHAIR_TYPES.SMALL_CHAIR)
console.log(smallChair);

// To create object for medium chair
const mediumChair = ChairFactory.getChair(CHAIR_TYPES.MEDIUM_CHAIR);
console.log(mediumChair);

// To create object for big chair
const bigCHair = ChairFactory.getChair(CHAIR_TYPES.BIG_CHAIR);
console.log(bigCHair);