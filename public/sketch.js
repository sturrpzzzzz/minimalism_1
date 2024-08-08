function setup() {
  createCanvas(250, 250);

  describe('A gray cloudy pattern that changes.');
}

function draw() {
  // Set the noise level and scale.
  let noiseLevel = 255;
  let noiseScale = 0.008;

  // Iterate from top to bottom.
  for (let y = 0; y < 250; y += 1) {
    // Iterate from left to right.
    for (let x = 0; x < width; x += 1) {
      // Scale the input coordinates.
      
      let mx = map(mouseX, 0, 255, 0, 100);
      let my = map(mouseY, 0, 255, 0, 100);
      
      let nx = noiseScale * x;
      let ny = noiseScale * y;
      let nt = noiseScale * frameCount * mx / my;

      // Compute the noise value.
      let c = noiseLevel * noise(nx, ny, nt);

      // Draw the point.
      stroke(c);
      point(x, y);
    }
  }
}