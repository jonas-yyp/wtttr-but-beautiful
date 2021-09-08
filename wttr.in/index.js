


Suche = document.getElementById("SearchButton")

Search = document.getElementById("Suche")

Suche.onclick = function(){

    var str = Search.value;
    
        if (str !=""){
    
    
            var std = str.replace("ü", "ue")
            var vbb = std.replace("ö", "oe")
            var crr = vbb.replace("ä", "ae")
            var ctt = crr.replace("ß", "ss")
      
    
        }

    fetch('https://wttr.in/'+ ctt + '?format=j1')
    .then(response => response.json())
    .then(function(data) 
    {
        
        // F12
        console.log(data);




//Start Information Area
   //VISIBILITY
     Visibility = data.weather[0].hourly[0].visibility;
     document.getElementById("div1")
     text.innerHTML = "Visibility = " + Visibility

      //TEMPERATUR
        div2 =  document.getElementById("div2")
        temperatur = data.current_condition[0].temp_C;
        div2.innerHTML = 'Temperatur =' + temperatur + "°C" ;

      //SUNRISE
        div3 = document.getElementById("div3");
        SunRise = data.weather[0].astronomy[0].sunrise;
        document.getElementById("div3")
        div3.innerHTML = "SunRise = " + SunRise


         //LOCATION
       div4 = document.getElementById("div4")
       Loc = data.nearest_area[0].region[0].value;
       div4.innerHTML ="Location = " + Loc;


  

      //Visibility Miles 
       div6 = document.getElementById("div6")
       VisMiles = data.weather[0].hourly[0].visibilityMiles;
       div6.innerHTML = "Visibility in Miles = " + VisMiles;
      

      



      //ChanceofThunder

      div7 = document.getElementById("div7")
      CHANCEofTHUNDER = data.weather[0].hourly[0].chanceofthunder;
      div7.innerHTML = 'Chance of Thunder = ' + CHANCEofTHUNDER + " %";
       
       

      
       //lan_de

      div8 = document.getElementById("div8")
      LanDE = data.weather[0].hourly[0].lang_de[0].value;
      div8.innerHTML = "Cloudy = " + LanDE;


      //closer location

      div9 = document.getElementById("div9")
      LocC = data.nearest_area[0].areaName[0].value;
      div9.innerHTML = "Closer Location = " + LocC;



      //weather general

      div10 = document.getElementById("div10")
      Weather = data.weather[0].hourly[0].weatherDesc[0].value;
      div10.innerHTML ="Weather Description = " + Weather;

      



       //End Information Area




       

       




  });

}

