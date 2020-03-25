
const flightpath = {
  curviness: 1.25, //curviness the amount of curve the image is gonna take
  autoRotate:true,
  values: [
    {x:100, y: -20},
    { x:300, y:10},
    { x:500, y:100},
    { x:750, y:-100},
    { x:350, y:-50},
    { x:600, y:100},
    { x:800, y:0},
    { x:900, y:-150},
  ]
}


const tween = new TimelineLite();

tween.add (
  Tweenlite.to('.paper-plane', 1, {
    bezier: flightpath,
    ease: Power1.easeInOut
  })
);


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  duration: 6000,
  triggerHook: 0

})

.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller);
