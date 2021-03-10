var battingteamruns = 0 ;
var batsmen1={
	isOnStrike:true,
	runs:0,
	balls:0,
	fours:0,
	six:0
}
var batsmen2={
	isOnStrike:false,
	runs:0,
	balls:0,
	fours:0,
	six:0
}
var battingteamwickets = 0;

function updatescore(e){

 console.log(e.path[0].id);
switch ((e.path[0].id)){ 
	case 'dotball': 
		dotball();
		break;
	case 'onerun': 
		onerun();
		break;
	case 'tworuns': 
		tworuns();
		break;		
	case 'threeruns': 
		threeruns();
		break;
	case 'fourruns': 
		fourruns();
		break;
	case 'fiveruns': 
		alert('prototype Wins!');
		break;
	case 'sixruns': 
		sixruns();
		break;		
	case 'wide': 
		alert('dojo Wins!');
		break;
	case 'noball': 
		alert('jQuery Wins!');
		break;
	case 'bye': 
		alert('prototype Wins!');
		break;
	case 'legbye': 
		alert('mootools Wins!');
		break;		
	case 'bowled': 
		alert('dojo Wins!');
		break;
	case 'caught': 
		alert('jQuery Wins!');
		break;
	case 'stumped': 
		alert('prototype Wins!');
		break;
	case 'runout': 
		alert('mootools Wins!');
		break;		
	case 'retirehurt': 
		alert('dojo Wins!');
		break;	
	default:
		alert('Nobody Wins!');
}


}

function dotball(){
	if(batsmen1.isOnStrike){
		batsmen1.balls+=1;
		$("#batsmen1balls").text(batsmen1.balls);
	}
	else{
		batsmen2.balls+=1;
		$("#batsmen2balls").text(batsmen2.balls);
	}
}

function onerun(){
	battingteamruns+=1;
    $("#battingteamruns").text(battingteamruns);
    $("#batsmen1score").toggleClass("striker");
    $("#batsmen2score").toggleClass("striker");
    $(".strikerdisplay1").toggleClass("strikerotate");
    $(".strikerdisplay2").toggleClass("strikerotate");
	if(batsmen1.isOnStrike){
		batsmen1.balls+=1;
		$("#batsmen1balls").text(batsmen1.balls);
		batsmen1.runs+=1;
		$("#batsmen1runs").text(batsmen1.runs);
		batsmen1.isOnStrike=false;
	}
	else{
		batsmen2.balls+=1;
		$("#batsmen2balls").text(batsmen2.balls);
		batsmen2.runs+=1;
	    $("#batsmen2runs").text(batsmen2.runs);
	    batsmen1.isOnStrike=true;
	}
}

function tworuns(){
	battingteamruns+=2;
	$("#battingteamruns").text(battingteamruns);
	if(batsmen1.isOnStrike){
		batsmen1.balls+=1;
		$("#batsmen1balls").text(batsmen1.balls);
		batsmen1.runs+=2;
		$("#batsmen1runs").text(batsmen1.runs);
	}
	else{
		batsmen2.balls+=1;
		$("#batsmen2balls").text(batsmen2.balls);
		batsmen2.runs+=2;
	    $("#batsmen2runs").text(batsmen2.runs);
    }
}

function threeruns(){
	battingteamruns+=3;
	$("#battingteamruns").text(battingteamruns);
	$("#batsmen1score").toggleClass("striker");
    $("#batsmen2score").toggleClass("striker");
    $(".strikerdisplay1").toggleClass("strikerotate");
    $(".strikerdisplay2").toggleClass("strikerotate");
	if(batsmen1.isOnStrike){
		batsmen1.balls+=1;
		$("#batsmen1balls").text(batsmen1.balls);
		batsmen1.runs+=3;
		$("#batsmen1runs").text(batsmen1.runs);
		batsmen1.isOnStrike=false;
	}
	else{
		batsmen2.balls+=1;
		$("#batsmen2balls").text(batsmen2.balls);
		batsmen2.runs+=3;
	    $("#batsmen2runs").text(batsmen2.runs);
	    batsmen1.isOnStrike=true;
	}
} 

function fourruns(){
	battingteamruns+=4;
	$("#battingteamruns").text(battingteamruns);
	if(batsmen1.isOnStrike){
		batsmen1.balls+=1;
		$("#batsmen1balls").text(batsmen1.balls);
		batsmen1.runs+=4;
		$("#batsmen1runs").text(batsmen1.runs);
        batsmen1.fours+=1;
        $("#batsmen1fours").text(batsmen1.fours);
	}
	else{
		batsmen2.balls+=1;
		$("#batsmen2balls").text(batsmen2.balls);
		batsmen2.runs+=4;
	    $("#batsmen2runs").text(batsmen2.runs);
	     batsmen2.fours+=1;
        $("#batsmen2fours").text(batsmen2.fours);
    }
}

function sixruns(){
	battingteamruns+=6;
	$("#battingteamruns").text(battingteamruns);
	if(batsmen1.isOnStrike){
		batsmen1.balls+=1;
		$("#batsmen1balls").text(batsmen1.balls);
		batsmen1.runs+=6;
		$("#batsmen1runs").text(batsmen1.runs);
        batsmen1.six+=1;
        $("#batsmen1six").text(batsmen1.six);
	}
	else{
		batsmen2.balls+=1;
		$("#batsmen2balls").text(batsmen2.balls);
		batsmen2.runs+=6;
	    $("#batsmen2runs").text(batsmen2.runs);
	     batsmen2.six+=1;
        $("#batsmen2six").text(batsmen2.six);
    }
}


/*$("#onerun").on("click", function(event){
	 event.preventDefault();
     battingteamruns+=1;
     $("#battingteamruns").text(battingteamruns);
     $("#batsmen1score").toggleClass("striker");
     $("#batsmen2score").toggleClass("striker");
     $(".strikerdisplay1").toggleClass("strikerotate");
     $(".strikerdisplay2").toggleClass("strikerotate");
}) */