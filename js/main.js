// I know using jQuery is a little overkill but it's just faster for me.

$(window).load(function(){
	rainbow.animate();
});

var color = ['#ff0000','#ff9600','#fff000','#00ff00','#0099ff','#7200ff','#f000ff'];

var rainbow = {
	'red': color[0],
	'orange': color[1],
	'yellow': color[2],
	'green': color[3],
	'blue': color[4],
	'indigo': color[5],
	'violet': color[6],
	animate: function() {
		$('li').each(function(){
			var elm = $(this);
			cycleColors(elm);
		});
	}
};

function cycleColors(elm) {
	var elColor = elm.attr('id');
	var pos = color.indexOf(rainbow[elColor]);
	var count = pos;
	function loopIt(){
		if (count>6){
			count = 0;
		}
		elm.css({'border-top-color':color[count], 'border-right-color':color[count], 'border-bottom-color':color[count], 'border-left-color':color[count]});
		count++;
		setTimeout(loopIt, 200);
	};
	loopIt();
};