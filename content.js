let r,g,b;

var s = function(sketch) {
    sketch.setup = function() {
        document.body.style['userSelect'] = 'none';
        //let h = document.body.clientHeight;
        let hei =  document.documentElement.scrollHeight;
        let wid = document.documentElement.scrollWidth;
        let c = sketch.createCanvas(wid, hei);
        // console.log("canvas>>>>>>",document.documentElement.scrollHeight);
        // console.log("canvas>>>>>>",document.documentElement.scrollWidth);
        // console.log("canvas>>>>>>",sketch.windowHeight);
        // console.log("canvas>>>>>>",sketch.windowWidth);
        c.position(0,0);
        r = sketch.random(255);
        g = sketch.random(255);
        b = sketch.random(255);
        c.style('pointer-events','none');
        sketch.clear();
    }

    sketch.draw = function() {
        //sketch.background(0,255,0)
        sketch.stroke(r,g,b);
        sketch.strokeWeight(4);
        if(sketch.mouseIsPressed){
            sketch.line(sketch.mouseX, sketch.mouseY,sketch.pmouseX, sketch.pmouseY)
        }
    }
}

var myp5 = new p5(s);
  