import {TOOL_BRUCH,TOOL_ERASER,TOOL_CIRCLE,TOOL_LINE,TOOL_PAINT_PACKET,TOOL_PENCIL,TOOL_TRIANGLE,TOOL_RECTANGLE} from './tool';
import getCordinateOncanvase from './../functions/getCordonate.fun'

export default class paint {
    constructor(canvasid){
        //initial our canvas area
      this.canvas=document.getElementById(canvasid);;
      this.context=this.canvas.getContext('2d');
    }
    set activeTool(tool){
        //set the selected tool it is a property not a method
        this.tool=tool;
    }
    //initial our canvas and add events
    init(){
        //mouse down event
        this.canvas.setAttribute('width',document.querySelector('.paintApp').clientWidth);
        this.canvas.setAttribute('height',document.querySelector('.paintApp').clientHeight);
        this.canvas.addEventListener('mousedown',e=> this.onMouseDown(e),false);
    }
    //function to draw shapes on mousedown
    onMouseDown(e){
      this.savedData=this.context.getImageData(0,0,this.canvas.width,this.canvas.height)
      this.startPosition=getCordinateOncanvase(e,this.canvas);
      console.log(this.startPosition)
      this.canvas.onmousemove=e => this.onMouseMouve(e);
      document.onmouseup=e => this.onMouseUp(e);
    }
     //get the curunt mouse x and y
     onMouseMouve(e){
       this.currentPosition=getCordinateOncanvase(e,this.canvas);
       console.log(this.tool,TOOL_LINE)
       switch(this.tool){
        case TOOL_LINE:
           this.drawLine();
          break;
        default:
          break;
    }
     }
     //remove the events when user is done 
     onMouseUp(e){
       this.canvas.onmousemove= null;
       document.onmouseup= null;
     }
     drawLine(){
        this.context.putImageData(this.savedData,0,0)
        this.context.beginPath();
        this.context.moveTo(this.startPosition.x,this.startPosition.y);
        this.context.lineTo(this.currentPosition.x,this.currentPosition.y);
        this.context.stroke();
     }
}