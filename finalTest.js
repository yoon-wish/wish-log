/* prologue화면 - 제출 클릭 시 */

function getName(){
	const name = document.getElementById('name').value;
	document.getElementById("result").innerText = name;
}

function moveHome(){
	window.location = 'home.html';
}


/* yupdduck화면 - 제출 클릭 시 */
function subMenu(){
	var menu = document.getElementById('menu')

	alert(menu.value + '(을)를 입력하셨습니다. 꼭 먹어볼게요! 홈으로 이동합니다');
	window.location = 'home.html';
}


/* oliveyoung화면 - 버튼마다 사진, 텍스트, 링크 다르게*/
function chn(root, page, mtext){
	document.getElementById("mainimg").src=root;
	document.getElementById("mainpage").href=page;
	document.getElementById("maintext").innerHTML=mtext;
}

/* dog화면 - 라디오버튼 클릭시 해당 이미지 출력 */
function dogImage()
{
    var found = null;
    var dog = document.getElementsByName("dogs"); // dog 이름을 가진 모든 태그를 찾는 코드
    var img = document.getElementById("dogImage"); // 찾고자하는 id 값을 찾는 코드 
 
    for(var i=0; i<dog.length; i++) 
    {
        if(dog[i].checked == true) 
        {
            found = dog[i];
            break; 
        }
    }
    img.src = found.value;
}