// LoadNAVBAR 함수 선언
function LoadNAVBAR() {
    const allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        var el = allElements[i];
        var navpath = el.getAttribute("nav-include-path");
        if (navpath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.innerHTML = this.responseText;
                    el.removeAttribute("nav-include-path");
                    LoadNAVBAR();
                }
            }
            xhttp.open("GET", navpath, true);
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



// 페이지 로드 시 LoadNAVBAR와 LoadFOOTER 함수를 호출하여 네비게이션 바와 footer를 로드
window.onload = function () {
    LoadNAVBAR();
    LoadFOOTER();
};
