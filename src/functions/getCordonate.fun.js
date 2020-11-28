/**
 *get the correct x and y cordinate by soustracting the sapce in left and top of the canvase
 */
import point from './../classes/point.class'
export default function getCordinateOncanvase(e,canvas){
   const rect=canvas.getBoundingClientRect();
   console.log(rect.left)
   let x=e.clientX-rect.left;
   let y=e.clientY-rect.top;
   return new point(x,y);
}