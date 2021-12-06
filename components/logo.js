import sketch from "../components/sketch.js";
import { ReactP5Wrapper } from "react-p5-wrapper";

const Logo = () => {

    let canvas_logo_style = {
        width: '100%',
        marginLeft: '5%'
      }

    let page_name = window.location.pathname
    let logo_mode
    switch (page_name) {
      default:
        logo_mode = 'mouse_dir'
        break;
      case '/actualites':
        logo_mode = 'all_dir'
        break;
      case '/membres':
        logo_mode = 'sin';
        break;
      case '/spectacles':
        logo_mode = 'sinx' 
        break;
      case '/podcast':
        logo_mode = 'noise'
        break;
      case '/agenda':
        logo_mode = 'siny'
        break;
      case '/contacts':
        logo_mode = 'mouse_noise'
        break;
    }

    return (
            <div id='logo_canvas' style={canvas_logo_style}>
            <ReactP5Wrapper  sketch={sketch} mode={logo_mode} /> 
            {/* mode : 'mouse_dir', 'all_dir', 'noise', 'mouse_noise', 'fixe', 'sin', 'sinx', 'siny' */}
          </div>      
      )
  }

export default Logo