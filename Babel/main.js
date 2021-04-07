import { Pow, circleArea, hypotenuse, PI } from "./math";
import { format } from "./format";


const hypotenuseVal = hypotenuse(8, 11);
const {adjacent, opposite, res} = hypotenuseVal;

format("adjacent hypotenuse", adjacent);
format("opposite hypotenuse", opposite);
format("res hypotenuse", res);


const circleAreaval = circleArea(8);

format("circleArea", circleAreaval);

format("Pow", Pow(5, 9));
