import {TOOL_BRUCH,TOOL_ERASER,TOOL_CIRCLE,TOOL_LINE,TOOL_PAINT_PACKET,TOOL_PENCIL,TOOL_TRIANGLE,TOOL_RECTANGLE} from './tool';
import {getCordinateOncanvase,getCicrleDistance} from '../functions/utilite'

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
    set lineWidth(lineWidth){
       this._lineWidth=lineWidth;
    }
    set brushLineWidth(lineWidth){
       this._brushLineWidth=lineWidth
    }
    set paintColor(color){
      this.context.strokeStyle=color;
    }
    //initial our canvas and add events
    init(){
       //set the hight and the whidth of the canvas to 100% 
        this.canvas.setAttribute('width',document.querySelector('.paintApp').clientWidth);
        this.canvas.setAttribute('height',document.querySelector('.paintApp').clientHeight);
        //mouse down event
        this.canvas.addEventListener('mousedown',e=> this.onMouseDown(e),false);
    }
    //function to draw shapes on mousedown
    onMouseDown(e){
      this.savedData=this.context.getImageData(0,0,this.canvas.width,this.canvas.height)
      this.startPosition=getCordinateOncanvase(e,this.canvas);
      this.canvas.onmousemove=e => this.onMouseMouve(e);
      document.onmouseup=e => this.onMouseUp(e);
      if (this.tool==TOOL_PENCIL||this.tool==TOOL_BRUCH) {
        this.context.beginPath();
        this.context.moveTo(this.startPosition.x,this.startPosition.y);
      }
    }
     //get the curunt mouse x and y
     onMouseMouve(e){
       this.currentPosition=getCordinateOncanvase(e,this.canvas);
       switch(this.tool){
        case TOOL_LINE:
           this.drawShap(this._lineWidth);
          break;
        case TOOL_RECTANGLE:
        case TOOL_CIRCLE:
        case TOOL_TRIANGLE:
           this.drawShap(this._lineWidth);
          break;
        case TOOL_PENCIL:
          this.drawFreeLine(this._lineWidth);
          break;
        case TOOL_BRUCH:
          this.drawFreeLine(this._brushLineWidth);
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
     drawShap(lineWidth){
        this.context.lineWidth=lineWidth;
        this.context.putImageData(this.savedData,0,0)
        this.context.beginPath();
        if (this.tool==TOOL_LINE) {
        this.context.moveTo(this.startPosition.x,this.startPosition.y);
        this.context.lineTo(this.currentPosition.x,this.currentPosition.y);
        }else if(this.tool==TOOL_RECTANGLE){
          this.context.rect(this.startPosition.x,this.startPosition.y,this.currentPosition.x-this.startPosition.x,this.currentPosition.y-this.startPosition.y);
        }else if(this.tool==TOOL_CIRCLE){
          let distance=getCicrleDistance(this.startPosition,this.currentPosition);
          this.context.arc(this.startPosition.x,this.startPosition.y,distance,0,Math.PI*2,false)
        }else if(this.tool==TOOL_TRIANGLE){
          this.context.moveTo(this.startPosition.x+(this.currentPosition.x-this.startPosition.x)/2,this.startPosition.y);
          this.context.lineTo(this.startPosition.x,this.currentPosition.y);
          this.context.lineTo(this.currentPosition.x,this.currentPosition.y);
          this.context.closePath();
        }
        this.context.stroke();
     }
     drawFreeLine(lineWidth){
       this.context.lineWidth=lineWidth;
       this.context.lineTo(this.currentPosition.x,this.currentPosition.y);
       this.context.stroke();
     }
}