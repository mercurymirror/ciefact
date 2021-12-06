import cursor_sketch from "./Cursor_sketch";
import { ReactP5Wrapper } from "react-p5-wrapper";

const Cursor = () => {

    let cursor_div_style =  {
        position : 'fixed',
        width : '100%',
        height: '100%',
        'z-index' : '1',
        'margin-top' : '-15%',
        'pointer-events' : 'none',
        'cursor': 'none'
    }
  

    return (
        <div id='cursor' style={cursor_div_style}>
            <ReactP5Wrapper  sketch={cursor_sketch}/> 
        </div>      
  )
}
export default Cursor