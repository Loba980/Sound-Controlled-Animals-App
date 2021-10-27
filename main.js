https://teachablemachine.withgoogle.com/models/wZ6TgeAdv/model.json

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wZ6TgeAdv/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(){
    if(error){
        console.error(error);
}

else{
    console.log(gotResults);
}
}