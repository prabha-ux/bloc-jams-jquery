class Helper {
  constructor() {
  }

  playPauseAndUpdate(song) {
    player.playPause(song);
    //sleep (1000);
    const duration = player.getDuration();
    let prettyDuration = player.prettyTime(duration);
    $('#time-control .total-time').text( prettyDuration );
  }
}

const helper = new Helper();
