export default function cursor_sketch(p) {
  p.disableFriendlyErrors = true

  let parent_canvas = "cursor"

  let size_cursor = 10
  let size_around = 30

  let position_delay = 3
  let positions = []
  let idx = 0

  let fact_color = p.color(235, 22, 21)

  p.setup = function () {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.P2D)
    canvas.parent(parent_canvas)
    p.noCursor()
  }

  p.windowResized = function () {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.P2D)
    canvas.parent(parent_canvas)
  }

  p.draw = function () {
    p.clear()
    p.basicPursue()
  }

  p.basicPursue = function () {
    p.fill(fact_color)
    p.ellipse(p.mouseX, p.mouseY, size_cursor)

    let current_position = [p.mouseX, p.mouseY]
    if (positions[idx] != current_position) {
      positions[idx] = current_position
      idx = (idx + 1) % position_delay
    }

    p.noFill()
    p.stroke(fact_color)
    p.strokeWeight(2)
    let old_position = positions[idx]
    if (old_position === undefined) {
      old_position = current_position
    }
    p.ellipse(old_position[0], old_position[1], size_around)
  }
}
