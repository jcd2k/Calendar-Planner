var save = $('#save-btn');

save.addEventListener("click", function(event) {
  event.preventDefault();
   
  localStorage.setItem.("col-10", JSON.stringify(user).val());
});