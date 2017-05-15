function cityup (event) {
	event=event?event:window.event;
	inputClass = event.target.getAttribute('class');
	div = document.querySelector(`div.${inputClass}`);
	console.log(event.target.value.length)
};

function cityinfo (event) {
	event=event?event:window.event;
	inputClass = event.target.getAttribute('class');
	div = document.querySelector(`div.${inputClass}`);
	CSSStyle = document.styleSheets

	for(let i=0; i<CSSStyle.length; i++) {
		let CSSRules = CSSStyle[i].cssRules;
		for(let x=0; x<CSSRules.length; x++) {
			if(CSSRules[x].selectorText == `div.${inputClass}::before`) {
				CSSRules[x].style.cssText = `visibility: visible; font-size: 12px; color: gray; content: attr(before);
				display: inline-block; position: relative; width: 100%; height: 100%;`;
//				if(event.target.value <=0 ) event.target.value = ' ';
				event.target.setAttribute('placeholder', '');
				event.target.focus();
//console.log(div);
				break;
			};
		};
	};
};


function cityblur (event) {
	event=event?event:window.event;
	inputClass = event.target.getAttribute('class');
	div = document.querySelector(`div.${inputClass}`);
	CSSStyle = document.styleSheets

	if(event.target.value.length <= 0) {
		for(let i=0; i<CSSStyle.length; i++) {
			let CSSRules = CSSStyle[i].cssRules;
			for(let x=0; x<CSSRules.length; x++) {
				if(CSSRules[x].selectorText == `div.${inputClass}::before`) {
					CSSRules[x].style.cssText = `visibility: hidden; font-size: 12px; color: gray; content: attr(before);
					display: inline-block; position: relative; width: 100%; height: 100%;`;
						event.target.setAttribute('placeholder', 'Место проживания');
//					event.target.value = '';
				};
			};
		};
	};
};

window.onload = function (event) {
	let inputClass = 'cityinfo'; 
	let input = document.querySelector(`input.${inputClass}`);
	div = document.querySelector(`div.${inputClass}`);
	CSSStyle = document.styleSheets


	if(input.value.length > 0) { 
		for(let i=0; i<CSSStyle.length; i++) {
			let CSSRules = CSSStyle[i].cssRules;
			for(let x=0; x<CSSRules.length; x++) {
				if(CSSRules[x].selectorText == `div.${inputClass}::before`) {
					CSSRules[x].style.cssText = `visibility: visible; font-size: 12px; color: gray; content: attr(before);
					display: inline-block; position: relative; width: 100%; height: 100%;`;
				};
			};
		};
	};
	
};


function filldonw (event) {
	event=event?event:window.event;
	let xfill = event.target.getAttribute('x-fill');
	let fills = document.querySelectorAll(`label[x-fill]`);
	for(let i=0; i<fills.length; i++) {
		if(xfill >= i) {
			fills[i].style.visibility = 'hidden';
		} else {
			fills[i].style.visibility = 'visible';
		}
	}
}


function select(event) {
	event=event?event:window.event;
	let inputselect, labelselect, ulselect, option, xstat, ltext;

	labelselect = document.querySelector('label.select');
	inputselect = document.querySelector('input.select');
	xstat = labelselect.getAttribute('stat');
	ulselect = document.querySelector('ul.select');

	xclass = event.target.getAttribute('class');

	if(xclass == 'select') {
		if(xstat == 'false') {
			labelselect.style.backgroundColor = 'white';
			labelselect.setAttribute('stat', 'true');
			ulselect.style.display = 'block';
		} else {
			labelselect.style.backgroundColor = '#dadada';
			labelselect.setAttribute('stat', 'false');
			ulselect.style.display = 'none';
		};
	} else if(xclass == 'option') {
		labelselect.style.backgroundColor = '#dadada';
		labelselect.setAttribute('stat', 'false');
		ulselect.style.display = 'none';
		labelselect.textContent = event.target.textContent;
		inputselect.value = event.target.textContent;
	};
};
