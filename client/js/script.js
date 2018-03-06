//$(document).on('ready', function () {
//   $('td').click(function(){
//      if($(this).hasClass('noColor')){
//          $(this).removeClass('noColor').addClass('redColor');
//      } 
//      else if($(this).hasClass('redColor')){
//          $(this).removeClass('redColor').addClass('yellowColor');
//      }
//      else{
//          $(this).removeClass('yellowColor').addClass('noColor');
//      }   
//   }); 
//});
//var colorWell;
//var defaultColor = "#0000ff";
//
//window.addEventListener("load", startup, false);
//function startup() {
//  colorWell = document.querySelector("#colorWell");
//  colorWell.value = defaultColor;
//  colorWell.addEventListener("input", updateFirst, false);
//  colorWell.addEventListener("change", updateAll, false);
//  colorWell.select();
//}
//function updateFirst(event) {
//  var p = document.querySelector("p");
//
//  if (p) {
//    p.style.color = event.target.value;
//  }
//}function updateAll(event) {
//  document.querySelectorAll("p").forEach(function(p) {
//    p.style.color = event.target.value;
//  });
//}

//chart
var myChartData={
 "graphset":[
 {
 "plot":{
   "value-box":{
   "text":"%npv%",
   "placement":"in"
 }
 },
 "type":"pie",
 "series":[
 {
 "values":[15,40,45,23]
 },
 {
 "values":[6,60,12,34]
 },
 {
 "values":[5,50,2,67]
 },
 {
 "values":[4,9,56,71]
 }
 ] 
 }
 ]
};
window.onload=function(){
zingchart.render({
id : "myChartDiv",
height : 300,
width : 950,
data : myChartData
});
};

window.onload=function(){
    $(".calendar-element-active").toggle(function()
    {$(".calendar-element-active").css({"color":"red"});},
        function()
    {$(".calendar-element-active").css({"color":"green"});});
});
