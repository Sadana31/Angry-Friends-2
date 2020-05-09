class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("Sadana.JPG");
    this.smokeImage = loadImage("smoke.png");
    this.trajectory =[];
  }

  display() {
    super.display();
  }
}
