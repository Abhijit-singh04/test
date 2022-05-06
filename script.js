const stoptbtn = document.querySelector("stopbtn")
const startbtn = document.querySelector("startbtn")
const img = document.querySelector("img")
var videoE1 = document.getElementById('preview');

stopbtn.addEventListener("click",function(){
    // console.log("toni")
   $;{'#startbtn img'}show();
    img.hide();

   stream=videoE1.srcObject;
   tracks = stream.getTracks();
})






//The srcObject property of the HTMLMediaElement interface sets or returns the object which serves as the source of the media associated with the HTMLMediaElement.
//The object can be a MediaStream, a MediaSource, a Blob, or a File (which inherits from Blob).