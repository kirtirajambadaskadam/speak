function speak(){
    var synth=window.speechSynthesis;
    convert=text;
    var utterthis= new SpeechSynthesisUtterance(convert);
    synth.speak(utterthis);
}
 
var text="";

function speak2(){
    text=document.getElementById("text2").value;
    speak();
}