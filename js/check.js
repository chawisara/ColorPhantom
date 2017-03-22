var answers="";
var key=["3","2","1","4","1","3","2","4","1","3"];
var answersBoolean=[]

var c1=false;
var c2=false;
var c3=false;
var c4=false;

var check=false;

function displayScore() {
	var a=localStorage.getItem("answers");
	var answers=a.split(" ");
	var correct=0;
	for(i=0; i<answers.length; i++){
		if(answers[i]==key[i]){
			correct+=10;
		}
	}
	document.getElementById("score").innerHTML=(correct);

}

function switchImg(id, newImg){
	document.getElementById(id).src=newImg;
}

function selectColor(q, id, newImg){

	var colorid=""+id;
	var select=""+newImg;

	document.getElementById(colorid).src=select;

	if(id=="color1"){
		c1=true;

		c2=false
		document.getElementById("color2").src="img/q"+q+"a2.png"
		
	    c3=false
	    document.getElementById("color3").src="img/q"+q+"a3.png"

	    c4=false;
	    document.getElementById("color4").src="img/q"+q+"a4.png"
	}else if(id=="color2"){
		c2=true;

		c1=false;
		document.getElementById("color1").src="img/q"+q+"a1.png"
		
	    c3=false;
	    document.getElementById("color3").src="img/q"+q+"a3.png"

	    c4=false;
	    document.getElementById("color4").src="img/q"+q+"a4.png"
	}else if(id=="color3"){
		c3=true;

		c1=false;
		document.getElementById("color1").src="img/q"+q+"a1.png"
		
		c2=false;
		document.getElementById("color2").src="img/q"+q+"a2.png"

	    c4=false;
	    document.getElementById("color4").src="img/q"+q+"a4.png"

	}else if(id=="color4"){
		c4=true;

		c1=false;
		document.getElementById("color1").src="img/q"+q+"a1.png"
		
		c2=false;
		document.getElementById("color2").src="img/q"+q+"a2.png"

	    c3=false;
	    document.getElementById("color3").src="img/q"+q+"a3.png"
	}
    

}


function updateBar(num){
	var a=localStorage.getItem("answers");
	var answers=a.split(" ");
	// window.alert(a[0]);
	if(num<10){
		j=1;
		k=2;
		for(i=0; i<num; i++){

			if(answers[i]==key[i]){
				document.getElementById("progright"+j).style.width="10%";
			} else{
				document.getElementById("progwrong"+j).style.width="10%";
			}



			j++;
			k++;
		}

	}else{
		j=1;
		for(i=0; i<num; i++){
			if(answers[i]==key[i]){
				document.getElementById("progright"+j).style.width="10%";
			} else{
				document.getElementById("progwrong"+j).style.width="10%";
			}
			j++;
		}
	}


}

function mouseOver(ques){
	var q=""+ques;


	if(check==true){
		document.getElementById("color1").src="img/q"+q+"a1.png";
		document.getElementById("color2").src="img/q"+q+"a2.png";
		document.getElementById("color3").src="img/q"+q+"a3.png";
		document.getElementById("color4").src="img/q"+q+"a4.png";
	}

}

function mouseOut(ques){
	var q=""+ques;

	if(check==true){
		document.getElementById("color1").src="img/q"+q+"a1small.png";
		document.getElementById("color2").src="img/q"+q+"a2small.png";
		document.getElementById("color3").src="img/q"+q+"a3small.png";
		document.getElementById("color4").src="img/q"+q+"a4small.png";
	}

}

function getAns(){
	var a=localStorage.getItem("answers");
	//window.alert(a);
	//var answers=a.split(" ");

	return a;
}


function checkAnswer1(){
	
	if(c3==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Correct!");
		document.getElementById("next").style.visibility = "visible";
		answers+="3 ";
		localStorage.setItem("answers", answers);        
        

	}else if(c2==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="2 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q1a1small.png');
        switchImg('color2', 'img/q1a2small.png');
        switchImg('color3', 'img/q1a3small.png');
        switchImg('color4', 'img/q1a4small.png');

	}else if(c1==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="1 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q1a1small.png');
        switchImg('color2', 'img/q1a2small.png');
        switchImg('color3', 'img/q1a3small.png');
        switchImg('color4', 'img/q1a4small.png');

	}else if(c4==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="4 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q1a1small.png');
        switchImg('color2', 'img/q1a2small.png');
        switchImg('color3', 'img/q1a3small.png');
        switchImg('color4', 'img/q1a4small.png');
	}

	check=true;


}

