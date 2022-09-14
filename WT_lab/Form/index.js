function myCall(){
    var textarea=document.getElementById("tarea");
    var text=textarea.value;
    value = "Word: "+(text.split(/\b\s+\b/).length);
    alert(value);
    value1 = " Character: "+ (text.replace(/\s/g,"").length+"/"+text.replace(/\n/g,"").length);
    alert(value1);
    value2 = " number of lines: " +(text.split(/\n/).length);
    alert(value2); 
}