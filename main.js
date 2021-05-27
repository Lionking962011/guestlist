var people=[]

function sumb()
{
    var guestnames=document.getElementById("people").value;
    people.push(guestnames)
    document.getElementById("names").innerHTML= people.toString()
}

function show()
{
    var i= people.join("<br>");
	console.log(people);
	document.getElementById("namesl").innerHTML=i.toString();
}

function sort()
{
   var i= people.sort()
    var i= people.join("<br>");
    console.log(people);
	document.getElementById("namesk").innerHTML=i.toString();
}

function search()
{
	var s= document.getElementById("people").value;
	var found=0;
	var j;
	for(j=0; j<people.length; j++)
		{
			if(s==people[j]){
				found=found+1;
			}	
		}
	document.getElementById("ik").innerHTML="name found" +found+",0"+ " time/s";
	console.log("found name "+found+" time/s");
}