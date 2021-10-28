dog=0;
cat=0;


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
    var red=Math.floor(Math.random()*255) + 1;
    var blue=Math.floor(Math.random()*255) + 1; 
    var green=Math.floor(Math.random()*255) + 1;

    document.getElementById("number_of_sounds_heard").style.red;
    results=document.getElementById("sound").style.green;
    image="img";

    if("sound"==barking){
image.src="dog_image.jpg";
dog=1;
}

    else("sound"==meowing);{
image.src="cat_image.jpg";
cat=1;
    }
 }
}