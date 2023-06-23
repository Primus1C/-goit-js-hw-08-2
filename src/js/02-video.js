import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(videoPlayerTimeUpdate, 1000));

populatePlayer();

function videoPlayerTimeUpdate(data) {
  window.localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(data.seconds);
}

function populatePlayer() {
const savedPos = localStorage.getItem(STORAGE_KEY);
  if (savedPos) {
    player.setCurrentTime(savedPos);
  }
}
