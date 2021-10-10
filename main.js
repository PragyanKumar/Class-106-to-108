//https://teachablemachine.withgoogle.com/models/VhMAwp5j5/

//Startclassfication function//
function startClassification(){
navigator.mediaDevices.getUserMedia({
    audio:true
})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VhMAwp5j5/model.json",modelReady)
}

//modelReady function//
function modelReady(){
    classifier.classify(gotResults)
}

// gotResults function//
function gotResults(error,results){
   if (error) {
       console.error(error)
   } else {
       random_number_r = Math.ceil(Math.random()*255) + 1
       random_number_g = Math.ceil(Math.random()*255) + 1
       random_number_b = Math.ceil(Math.random()*255) + 1
       document.getElementById("result_label").innerHTML= "I can hear- " + results[0].label
       document.getElementById("result_confidence").innerHTML= "Accuracy- " + (results[0].confidence*100).toFixed(2) + " %"
       document.getElementById("result_label").style.color="rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
       document.getElementById("result_confidence").style.color="rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"

       //Variable//
        img=document.getElementById("alien1")
        img2=document.getElementById("alien2")
        img3=document.getElementById("alien3")
        img4=document.getElementById("alien4")

        // Noise works//
    if (results[0].label== "Clapping") {
        img.src="aliens-01.gif"
        img2.src="aliens-02.png"
        img3.src="aliens-03.png"
        img4.src="aliens-04.png"
    } else if(results[0].label== "Dog"){
        img.src="aliens-01.png"
        img2.src="aliens-02.gif"
        img3.src="aliens-03.png"
        img4.src="aliens-04.png"
    }
    else if(results[0].label== "Screaming"){
        img.src="aliens-01.png"
        img2.src="aliens-02.png"
        img3.src="aliens-03.gif"
        img4.src="aliens-04.png"
    }
    else {
        img.src="aliens-01.png"
        img2.src="aliens-02.png"
        img3.src="aliens-03.png"
        img4.src="aliens-04.gif"
    }
   }
}
