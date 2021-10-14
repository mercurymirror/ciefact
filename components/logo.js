import sketch from "../components/sketch.js";
import { ReactP5Wrapper } from "react-p5-wrapper";

const Logo = () => {

    let canvas_logo_style = {
        width: '100%',
        marginLeft: '5%'
      }

      return (
<div id='logo_canvas' style={canvas_logo_style}>
            <ReactP5Wrapper  sketch={sketch} mode='all_dir' /> 
          {/* Essai sa! Remet les window et tout dans sketch, y'avais des truc commenté je crois */}
            {/* mode : 'mouse_dir', 'all_dir', 'noise', 'fixe' */}
          </div>      

      )
        }

        export default Logo