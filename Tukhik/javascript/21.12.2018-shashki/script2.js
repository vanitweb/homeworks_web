'use strict';

let tbl = document.getElementsByTagName("table")[0];
let cellIndexClick1, rowIndexClick1, cellIndexClick2, rowIndexClick2;
let classNameLeftClick, classNameRightClick, upCellRight, upCellLeft, nextUpCellLeft;
var nextUpCellLeft2, nextUpCellRight2, nextUpCellRight, classUpCellLeft;
let upCellRight2, upCellLeft2, cellNumLeftClick, cellNumRightClick;
let className, nextUpCellRightI, nextUpCellLeftI, qanakElem, k;
let counter = 1;
let counterRightClick = 1;
let black = 12,
	white = 12;
let colorWB;


const haxtanak = function () {
	++counterRightClick;
	++counter;
	if (counterRightClick % 2 != 0) {
		white = white - 1;
		if (white == 0) {
			alert("Հաղթեց կարմիր քարերով  խաղացողը");
		}
	} else {
		black = black - 1;
		if (black == 0) {
			alert("Հաղթեց սպիտակ քարերով  խաղացողը");
		}
	}
}

const qayl = function () {
	if (classNameRightClick.className === '') {
		classNameLeftClick.className = '';
		color();
		classNameRightClick.className = colorWB;
		tama();
		++counterRightClick;
		++counter;
	} else {
		alert("Սխալ քայլ 0");
	}
}

const color = function () {
	if (counterRightClick % 2 != 0) {
		colorWB = 'circleWhite';
	} else colorWB = 'circleBlack';
}
const colorTanel = function () {
	if (counterRightClick % 2 != 0) {
		colorTanelWB = 'circle';
	} else colorTanelWB = 'circleWhite';
}

const tanel = function () {
	classNameLeftClick.className = '';
	color();
	classNameRightClick.className = colorWB;
	tama();
	haxtanak();
}

const tama = function () {
	if (counterRightClick % 2 === 0) {
		if (rowIndexClick2 == 0) {
			classNameRightClick.className = 'circleBlackTama';
		}
	} else {
		if (rowIndexClick2 == 7) {
			classNameRightClick.className = 'circleWhiteTama';
		}
	}
}

const whiteClick = function () {
	upCellLeft = cellIndexClick1 - 1 + (rowIndexClick1 + 1) * 8;
	upCellRight = upCellLeft + 2;
	if (cellNumRightClick === upCellLeft || cellNumRightClick === upCellRight) {
		qayl();
	} else {
		nextUpCellLeft = cellIndexClick1 - 2 + (rowIndexClick1 + 2) * 8;
		if (cellNumRightClick === nextUpCellLeft) {
			if (classUpCellLeft.className === 'circleBlack' ||
				classUpCellLeft.className === 'circleBlackTama') {
				classUpCellLeft.className = '';
				tanel();
			}
		} else {
			nextUpCellRight = nextUpCellLeft + 4;
			if (cellNumRightClick === nextUpCellRight) {
				if (document.getElementsByTagName("div")[upCellRight].className === 'circleBlack' ||
					document.getElementsByTagName("div")[upCellRight].className === 'circleBlackTama') {
					document.getElementsByTagName("div")[upCellRight].className = '';
					tanel();
				}
			} else alert('Սխալ քայլ1');
		}
	}
}

const blackClick = function () {
	upCellLeft2 = cellIndexClick1 - 1 + (rowIndexClick1 - 1) * 8;
	upCellRight2 = upCellLeft2 + 2;
	if (cellNumRightClick === upCellLeft2 || cellNumRightClick === upCellRight2) {
		qayl();
	} else {
		nextUpCellLeft2 = cellIndexClick1 - 2 + (rowIndexClick1 - 2) * 8;
		if (cellNumRightClick === nextUpCellLeft2) {
			if (document.getElementsByTagName("div")[upCellLeft2].className === 'circleWhite' ||
				classUpCellLeft.className === 'circleWhiteTama') {
				document.getElementsByTagName("div")[upCellLeft2].className = '';
				tanel();
			}
		} else {
			nextUpCellRight2 = nextUpCellLeft2 + 4;
			if (cellNumRightClick === nextUpCellRight2) {
				if (document.getElementsByTagName("div")[upCellRight2].className === 'circleWhite' ||
					classUpCellLeft.className === 'circleWhiteTama') {
					document.getElementsByTagName("div")[upCellRight2].className = '';
					tanel();
				}
			}
		}
	}
}

const funcRef = function (e) {
	let cell = e.target;
	cellIndexClick2 = parseInt(cell.cellIndex);
	rowIndexClick2 = parseInt(cell.parentNode.rowIndex);
	cellNumRightClick = cellIndexClick2 + rowIndexClick2 * 8;
	classUpCellLeft = document.getElementsByTagName("div")[upCellLeft];
	classNameRightClick = document.getElementsByTagName("div")[cellNumRightClick];
	if (counterRightClick % 2 != 0) {
		whiteClick();
	} else {
		if (classNameLeftClick.className == "circleBlack") {
			blackClick();
		} else {
			if (classNameLeftClick.className == "circleBlackTama") {
				blackTama();
			}
		}
	}
}


