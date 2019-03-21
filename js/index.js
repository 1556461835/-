var bool = 10;      //血量
var count = 0;      //f分数
var letters = [];   //全部图片
var speed = 10;     //速度
var letternum = 5
var time;          //定时器
var second = 100;  //时间
var moveletters =[];
var stratbg = document.querySelector(".start-bg");
//生成字母
function creat(){
	for(var i=97;i<123;i++){
		letters.push(String.fromCharCode(i))	
	}
}
creat()

//开始
function kaishi(){
	bool = 10;      //血量
	count = 0;      //f分数
	xuetiao.style.width = bool*10 + "%"
	getletter(letternum)
	countnum.innerText = count
	time = setInterval(clock,second);
	document.onkeydown = function(e){
		for(var i=0;i<moveletters.length;i++){
			if(e.key === moveletters[i].letter){
				bg.removeChild(moveletters[i]);
				moveletters[i] = null;
				moveletters.splice(i,1);
				getletter(1)
				count = count+1
				countnum.innerText = count;
				break;
			}
		}
	}
}
start.onclick = function(){
	stratbg.style.top = 100+"vh"
	kaishi()
}
stratbg.onmousemove = function(e){
	var sc = window.innerWidth/2
	var sw = window.innerHeight/2
	var xm =sc - e.clientX
	var xw =sw - e.clientY
	this.style.backgroundPositionX =-1*xm*0.025+"px";
	this.style.backgroundPositionY =-1*xw*0.025+"px";  
}
//生成字母
function getletter(num){
	for(var i=0;i<num;i++){
		var x = innerWidth/2 -400+Math.random()*800;
		var y = Math.random()*150+200
		var n =Math.floor(Math.random()*25) 
		var img = document.createElement("img");
			img.src = `img/${letters[n]}.jpg`    //a.jpg
			img.style.cssText = `width:100px;height:100px;position:absolute;top:-${y}px;left:${x}px`,
			img.letter =letters[n];
			bg.appendChild(img)
			moveletters.push(img)
	}
}
time = setInterval(clock,second)
function clock(){
	for(var i=0;i<moveletters.length;i++){
		var top = moveletters[i].offsetTop+speed
		moveletters[i].style.top= top +"px";
		if(parseInt(moveletters[i].style.top)>=window.innerHeight){
			bg.removeChild(moveletters[i]);
			moveletters[i] = null;
			moveletters.splice(i,1);
			getletter(1)
			bool--;
			xuetiao.style.width = bool*10 + "%";
			if(bool<=0){
				stop()
			}
		}
	}
}

function stop(){
	stopbg.style.top = 15+"%";
	clearInterval(time);
	document.onkeydown = null;
	for(var i=0;i<moveletters.length;i++){
		bg.removeChild(moveletters[i])
	}
	moveletters.length = 0
	console.log(moveletters)
}
//重新开始
shuaxin.onclick = function(){
	stopbg.style.top = -600+"px";
	stratbg.style.top = 0;
}
