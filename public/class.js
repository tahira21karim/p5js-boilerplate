class Balloon {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.speedx = random(-3, 3);
    this.speedy = random(-3, 3);
    this.size = 10;
  }

  tick() {
    this.x += this.speedx;
    this.y += this.speedy;
    this.checkBounds();
    circle(this.x, this.y, this.size);
  }

  checkBounds() {
    if (this.x > width || this.x < 0) {
      this.speedx *= -1;
      this.playSound();

    }
    if (this.y > height || this.y < 0) {
      this.speedy *= -1;
      // this.playSound();
    }
  }
  playSound() {
    let f = map(this.x * this.y, 0, width*height, 240, 1000);
    osc.freq(f);
    osc.start();
    osc.stop(0.1);
  }
}
