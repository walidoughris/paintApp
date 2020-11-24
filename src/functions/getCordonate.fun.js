/**
 *get the correct x and y cordinate by soustracting the sapce in left and top of the canvase
 */
import point from './../classes/point.class'
export default function getCordinateOncanvase(e,canvas){
   let rect=canvas.getBoundingClientRect();
   let x=e.clientX-rect.left;
   let y=e.clientY-rect.top;
   return new point(x,y);
}