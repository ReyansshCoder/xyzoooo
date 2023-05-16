Webcam .set({
width:350,height:300,image_format:'png',png_quality:90
});

Webcam. attach('#camera')

cam=document.getElementById("camera");

function takesnapshot(){
Webcam. snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
});}

console.log("ml5 version is ",ml5.version)

my_model=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/m7nefNYoW/model.json',modelLoaded)

function modelLoaded(){
    console.log("Model aa chuka hai")
}

function identify(){
i1=document.getElementById("selfie_image");
my_model.classify(i1,gotResult);
}

function gotResult(error,results){

    if(error){console.log(error)}else{
console.log(results);
document.getElementById("on").innerHTML=results[0].label;
document.getElementById("ac").innerHTML=results[0].confidence;    

}
}