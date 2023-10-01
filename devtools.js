
alif = "https://dce-ak-livewwdazn.akamaized.net/dashdrm/dazn-linear-037/stream.mpd";
elif = "82f8e2a17dac44c0a18f660479349c59@1b144f73e6fefe91cd05f850e2b589d0";
ilif = "";
Y90 = Z90.replace(/&fil/g, "?fil");
aua = 0;
ei = 0;
if (Y90.indexOf("fila=") > -1) {
  aua = 1;
  elif = "";
  alif = Y90.split("fila=")[1];
  alif = alif.split("`")[0];
}
if (Y90.indexOf("file=") > -1) {
  ei = 1;
  elif = Y90.split("file=")[1];
  elif = elif.split("`")[0];
}
elif = elif.replace(/@/g, "':'").replace(/~/g, "','");
if (Y90.indexOf("fili=") > -1) {
  ei = 2;
  ilif = Y90.split("fili=")[1];
  ilif = ilif.split("`")[0];
}
ilif = ilif.replace(/@/g, "':'").replace(/~/g, "','");
sss = "<style>*{margin:0;padding:0;outline:0}#containers{position:absolute;width:100%!important;height:100%!important}*:focus{outline:0}</style><section id='wrap'><div class='youtube-theme video-fill' style='object-fit:fill cover;'><video autoplay='true' autostart='true' data-shaka-player='' poster='https://cdn.jsdelivr.net/gh/soponta/sopontatv@main/bg_LCD.jpg' id='youtube-theme' style='width: 100vw; height: calc(var(--vh, 1vh) * 100);'></video></div></section><div class='shaka-range-container shaka-volume-bar-container' style='background:linear-gradient(to right,#ffffff 100%,rgba(255,255,255,0.54) 100%,rgba(255,255,255,0.54) 100%)'></div><div class='shaka-range-container shaka-seek-bar-container' style='background:rgba(255,255,255,0.3)'><script>const manifestUri='" + 
alif + "';async function init(){const video=document.getElementById('youtube-theme');const ui=video['ui'];const controls=ui.getControls();const player=controls.getPlayer();const config={'controlPanelElements':['play_pause','time_and_duration','mute','volume','spacer','captions','language','quality','fullscreen']};";
ttt = "player.configure({drm:{clearKeys:{'" + elif + "'}}})";
if (ei > 1) {
  ttt = ttt + (";player.configure({drm:{servers:{'" + ilif + "'}}})");
}
uuu = ";ui.configure(config);window.player=player;window.ui=ui;player.addEventListener('error',onPlayerErrorEvent);controls.addEventListener('error',onUIErrorEvent);try{await player.load(manifestUri);console.log('The video has now been loaded!')}catch(error){onPlayerError(error)}};function onPlayerErrorEvent(errorEvent){onPlayerError(event.detail)}function onPlayerError(error){console.error('Error code',error.code,'object',error)}function onUIErrorEvent(errorEvent){onPlayerError(event.detail)}function initFailed(errorEvent){console.error('Unable to load the UI library!')}document.addEventListener('shaka-ui-loaded',init);document.addEventListener('shaka-ui-load-failed',initFailed)\x3c/script></div>";
document.write(sss + ttt + uuu);

function periksaDomain() {
  var strDate = window.location.href;
  var strSeparatorArray = ["sopontatv.blogspot.com", "shared-tv.blogspot.com", "sharedtvi.blogspot.com", "sopontatv.tiiny.site", "sharedtv.tiiny.site"];
  var H = false;
  var intElementNr = 0;
  for (; intElementNr < strSeparatorArray.length; intElementNr++) {
    if (strDate.indexOf(strSeparatorArray[intElementNr]) !== -1) {
      H = true;
      break;
    }
  }
  if (!H) {
    window.location.href = "https://linktr.ee/somedia7";
  }
}
if (window == window.top) {
  document.location = "https://sopontatv.blogspot.com";
}
;