function checkAnswer2(){
	var answers=localStorage.getItem("answers");
	if(c1==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="1 ";
		localStorage.setItem("answers", answers);
		switchImg('color1', 'img/q2a1small.png');
        switchImg('color2', 'img/q2a2small.png');
        switchImg('color3', 'img/q2a3small.png');
        switchImg('color4', 'img/q2a4small.png');

	}else if(c2==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Correct!");
		document.getElementById("next").style.visibility = "visible";
		answers+="2 ";
		localStorage.setItem("answers", answers);


	}else if(c3==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="3 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q2a1small.png');
        switchImg('color2', 'img/q2a2small.png');
        switchImg('color3', 'img/q2a3small.png');
        switchImg('color4', 'img/q2a4small.png');

	}else if(c4==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="4 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q2a1small.png');
        switchImg('color2', 'img/q2a2small.png');
        switchImg('color3', 'img/q2a3small.png');
        switchImg('color4', 'img/q2a4small.png');
	}
	check=true;

}

function checkAnswer3(){
	var answers=localStorage.getItem("answers");

	if(c1==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Correct!");
		document.getElementById("next").style.visibility = "visible";
		answers+="1 ";
		localStorage.setItem("answers", answers);

	}else if(c2==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="2 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q3a1small.png');
        switchImg('color2', 'img/q3a2small.png');
        switchImg('color3', 'img/q3a3small.png');
        switchImg('color4', 'img/q3a4small.png');

	}else if(c3==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="3 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q3a1small.png');
        switchImg('color2', 'img/q3a2small.png');
        switchImg('color3', 'img/q3a3small.png');
        switchImg('color4', 'img/q3a4small.png');

	}else if(c4==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="4 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q3a1small.png');
        switchImg('color2', 'img/q3a2small.png');
        switchImg('color3', 'img/q3a3small.png');
        switchImg('color4', 'img/q3a4small.png');
	}
	check=true;
}

function checkAnswer4(){
	var answers=localStorage.getItem("answers");

	if(c1==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="1 ";
		localStorage.setItem("answers", answers);
		switchImg('color1', 'img/q4a1small.png');
        switchImg('color2', 'img/q4a2small.png');
        switchImg('color3', 'img/q4a3small.png');
        switchImg('color4', 'img/q4a4small.png');

	}else if(c2==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="2 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q4a1small.png');
        switchImg('color2', 'img/q4a2small.png');
        switchImg('color3', 'img/q4a3small.png');
        switchImg('color4', 'img/q4a4small.png');

	}else if(c3==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="3 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q4a1small.png');
        switchImg('color2', 'img/q4a2small.png');
        switchImg('color3', 'img/q4a3small.png');
        switchImg('color4', 'img/q4a4small.png');

	}else if(c4==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Correct!");
		document.getElementById("next").style.visibility = "visible";
		answers+="4 ";
		localStorage.setItem("answers", answers);

	}
	check=true;

}

function checkAnswer5(){
	var answers=localStorage.getItem("answers");

	if(c1==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Correct!");
		document.getElementById("next").style.visibility = "visible";
		answers+="1 ";
		localStorage.setItem("answers", answers);

	}else if(c2==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="2 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q5a1small.png');
        switchImg('color2', 'img/q5a2small.png');
        switchImg('color3', 'img/q5a3small.png');
        switchImg('color4', 'img/q5a4small.png');

	}else if(c3==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="3 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q5a1small.png');
        switchImg('color2', 'img/q5a2small.png');
        switchImg('color3', 'img/q5a3small.png');
        switchImg('color4', 'img/q5a4small.png');

	}else if(c4==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="4 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q5a1small.png');
        switchImg('color2', 'img/q5a2small.png');
        switchImg('color3', 'img/q5a3small.png');
        switchImg('color4', 'img/q5a4small.png');
	}
	check=true;

}

function checkAnswer6(){
	var answers=localStorage.getItem("answers");

	if(c1==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="1 ";
		localStorage.setItem("answers", answers);
		switchImg('color1', 'img/q6a1small.png');
        switchImg('color2', 'img/q6a2small.png');
        switchImg('color3', 'img/q6a3small.png');
        switchImg('color4', 'img/q6a4small.png');

	}else if(c2==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="2 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q6a1small.png');
        switchImg('color2', 'img/q6a2small.png');
        switchImg('color3', 'img/q6a3small.png');
        switchImg('color4', 'img/q6a4small.png');

	}else if(c3==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Correct!");
		document.getElementById("next").style.visibility = "visible";
		answers+="3 ";
		localStorage.setItem("answers", answers);
        

	}else if(c4==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="4 ";
		localStorage.setItem("answers", answers);

	}
	check=true;

}

