




    

    fetch('https://wttr.in/Grünsfeld?format=j1')
    .then(response => response.json())
    .then(function(data) 
    {




		var temperaturen = [];
		var temperaturenMax = [];



   
for (var i = 0; i < 8; i++) {

	

	var result8 = data.weather[0].hourly[i].tempC;

	temperaturen[i] = result8 -0;




   console.log(i);
   // more statements
}



var wind = data.current_condition[0].winddir16Point;



var ghg = "NordOst";


if (wind == "NE") {
	ghg = 'Nordost'
  } 
	



  	  
  var wind = wind.replace("O", "E");
  console.log(wind);

  




//------------------------------IF's------------------------------



	//1
	if (wind == "N") {
		ghg = 'Nordost'
	  } 

	//2

	if (wind == "NNO") {
		ghg = 'Nordost'
	  } 

	  //3

	  if (wind == "ONO") {
		ghg = 'Nordost'
	  } 

	  //4

	  if (wind == "O") {
		ghg = 'Nordost'
	  } 

	  //5

	  if (wind == "OSO") {
		ghg = 'Nordost'
	  } 

	  //6
	  if (wind == "SSO") {
		ghg = 'Nordost'
	  } 

	  //7

	  if (wind == "S") {
		ghg = 'Nordost'
	  } 


	  //8
	  if (wind == "SSW") {
		ghg = 'Nordost'
	  } 
	  //9

	  
		if (wind == "SW") {
			ghg = 'Nordost'
		  } 

	  //10

	  if (wind == "WSW") {
		ghg = 'Nordost'
	  } 
	  //12

	  if (wind == "W") {
		ghg = 'Nordost'
	  } 
	  //13

	  if (wind == "WNW") {
		ghg = 'Nordost'
	  } 

	  //14

	  if (wind == "NW") {
		ghg = 'Nordost'
	  } 
	  //15

	  if (wind == "NNW") {
		ghg = 'Nordost'
	  } 

	  //16

	  if (wind == "NO") {
		ghg = 'Nordost'
	  } 





	  console.log(ghg);





	  








	  



//------------------------------IF's end------------------------------

	  
  
 
  // expected output: "NOT positive"



  console.log(temperaturen);
  
      

        
        new roughViz.Line(
	{
		element: '#diagramm',
		data:
		{
			'Stuendliche Temperatur': temperaturen 
		},
		title: 'Line Chart',
		x: ['0 Uhr', '3 Uhr', '6 Uhr', '9 Uhr'],
		y0: 'Temperatur',
		yLabel: 'hey',
		colorVar: 'continent',
		strokeWith: 1.5,
		roughness: 0.1,
		width: window.innerWidth / 1.1,
		height: 600,
    });
        // F12
        console.log(data);



  });