prediction_1=" ";
prediction_2=" ";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })

}

console.log('ml5 version is', ml5.version)

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GuUDdAohu/model.json', modelLoaded)

function modelLoaded()
{
    console.log('model is loaded')
}

function check()
{
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }

function check()
{
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }

    else
    {
        document.getElementById("result_emotion_name1").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;

        prediction_1=results[0].label;
        prediction_2=results[1].label;

        speak();

        if (prediction_1 == "victory")     
        {
            document.getElementById("update_emoji1"),innerHTML= "&#9996;";
            console.log(prediction_1)
        }

        
        if (prediction_1 == "amazing")     
        {
            document.getElementById("update_emoji1"),innerHTML= "&#128076;";
            console.log(prediction_1)
        }

        if (prediction_1 == "best")     
        {
            document.getElementById("update_emoji1"),innerHTML= "&#128077;";
            console.log(prediction_1)
        }

        if (prediction_2 == "victory")     
        {
            document.getElementById("update_emoji2"),innerHTML= "&#9996;";
            console.log(prediction_2)
        }

        
        if (prediction_2 == "amazing")     
        {
            document.getElementById("update_emoji2"),innerHTML= "&#128076;";
            console.log(prediction_2)
        }

        if (prediction_2 == "best")     
        {
            document.getElementById("update_emoji2"),innerHTML= "&#128077;";
            console.log(prediction_2)
        }
    }
}