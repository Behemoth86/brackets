module.exports = function check(str, bracketsConfig) {
	let Arr = [];
	for (let i = 0; i<bracketsConfig.length; i++) {Arr[i] = bracketsConfig[i].join('');}
	for (let i = 0; i<Arr.length; i++) {
		while(str.includes(Arr[i])) {
			str=str.replace(Arr[i],'');
			i=0;
		}
	}
	return str.length===0?true:false;
}