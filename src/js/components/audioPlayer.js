const audioPlayer = {
  player: null,
  tutorialSpeech: false,
  init() {
    if (!this.player) {
      this.player = document.createElement('audio');
      document.body.append(this.player);
    }
  },
  playTutorial(stage) {
    if (this.tutorialSpeech) {
      const path = `../../assets/sounds/tutorial/${stage}.mp3`;
      this.play(path);
    }
  },

  play(path) {
    let canPlay = true;
    if (this.player.paused) {
      this.player.src = path;
      this.player.play();
    } else {
      this.player.onended = () => {
        if (canPlay) {
          this.player.src = path;
          this.player.play();
        }
        canPlay = false;
      };
    }
  },

};
export default audioPlayer;
