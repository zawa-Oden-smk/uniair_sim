//メインテーブルエリアのid設定
var Tableid = 'songtable' 

//画面読み込み後の動作
 window.onload=function(){
 tSortInit();
 InsertTableRows(Object.keys(song))
}

var no_arr = new Array()

function InsertTableRows(no_arr){
	var Tableobj = document.getElementById(Tableid)
	for(let no of no_arr){ 
		no = parseInt(no)
		let eRow = Tableobj.insertRow(-1)
		let color = song[no].color
		let songs = song[no].songs
		let live = song[no].live
		let Lv = song[no].Lv
		let time = song[no].time
		let notes = song[no].notes
		let dens = song[no].dens
		let office = song[no].office
		let bonus = song[no].bonus
		let psylli = song[no].psylli
        let Ftime = song[no].Ftime
        let Fratio1 = song[no].Fratio1
		let Fratio2 = song[no].Fratio2
        let Fnotes = song[no].Fnotes
        let Fdens = song[no].Fdens
        let Fcombo = song[no].Fcombo
		let Fkitai = song[no].Fkitai
        let FStime = song[no].FStime
        let FFtime = song[no].FFtime
        let FSnotes = song[no].FSnotes
        let FFnotes = song[no].FFnotes
        let FScombo = song[no].FScombo
        let FFcombo = song[no].FFcombo
        eRow.className = color;
		eRow.insertCell(-1).innerHTML = no+1;
		eRow.insertCell(-1).innerHTML = color;
		eRow.insertCell(-1).innerHTML = songs;
	    eRow.insertCell(-1).innerHTML = live;
		eRow.insertCell(-1).innerHTML = Lv;
		eRow.insertCell(-1).innerHTML = time;
		eRow.insertCell(-1).innerHTML = notes;
		eRow.insertCell(-1).innerHTML = dens;
		eRow.insertCell(-1).innerHTML = office;
        eRow.insertCell(-1).innerHTML = bonus;
		eRow.insertCell(-1).innerHTML = psylli;
		eRow.insertCell(-1).innerHTML = Ftime;
		eRow.insertCell(-1).innerHTML = Fratio1;
        eRow.insertCell(-1).innerHTML = Fratio2;
        eRow.insertCell(-1).innerHTML = Fnotes;
        eRow.insertCell(-1).innerHTML = Fdens;
        eRow.insertCell(-1).innerHTML = Fcombo;
		eRow.insertCell(-1).innerHTML = Fkitai;
        eRow.insertCell(-1).innerHTML = FStime;
        eRow.insertCell(-1).innerHTML = FFtime;
        eRow.insertCell(-1).innerHTML = FSnotes;
        eRow.insertCell(-1).innerHTML = FFnotes;
        eRow.insertCell(-1).innerHTML = FScombo;
        eRow.insertCell(-1).innerHTML = FFcombo;
	}
}

//ソート動作設定
var gSortBtnRow = 0;
//テーブル初期設定
function tSortInit(){	
	var wTABLE  = document.getElementById(Tableid);
	var wTR     = wTABLE.rows;
	var wAddBtn = ''; 
	for(var i=0; i < wTR.length; i++){ 
		var wTD = wTABLE.rows[i].cells;
		for(var j=0; j < wTD.length; j++){ 
			if(wTD[j].getAttribute('cmanSortBtn') !== null){ 
				wAddBtn  = '<div class="tsImgArea">';
				wAddBtn += '<svg class="tsImg" id="ts_A_'+j+'" onclick="tSort(this)"><path d="M4 0 L0 6 L8 6 Z"></path></svg>';
				wAddBtn += '<svg class="tsImg" id="ts_D_'+j+'" onclick="tSort(this)"><path d="M0 0 L8 0 L4 7 Z"></path></svg>';
				wAddBtn += '</div>'; 
				wTD[j].innerHTML = wTD[j].innerHTML+wAddBtn;
			}
		} 
		if(wAddBtn != ''){ gSortBtnRow = i; break; }
	}
}
//ソート実行
function tSort(argObj){		
	var wSortKey = argObj.id.split('_'); 
	var wTABLE = document.getElementById(Tableid);
	var wTR = wTABLE.rows;
	var wItem = [];
	var wItemSort = [];
	var wMoveRow = [];
	var wNotNum = 0;
	var wStartRow = gSortBtnRow + 1;
	for(var i = wStartRow; i < wTR.length; i++){
	  var j = i - wStartRow;
	  wItem[j] = wTR[i].cells[wSortKey[2]].innerText.toString();
	  if(!wItem[j].match(/^[-]?[0-9,\.]+$/)) wNotNum = 1;    
	}
	  wItemSort = wItem.slice(0, wItem.length);
	  if(wSortKey[1] == 'A'){
		(wNotNum == 0)? wItemSort.sort(sortNumA) : wItemSort.sort(sortStrA)
	  }
	  else{
		(wNotNum == 0)? wItemSort.sort(sortNumD) : wItemSort.sort(sortStrD);
	  } 
	for(var i = 0; i < wItemSort.length; i++){
		for(var j = 0; j < wItem.length; j++){
		  if(wItemSort[i] == wItem[j]){
			wMoveRow[i] = j + wStartRow;
			wItem.splice(j, 1);
			break;
		  }
		}
	}
	for(var i = 0; i < wMoveRow.length; i++){
		var wMoveTr = wTABLE.rows[wMoveRow[i]];
		var wLastTr = wTABLE.rows[wTABLE.rows.length - 1];
		wLastTr.parentNode.insertBefore(wMoveTr.cloneNode(true), wLastTr.nextSibling);
		wTABLE.deleteRow(wMoveRow[i]); 
	}
	var elmImg = document.getElementsByClassName('tsImg');
	for (var i = 0; i < elmImg.length; i++) { 
		elmImg[i].style.backgroundColor = (elmImg[i].id == argObj.id)? '#ffc400' : ''
	} 
}

//数字ソート（昇順）
function sortNumA(a, b) {
	a = parseInt(a.replace(/,/g, '')); b = parseInt(b.replace(/,/g, ''));
	return a - b;
}
//数字ソート（降順）
function sortNumD(a, b) {
	a = parseInt(a.replace(/,/g, '')); b = parseInt(b.replace(/,/g, ''));
	return b - a;
}
//文字ソート（昇順）
function sortStrA(a, b){
	a = a.toLowerCase(); b = b.toLowerCase();
	return (a < b)? -1 : (a > b)? 1 : 0
}
//文字ソート（降順）
function sortStrD(a, b){
	a = a.toLowerCase(); b = b.toLowerCase();
	return (b < a)? -1 : (b > a)? 1 : 0
}

