function classifier1(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LAWatBh78/model.json",load) 
}
function load(){
    console.log(ml5.version)
    classifier.classify(Soundteacblemeachine)
}



function Soundteacblemeachine(error,results){
    if (error){
        console.error("ËRROR!!!"+error)
    }
    else {
        console.log(results)
        document.getElementById("result_lable").innerHTML=results[0].label
        document.getElementById("result_accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%"

    if ("Cat"==results[0].label){
        document.getElementById("alien_1").src="aliens-01.gif"
        document.getElementById("alien_2").src="aliens-02.png"
        document.getElementById("alien_3").src="aliens-03.png"
        document.getElementById("alien_4").src="aliens-04.png"
    }
    else if ("Dog"==results[0].label){
        document.getElementById("alien_1").src="aliens-01.png"
        document.getElementById("alien_2").src="aliens-02.gif"
        document.getElementById("alien_3").src="aliens-03.png"
        document.getElementById("alien_4").src="aliens-04.png"
    }
    else if ("Clap"==results[0].label){
        document.getElementById("alien_1").src="aliens-01.png"
        document.getElementById("alien_2").src="aliens-02.png"
        document.getElementById("alien_3").src="aliens-03.gif"
        document.getElementById("alien_4").src="aliens-04.png"
    }
    else{
        document.getElementById("alien_1").src="aliens-01.png"
        document.getElementById("alien_2").src="aliens-02.png"
        document.getElementById("alien_3").src="aliens-03.png"
        document.getElementById("alien_4").src="aliens-04.gif"
    }
    }
}