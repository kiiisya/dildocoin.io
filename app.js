document.addEventListener("DOMContentLoaded", function(){
	const body = document.getElementsByTagName("body");
	const but = document.getElementById("but");
	const textCoin = document.getElementById("textCoin");
	const resetBut = document.getElementById("resetBut");
	const boostBut = document.getElementById("boostBut");
	const themeBut = document.getElementById("themeBut");
	const textLvl = document.getElementById("LVL");

	let coin = localStorage.getItem("Coins");
	let upCoin = localStorage.getItem("UpCoin");
	let lvl = 1;
	let theme = 0; // "light" - 0 / "dark" - 1

	function skin(){
		const skin = document.getElementById("image");
		if(coin>=0){
			skin.src = "src/1.png";
			lvl = 1;
			textLvl.innerHTML = "LVL: " + lvl;
		}
		if(coin>=1000){
			skin.src = "src/2.png";
			skin.alt = "Tap";
			lvl = 2;
			textLvl.innerHTML = "LVL: " + lvl
		}
		if(coin>=10000){
			skin.src = "src/3.png";
			skin.alt = "Tap";
			lvl = 3;
			textLvl.innerHTML = "LVL: " + lvl
		}
		if(coin>=50000){
			skin.src = "src/4.png";
			skin.alt = "Tap";
			lvl = 4;
			textLvl.innerHTML = "LVL: " + lvl
		}
		if(coin>=100000){
			skin.src = "https://janetscloset.com/wp-content/uploads/2020/06/DJ-1016-21-3-Vac-U-Lock-Codeblack-Hung-Cock.png";
			skin.alt = "Tap";
			lvl = 5;
			textLvl.innerHTML = "LVL: " + lvl
		}
	}

	function setup(){
		textCoin.innerHTML = coin;
		textLvl.innerHTML = "LVL: " + lvl;
		upCoin = 1;
		skin();
	}

	setup();

	function addCoin(){
		skin();
		coin = +coin + upCoin;
		textCoin.innerHTML = coin;
		localStorage.setItem("Coins", coin);
	}
	
	but.addEventListener("click", addCoin);

	resetBut.addEventListener("click", function(){
		coin = 0;
		localStorage.setItem("Coins", coin);
		textCoin.innerHTML = coin;
		skin();
	})

	boostBut.addEventListener("click", function(){
		upCoin = 100;
	})

	themeBut.addEventListener("click", function(){
		if(theme == 0){
			body.style.background = "black";
			body.style.color = "white";
			theme == 1;
		}
	})
})
