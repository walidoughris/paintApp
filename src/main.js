import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import 'normalize.css'
import './css/main.css'
import {TOOL_BRUCH,TOOL_ERASER,TOOL_CIRCLE,TOOL_LINE,TOOL_PAINT_PACKET,TOOL_PENCIL,TOOL_TRIANGLE,TOOL_RECTANGLE} from './classes/tool';
// the globale dom variables
const commands=document.querySelectorAll('[data-command]');
const tooles=document.querySelectorAll('[data-tooles]');
const lineWidths=document.querySelectorAll('[data-line-width]');
const colores=document.querySelectorAll('[data-color]');
const shapeLineWidth=document.querySelector('.lineWidth.for-shap');
const brushLineWidth=document.querySelector('.lineWidth.for-brush');
// add the click event to the selected comands
commands.forEach(command=>{
    command.addEventListener('click',e=>console.log(command.getAttribute('data-command')));
})
// add the click event and active class to the selected tools
tooles.forEach(tool=>{
    tool.addEventListener('click',e=>{
        document.querySelector('[data-tooles].active').classList.toggle('active')
        console.log(tool.getAttribute('data-tooles'))
        tool.classList.add('active')
        //change the line width for the breache whene it selected
        let activeTool=tool.getAttribute('data-tooles');
        switch(activeTool){
            case TOOL_LINE:
            case TOOL_RECTANGLE:
            case TOOL_CIRCLE:
            case TOOL_TRIANGLE:
            case TOOL_PENCIL:
                //activate shape line whidth
                shapeLineWidth.style.display='block';
                brushLineWidth.style.display='none';
                break;
            case TOOL_BRUCH:
                //activate brush line whidth
                brushLineWidth.style.display='block';
                shapeLineWidth.style.display='none';
                break;
            default:
                //activate both line whidth
                brushLineWidth.style.display='none';
                shapeLineWidth.style.display='none';
        }
});
})
// add the click event and active class to the line whithe
lineWidths.forEach(lineWidth=>{
    lineWidth.addEventListener('click',e=>{
        document.querySelector('[data-line-width].active').classList.toggle('active')
        console.log(lineWidth.getAttribute('data-line-width'))
        lineWidth.classList.add('active')
});
})
// add the click event and active class to the colors
colores.forEach(color=>{
    color.addEventListener('click',e=>{
        document.querySelector('[data-color].active').classList.toggle('active')
        console.log(color.getAttribute('data-color'))
        color.classList.add('active')
});
})