
//let toast =document.getElementById("liveToast") // TOST ID
//let input =document.getElementById("task") // İNPUT İD
//let buton= document.getElementById("liveToastBtn") // BUTON ID
//let liste=document.getElementById("list") // LİSTE ID


//li ye "X" ekleme

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//"X" ELEMENTİNİ AKTİFLESTİR.
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// CHECK(KONTROL ETMEK) Yİ ETKİNLEŞTİR
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// YENİ ELEMAN EKLEME "EKLE BUTONUNA BASINCA"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
    if (inputValue === '') {
     $(".error").toast("show"); //tostyapılacak
  } else {
     $(".success").toast("show"); 
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  

// mustafaya sor...
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


//LocalStorage yap // mustafaya sor...