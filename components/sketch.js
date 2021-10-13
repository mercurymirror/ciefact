function sketch(p) {

    // console.log(props.mode_react)
    // UNITS
    let padding = [2,2]; // units
    let logo_dimensions = [80, 22]; // units
    let box_dimensions = [4, 1.65] // units
    // PIXELS
    let tile_size // pixels
    let box_size // pixels

    // INTERACTIVTY
    let modes = {
    MOUSE_DIR: 'mouse_dir',
    ALL_DIR: 'all_dir',
    NOISE: 'noise',
    MOUSE_NOISE: 'mouse_noise',
    FIXE: 'fixe'
    }
    let mode = modes.MOUSE_DIR;
    let zoff = 0;
    let zinc = 0.005;


    let letter_positions = [
        // F
        [4,3], [8,3], [12,3], [16, 3],
        [4,7],
        [4,11], [8,11], [12,11],
        [4,15],
        [4,19],
        // //A
        [26, 3],
        [24, 7], [28, 7],
        [22,11], [30,11],
        [20,15], [24,15], [28,15], [32,15],
        [18,19], [34,19],
        // //C
        [48,2], 
        [44, 4], [52, 4],
        [41,7], [55,7],
        [39,11],
        [41, 15], [55, 15],
        [44, 18], [52, 18],
        [48,20],
        // //T
        [60,3], [64,3], [68,3], [72,3], [76,3],
        [68,7],
        [68, 11],
        [68, 15],
        [68,19]
      ]      

    /////////////////////
    //     SETUP       //
    /////////////////////
    p.setup = function() {
        let div_width = document.getElementById("logo_canvas").offsetWidth
        tile_size = div_width / (logo_dimensions[0]+padding[1]);
        // tile_size = p.windowWidth / (logo_dimensions[0]+padding[1]);
        box_size = [p.floor(tile_size*box_dimensions[0]), p.floor(tile_size*box_dimensions[1])]
        let canvas = p.createCanvas(div_width, tile_size*logo_dimensions[1]+padding[1]*tile_size)
        // let canvas = p.createCanvas(p.windowWidth, tile_size*logo_dimensions[1]+padding[1]*tile_size, p.P2D)
        // canvas.parent("logo_canvas")
    };

    p.windowResized = function() {
        p.setup()
      }
    

    ////////////////////
    //      DRAW      //
    ////////////////////
    p.draw = function() {
        p.background(220);
        p.translate(padding[0]*tile_size/2, padding[1]*tile_size/2)
        p.draw_logo();
        zoff += zinc;
    }

    
    p.draw_logo = function() {
        p.rectMode(p.CENTER);
        letter_positions.forEach(function(letter_position) {
        p.push();
        
        let x = letter_position[0]*tile_size ;
        let y = letter_position[1]*tile_size;
        p.translate(x, y);
        p.fill(0);
    
        let angle = p.get_angle(x, y) ;
        p.rotate(angle);  
        
        p.rect(0, 0, box_size[0], box_size[1]);
        p.pop();
        }
        ) 
    
    }
  

    /////////////////////////
    //       MODES         //
    /////////////////////////
    p.get_angle = function(x, y ) {
        if (mode === modes.MOUSE_DIR) {
        return p.mouse_dir(x, y)
        } else if (mode === modes.ALL_DIR) {
        return p.mouse_all(x, y)
        } else if (mode === modes.NOISE) {
        return p.noise_dir(x,y)
        } else if (mode === modes.FIXE) {
        return 0
        } else if (mode === modes.MOUSE_NOISE) {
        return p.mouse_noise_dir(x, y)
        }
        return 0   
    }
    
    
    p.mouse_dir = function(x, y) {
        return p.atan2( p.mouseY-y-padding[1]/2*tile_size, p.mouseX-x-padding[0]/2*tile_size)
    }
    
    p.noise_dir = function(x, y) {
        let value = p.noise(x, y, zoff);
        value *= p.TWO_PI;
        return value
        
    }
    
    p.mouse_noise_dir = function(x, y) {
        let value = p.noise(x, y, p.mouseX*zinc);
        value *= p.TWO_PI;
        return value
    }
    
    p.mouse_all = function(x, y) {
        return p.map(p.mouseX, 0, p.width, 0, p.PI)
    }
    
    /////////////////////
    //       PROPS     //
    /////////////////////
    p.updateWithProps = props => {
        if (props.mode) {
          mode = props.mode
        }
      };
}

export default sketch;