
var time = ['9am', '10am', "11am", "12pm", '1pm', "2pm", '3pm', '4pm', '5pm'];
var militarytime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var selector = document.querySelector(".container");

var a = moment().toString();
document.getElementById("todaysdate").innerHTML = a;

for (var i = 0; i < time.length; i++){
  selector.innerHTML = selector.innerHTML + 
  `<div class="input-group">
  <span class="input-group-text">${time[i]}</span>
  <textarea id="${time[i]}" class="form-control" aria-label="With textarea"></textarea>
  <button data-id="${time[i]}" class="btn"><i class="fa fa-folder"></i></button>
  </div>`
};

var save = document.querySelectorAll("button");

for(var i = 0; i < time.length; i++) {
  var text = document.getElementById(time[i]);
  text.value = localStorage.getItem(time[i]);
  var currentHour = moment().hour();
  if (currentHour === militarytime[i]){
    text.classList.add('present');
  }
  else if (currentHour > militarytime[i]){
    text.classList.add('past');
  }
  else {
    text.classList.add('future');
  }

  save[i].addEventListener("click", function() {
    var dataid = this.getAttribute("data-id")
    var memo = document.getElementById(dataid);
    localStorage.setItem(dataid, memo.value);
  }) 
};

   

