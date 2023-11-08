//https://teachablemachine.withgoogle.com/models/XhoY_3DO2/model.json
Webcam.set({
    height : 300,
    width : 550,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '"+data_uri+"'>"
    })
}
console.log("Ml5 Version : ",ml5.version);
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XhoY_3DO2/model.json", model_loaded);
function model_loaded(){
    console.log("Model is loaded")
}