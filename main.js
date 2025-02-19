document.title = "suit"


//player
var player = prompt("gunting, batu, kertas");
if(player == "gunting"){
    var img = document.createElement("img");
    img.src = "scissor.png";

    var src = document.getElementById("scissor");
    src.append(img);
}else if (player == "kertas"){
    var img = document.createElement("img");
    img.src = "papper.png";

    var src = document.getElementById("paper");
    src.append(img);
}else if(player == "batu"){
    var img = document.createElement("img");
    img.src = "rock.png";

    var src = document.getElementById("rock");
    src.append(img);
}else{
    alert("pilih yang bener napa anjing banget sih lu tai!!")
}






// computer
var computer = Math.random()

if (computer < 0.34){

    computer = "gunting";

    var img = document.createElement("img");
    img.src = "scissor.png";

    var src = document.getElementById("scissor");
    src.append(img);
}else if(computer > 0.34 && computer < 0.67){

    computer = "kertas";

    var img = document.createElement("img");
    img.src = "papper.png";

    var src = document.getElementById("paper");
    src.append(img);

}else{

    computer = "batu";

    var img = document.createElement("img");
    img.src = "rock.png";

    var src = document.getElementById("rock");
    src.append(img);
}

console.log(computer)

//rules
var hasil = ""
if(player == computer){
    hasil = 'SERI';
}else if (player == "gunting"){
    hasil = (computer == "batu") ? 'KALAH' : 'MENANG';
}else if( player == "kertas"){
    hasil = ( computer == "gunting") ? 'KALAH' : 'MENANG';
}else if (player == "batu"){
    hasil = (computer == "kertas") ? 'KALAH' : 'MENANG';
}else{
    hasil = "terimakasih"
}



var h1 = document.createElement("h1");
var text = document.createTextNode(hasil);
h1.append(text);
document.getElementById("result").append(h1);