window.oncontextmenu = funcRef;

function alertRowCellClick1(e) {
	if (!e.target.textContent) {
		let cell = e.target;
		cellIndexClick1 = parseInt(cell.cellIndex);
		rowIndexClick1 = parseInt(cell.parentNode.rowIndex);
		cellNumLeftClick = cellIndexClick1 + rowIndexClick1 * 8;
		classNameLeftClick = document.getElementsByTagName("div")[cellNumLeftClick];
		if (counter % 2 != 0) {
			if (classNameLeftClick.className === "circleBlack" || classNameLeftClick.className === '' || classNameLeftClick.className === "circleBlackTama") {
				alert('սպիտակ քարերով խաղացողի հերթն է');
			}
			if (classNameLeftClick.className === "circleWhite") {
				window.oncontextmenu = funcRef;
			}
			if (classNameLeftClick.className === "circleWhiteTama") {
				window.oncontextmenu = funcRef;
			}
		} else {
			if (classNameLeftClick.className === "circleWhite" || classNameLeftClick.className === '' || classNameLeftClick.className === "circleWhiteTama") {
				alert('կարմիր քարերով խաղացողի հերթն է');
			}
			if (classNameLeftClick.className === "circleBlack") {
				window.oncontextmenu = funcRef;
			}
			if (classNameLeftClick.className === "circleBlackTama") {
				window.oncontextmenu = funcRef;
			}
		}
	} else alert('Սխալ դաշտ');
}
tbl.addEventListener("click", alertRowCellClick1);













const blackTama = function () {
	if (rowIndexClick1 - rowIndexClick2 == 0) {
		alert('nuyn texum mi sexmeq');
	} else {
		if (Math.abs(rowIndexClick1 - rowIndexClick2) === 1) {
			if (rowIndexClick1 < rowIndexClick2) {
				upCellLeft = cellIndexClick1 - 1 + (rowIndexClick1 + 1) * 8;
				upCellRight = upCellLeft + 2;

				if (cellNumRightClick === upCellLeft || cellNumRightClick === upCellRight) {
					if (document.getElementsByTagName("div")[cellNumRightClick].className === '') {
						classNameLeftClick.className = '';
						document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlackTama';
						++counterRightClick;
						++counter;
					} else {
						alert("Սխալ քայլ 0");
					}
				} else {
					alert("Սխալ քայլ 0000");
				}
			} else {
				upCellLeft = cellIndexClick1 - 1 + (rowIndexClick1 - 1) * 8;
				upCellRight = upCellLeft + 2;
				if (cellNumRightClick === upCellLeft || cellNumRightClick === upCellRight) {
					if (document.getElementsByTagName("div")[cellNumRightClick].className === '') {
						classNameLeftClick.className = '';
						document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlackTama';
						++counterRightClick;
						++counter;
					} else {
						alert("Սխալ քայլ 0");
					}
				} else {
					alert("Սխալ քայլ 111");
				}
			}
		} else {
			if (Math.abs(rowIndexClick1 - rowIndexClick2) > 1) {
				if (document.getElementsByTagName("div")[cellNumRightClick].className != '') {
					alert("sxal e, datark element chi");
				} else {
					if (rowIndexClick1 < rowIndexClick2) {
						qanakElem = 0;
						for (let i = 1; i <= rowIndexClick2; i++) {
							nextUpCellRightI = cellIndexClick1 + i + (rowIndexClick1 + i) * 8;
							nextUpCellLeftI = nextUpCellRightI - 2;
							if (document.getElementsByTagName("div")[nextUpCellRightI].className === 'circleBlack' ||
								document.getElementsByTagName("div")[nextUpCellRightI].className === 'circleBlackTama') {
								alert("sxal e sev element ka");
								break;
							} else {
								if (document.getElementsByTagName("div")[nextUpCellRightI].className === 'circleWhite' ||
									document.getElementsByTagName("div")[nextUpCellRightI].className === 'circleWhiteTama') {
									k = nextUpCellRightI;
									++qanakElem;
									if (qanakElem > 1) {
										alert('sxal qayl 2 hat spitak qar');
									}
								}
							}
						}
						if (qanakElem <= 1) {
							if (qanakElem == 0) {
								classNameLeftClick.className = '';
								document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlackTama';
								++counterRightClick;
								++counter;
							} else {
								document.getElementsByTagName("div")[k].className = '';
								classNameLeftClick.className = '';
								document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlackTama';
								++counterRightClick;
								++counter;
								white = white - 1;
								console.log(white);
								if (white == 0) {
									alert("Հաղթեց կարմիր քարերով  խաղացողը");
								}


							}

						}


					}

				}
			}
		}
	}
}