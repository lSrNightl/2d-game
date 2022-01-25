let cnv = document.querySelector('#canvas');
let ctx = cnv.getContext('2d');

let x = 30;
let y = 300;

function anima(){
	if(object['37']){
		x--
	}
	if(object['39']){
		x++
	}
	ctx.clearRect(0, 0, 500, 500);
	ctx.strokeStyle = 'black';
	ctx.beginPath();
	ctx.moveTo(x+30, y);
	ctx.arc(x, y, 30, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.moveTo(0, 350);
	ctx.lineTo(500, 350);
	ctx.closePath();
	ctx.fill();
	state = requestAnimationFrame(anima);
}
state = requestAnimationFrame(anima);

let object = {
	37: false,
	39: false
}
window.addEventListener('keydown', function(e){
	if(e.keyCode == 37){
		object['37'] = true;
	}

	if(e.keyCode == 39){
		object['39'] = true;
	}

});
window.addEventListener('keyup', function(e){
	if(e.keyCode == 37){
		object['37'] = false;
	}
	if(e.keyCode == 39){
		object['39'] = false;
	}

});