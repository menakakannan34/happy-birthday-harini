var countDownDte = new Date("aug 27, 2022 00:00:00").getTime();

var x =setInterval(function(){
   var now = new Date().getTime();

   var distance = countDownDte-now;

   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML= days + "d " +hours +"h " +minutes +"m " + seconds +"s ";


  if(distance<0){
    clearInterval(x);
    document.getElementById("demo").innerHTML="<span id='work'>happy birthday harini..! 🧡🌎 stay blessed d... 💕	love you so much d...🖤💙 have great year a head harini...!🤩miss you so much d...! 🥺lucky to have u in my life d... u mean a lot to me d ...! 🧡🌎thank u for everything d...thank u for coming into my life d ...ippo maariye eppavum unna troture pannite tha erupen...😂 <br>LOVE YOU IN EVERY UNIVERSE 🖤  <span>";

  }
},1000);

