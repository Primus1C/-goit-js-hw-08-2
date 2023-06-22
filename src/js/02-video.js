import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const SAVED_CURRENT_TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(videoPlayerTimeUpdate, 1000));

function videoPlayerTimeUpdate(data) {


}

player.on(
  'timeupdate',
  throttle(function (data) {
    window.localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 250)
);