function openbox(box){
    display = document.getElementById(box).style.display;
    if(display=='none'){
          document.getElementById(box).style.display='flex';
    }else{
          document.getElementById(box).style.display='none';
    }
}

function DarkTheme(elem){
    back = document.getElementById(elem).style.background;
    if(back == 'black'){
        setCookie("Footer","light");
        FooterChangeLight(elem);
    }
    else{
        setCookie("Footer","dark");
        FooterChangeDark(elem);
    }
}

function FooterChangeDark(elem){
    document.getElementById(elem).style.color = 'white';
    document.getElementById(elem).style.background = 'black';
}

function FooterChangeLight(elem){
    document.getElementById(elem).style.color = 'black';
    document.getElementById(elem).style.background = 'white';
}

function reg(){
login = document.registr.login.value;
pas=document.registr.pas.value;
email=document.registr.email.value;
var mailing_console = false;

console.log("Данные из текстовых полей: "+login+" "+pas+" " + email);
if(document.registr.mailing.checked){mailing_console = document.registr.mailing.value;}
console.log("Данные из переключателей: "+mailing_console);
var mailing = document.registr.mailing.checked;

for(i=0; i<document.registr.gender.length; i++){
    if(document.registr.gender[i].checked)
    {
        gender = document.registr.gender[i].value;
    }
}

console.log("Данные из переключателей:" + gender);
var city_en;
var city_ru;
var index;
index = document.registr.city.selectedIndex;
city_en = document.registr.city[index].value;
city_ru = document.registr.city[index].text;
console.log("Данные выпадающего списка: " + index +" " + city_en + " " + city_ru);



if(gender == "w") text = "<h3>Уважаемая ";
else text = "<h3>Уважаемый ";
text = text+login+", проверьте введённые данные:</h3>"
text= text + "Пароль: "+ pas + "<br>";
if(mailing)
    text = text + "Информация будет отправлена на адрес: " + email + "<br>";
text = text + "Будем рады видеть вас в нашем офисе в " + city_ru;
document.getElementById("render_registr").innerHTML = text;
}

var birthClick = false;

// document.getElementById("render_birthday").onclick =  function(){
//     if(birthClick) 
//     {
//         document.getElementById("form_birthday").innerHTML = "";
//         birthClick = false;
//     }
//     else
//     {
//         var months = ["Январь", "Февраль", "Март", "Апрель"];

//         form_birthday = "<form><select name = 'day'>";

//         for(i = 1; i< 31; i++)
//             form_birthday = form_birthday + "<option value = " + i + ">"+ i + "</option>";
//         form_birthday = form_birthday + "</select><br><select name = 'month'>";
//         for(i = 0; i< months.length; i++)
//             form_birthday = form_birthday + "<option value = " + i + ">"+ months[i] + "</option>";
//         form_birthday = form_birthday + "</select>";
//         document.getElementById("form_birthday").innerHTML = form_birthday;
        
//         birthClick = true;
//     }
// }
var n;
var start;
function imag()
{
    var f = 0;
     n = 1;
     start = false;
    var i;
    document.getElementById("img__gallery").src = "Images/Gallery/"+(n)+".png";
}

let timerID;
function mult(){
    if(start === true){
        clearInterval(timerID);
        start = false;
    }
    else {
        start = true;
        timerID = setInterval(change, 1000);
    }
}

function change(){
    if(n==6) {n = 1;}
    document.getElementById("img__gallery").src="Images/Gallery/"+n+".png";
    n++;
    size = document.getElementById("size");
    document.getElementById("img__gallery").style.width = size.value+"px";
}

function left(){
    if(n==0) {n = 6;}
    document.getElementById("img__gallery").src="Images/Gallery/"+n+".png";
    n--;
    size = document.getElementById("size");
    document.getElementById("img__gallery").style.width = size.value+"px";
}

function right(){
    if(n==6) {n = 1;}
    document.getElementById("img__gallery").src="Images/Gallery/"+n+".png";
    n++;
    size = document.getElementById("size");
    document.getElementById("img__gallery").style.width = size.value+"px";
}

function resize(){
    size = document.getElementById("size");
    document.getElementById("img__gallery").style.width = size.value+"px";
    
}

