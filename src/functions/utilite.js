/**
 *get the correct x and y cordinate by soustracting the sapce in left and top of the canvase
 */
import point from '../classes/point.class'
export  function getCordinateOncanvase(e,canvas){
   const rect=canvas.getBoundingClientRect();
   console.log(rect.left)
   let x=e.clientX-rect.left;
   let y=e.clientY-rect.top;
   return new point(x,y);
}
export function getCicrleDistance(startCordinate,endCordinate){
    let expression1=Math.pow(endCordinate.x-startCordinate.x,2);
    let expression2=Math.pow(endCordinate.y-startCordinate.y,2);
    return Math.sqrt(expression1+expression2);
}