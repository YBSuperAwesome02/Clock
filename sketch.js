var hr, mn, sc

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES)

}

function draw() {
  background(0, 0, 0);  
  
  translate(300, 300)
  rotate(-90)

  hr = hour()
  mn = minute()
  sc = second()

  hrAngle = map(hr%12, 0, 12 , 0, 360)
  mnAngle = map(mn, 0, 60 , 0, 360)
  scAngle = map(sc, 0, 60 , 0, 360)

  //Draw for second hand
  push()
  rotate(scAngle)
  stroke(255, 0, 0)
  strokeWeight(7)
  line(0, 0, 200, 0)
  pop()

  //Draw for minute hand
  push()
  rotate(mnAngle)
  stroke(0, 255, 0)
  strokeWeight(7)
  line(0, 0, 125, 0)
  pop()

  //Draw for hour hand
  push()
  rotate(hrAngle)
  stroke(0, 0, 255)
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop()

  stroke(255, 0, 255)
  point(0, 0)
  strokeWeight(10)
  noFill()
  stroke(255, 0, 0)
  arc(0, 0, 500, 500, 0, scAngle)
  stroke(0, 255, 0)
  arc(0, 0, 480, 480, 0, mnAngle)
  stroke(0, 0, 255)
  arc(0, 0, 460, 460, 0, hrAngle)

  //drawSprites();
}