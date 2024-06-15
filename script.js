const buttoncontent = document.getElementById("content-button");
buttoncontent.addEventListener("click",function(){
const fileUrl = "https://cyan-jeni-93.tiiny.site ";
const fileName ="Ragul.Resume";
const link = document.createElement("a");
link.href = fileUrl;
link.download = fileName;
link.click();
});

