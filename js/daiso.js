$(function () {
    var banner=$(".slide li")
    var bannerPos=[];
    var bArray=[$(".slide li:eq(0)"),$(".slide li:eq(1)"),$(".slide li:eq(2)")];
    banner.each(function(i){
        bannerPos[i]=$(this).css("left");
    })
    console.log(bannerPos,bArray);
    
    var start = setInterval(function(){
        $(".")
    })
})
