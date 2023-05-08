const pass = "pass";
let password;
let num = 0;

function onbutton() {

    password = document.getElementById("pas").value;

    let a = document.getElementById("says");
    if(password == pass){
        a.innerHTML = "承認しました。画像を表示します...";
        a.style.color = 'blue';
        setTimeout('func();', 500);
        
    }else{
        a.innerHTML = "パスワードが違います";
        a.style.color = 'red';
    }
    document.getElementById("pas").value = "";
}
function func() {
    num++;
    console.log(num);
    if(num < 31){
        document.getElementById("imgss" + num).style.display = "inline";
        var a = document.documentElement;
        var y = a.scrollHeight - a.clientHeight;
        window.scroll(0, y);
        setTimeout('func();', 150);
    }else{
        return;
    }
}