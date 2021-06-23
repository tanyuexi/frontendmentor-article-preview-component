var sharePopup = document.querySelectorAll(".share-active-desktop")[0];
var shareIcon = document.querySelectorAll(".share-icon")[0];

function positionSharePopup(){
  var rectShareIcon = shareIcon.getBoundingClientRect();
  var rectSharePopup = sharePopup.getBoundingClientRect();
  var widthShareIcon = rectShareIcon.right - rectShareIcon.left;
  var heightShareIcon = rectShareIcon.bottom - rectShareIcon.top;
  var widthSharePopup = rectSharePopup.right - rectSharePopup.left;
  var heightSharePopup = rectSharePopup.bottom - rectSharePopup.top;
  var newTop = rectShareIcon.top - heightSharePopup - 20;
  var newLeft = rectShareIcon.left - widthSharePopup/2 + widthShareIcon/2;
  sharePopup.style.top = newTop + "px";
  sharePopup.style.left = newLeft + "px";
}
function showSharePopup(){
  positionSharePopup();
  shareIcon.classList.toggle("share-icon-dark");
  sharePopup.classList.toggle("invisible");
}
shareIcon.addEventListener("click", showSharePopup);
