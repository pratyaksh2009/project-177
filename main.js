function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    classfier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lit2TfIKT/',modelloaded);
}

function modelloaded(){
    console.log('modelloaded');
}

function draw(){
    image(video,0,0,300,300);
    classfier.classify(video,gotresult);
}

function gotresult(error,results){
 if(error){
 console.error(error);
 }
 else{
     console.log(results);
     document.getElementById("result_object_name").innerHTML=results[0].label;
     document.getElementById("result_acuracy_name").innerHTML=results[0].confidence.toFixed(3);
 }
}
