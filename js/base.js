// LoadNAVBAR 함수 선언
function LoadNAVBAR() {
    const allElements = document.getElementsByTagName('*');  // 문서의 모든 요소를 가져옴
    for (var i = 0; i < allElements.length; i++) {
        var el = allElements[i];
        var navpath = el.getAttribute("nav-include-path"); //모든요소에 적용
        if (navpath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {   // this는 각각 readyState와 status에 대한 참조?를 한다
                    el.innerHTML = this.responseText;                   //XMLHttpRequest가 받은 데이터인것같습니다
                    el.removeAttribute("nav-include-path");   //nav-include-path라는 이름을 사용해서 호출
                    LoadNAVBAR();
                }
            }
            xhttp.open("GET", navpath, true);       // method가 true라면 함수를 실행
            xhttp.send();
            return;
        }
    }
}
function LoadFOOTER() {
    const allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        var el = allElements[i];
        var navpath = el.getAttribute("footer-include-path");
        if (navpath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.innerHTML = this.responseText;
                    el.removeAttribute("footer-include-path");
                    LoadFOOTER();
                }
            }
            xhttp.open("GET", footerpath, true);
            xhttp.send();
            return;
        }
    }
}

// sample code

// LoadNAVBAR와 LoadFOOTER 함수를 호출하여 네비게이션 바와 footer를 로드
window.onload = function () {
    LoadNAVBAR();
    LoadFOOTER();
};
