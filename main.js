Webcam.set({
    width:350,
    height:300,
    image_format:"png",png_quality:90
});
camera=document.getElementById("cam");
Webcam.attach("#cam");
function take_snapshot()
{
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="red" src="'+data_uri+'"/>'
    });
    console.log("take_spanshot");
}
console.log("ml5version",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UG0NsfVwb/ model.json",modelloaded);
    
function modelloaded ()
{
 console.log(modelloaded);   
}