function checkAnswer7(){
	var answers=localStorage.getItem("answers");

	if(c1==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="1 ";
		localStorage.setItem("answers", answers);
		switchImg('color1', 'img/q7a1small.png');
        switchImg('color2', 'img/q7a2small.png');
        switchImg('color3', 'img/q7a3small.png');
        switchImg('color4', 'img/q7a4small.png');

	}else if(c2==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Correct!");
		document.getElementById("next").style.visibility = "visible";
		answers+="2 ";
		localStorage.setItem("answers", answers);


	}else if(c3==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="3 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q7a1small.png');
        switchImg('color2', 'img/q7a2small.png');
        switchImg('color3', 'img/q7a3small.png');
        switchImg('color4', 'img/q7a4small.png');

	}else if(c4==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="4 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q7a1small.png');
        switchImg('color2', 'img/q7a2small.png');
        switchImg('color3', 'img/q7a3small.png');
        switchImg('color4', 'img/q7a4small.png');
	}
	check=true;

}

function checkAnswer8(){
	var answers=localStorage.getItem("answers");

	if(c1==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="1 ";
		localStorage.setItem("answers", answers);
		switchImg('color1', 'img/q8a1small.png');
        switchImg('color2', 'img/q8a2small.png');
        switchImg('color3', 'img/q8a3small.png');
        switchImg('color4', 'img/q8a4small.png');

	}else if(c2==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="2 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q8a1small.png');
        switchImg('color2', 'img/q8a2small.png');
        switchImg('color3', 'img/q8a3small.png');
        switchImg('color4', 'img/q8a4small.png');

	}else if(c3==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="3 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q8a1small.png');
        switchImg('color2', 'img/q8a2small.png');
        switchImg('color3', 'img/q8a3small.png');
        switchImg('color4', 'img/q8a4small.png');

	}else if(c4==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Correct!");
		document.getElementById("next").style.visibility = "visible";
		answers+="4 ";
		localStorage.setItem("answers", answers);

	}

	check=true;
}

function checkAnswer9(){
	var answers=localStorage.getItem("answers");

	if(c1==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Correct!");
		document.getElementById("next").style.visibility = "visible";
		answers+="1 ";
		localStorage.setItem("answers", answers);

	}else if(c2==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="2 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q9a1small.png');
        switchImg('color2', 'img/q9a2small.png');
        switchImg('color3', 'img/q9a3small.png');
        switchImg('color4', 'img/q9a4small.png');

	}else if(c3==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="3 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q9a1small.png');
        switchImg('color2', 'img/q9a2small.png');
        switchImg('color3', 'img/q9a3small.png');
        switchImg('color4', 'img/q9a4small.png');

	}else if(c4==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="4 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q9a1small.png');
        switchImg('color2', 'img/q9a2small.png');
        switchImg('color3', 'img/q9a3small.png');
        switchImg('color4', 'img/q9a4small.png');
	}

	check=true;

}

function checkAnswer10(){
	var answers=localStorage.getItem("answers");

	if(c1==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="1 ";
		localStorage.setItem("answers", answers);
		switchImg('color1', 'img/q10a1small.png');
        switchImg('color2', 'img/q10a2small.png');
        switchImg('color3', 'img/q10a3small.png');
        switchImg('color4', 'img/q10a4small.png');

	}else if(c2==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="2 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q10a1small.png');
        switchImg('color2', 'img/q10a2small.png');
        switchImg('color3', 'img/q10a3small.png');
        switchImg('color4', 'img/q10a4small.png');

	}else if(c3==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Correct!");
		document.getElementById("next").style.visibility = "visible";
		answers+="3 ";
		localStorage.setItem("answers", answers);


	}else if(c4==true){
		document.getElementById("ok1").disabled=true;
		document.getElementById("ans").innerHTML=("Oops! Wrong answer!");
		document.getElementById("next").style.visibility = "visible";
		answers+="4 ";
		localStorage.setItem("answers", answers);
        switchImg('color1', 'img/q10a1small.png');
        switchImg('color2', 'img/q10a2small.png');
        switchImg('color3', 'img/q10a3small.png');
        switchImg('color4', 'img/q10a4small.png');
	}

	check=true;

}