export class MediaAdapter {//adapter pattern
    constructor(song) {
        this.song = song;
    }

    getTitle() {
        return this.song.title;
    }
    getDuration() {
        return this.song.duration;
    }
    getArtist() {
        return this.song.artist;
    }


}