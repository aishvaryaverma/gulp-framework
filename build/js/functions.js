function getRootUrl() {
	return window.location.origin ? window.location.origin + "/" : window.location.protocol + "/" + window.location.host + "/"
}

function preventDefault(a) {
	a = a || window.event, a.preventDefault && a.preventDefault(), a.returnValue = !1
}

function preventDefaultForScrollKeys(a) {
	return keys[a.keyCode] ? (preventDefault(a), !1) : void 0
}

function disableScroll() {
	window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, !1), window.onwheel = preventDefault, window.onmousewheel = document.onmousewheel = preventDefault, window.ontouchmove = preventDefault, document.onkeydown = preventDefaultForScrollKeys
}

function enableScroll() {
	window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
}

function getScrollBarWidth() {
	var c = document.createElement("p");
	c.style.width = "100%";
	c.style.height = "200px";
	var d = document.createElement("div");
	d.style.position = "absolute";
	d.style.top = "0px";
	d.style.left = "0px";
	d.style.visibility = "hidden";
	d.style.width = "200px";
	d.style.height = "150px";
	d.style.overflow = "hidden";
	d.appendChild(c);
	document.body.appendChild(d);
	var b = c.offsetWidth;
	d.style.overflow = "scroll";
	var a = c.offsetWidth;
	if (b == a) {
		a = d.clientWidth
	}
	document.body.removeChild(d);
	return (b - a)
}
