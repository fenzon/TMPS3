import { MediaAdapter } from "./MediaManagerAdapter.js";
import { Playlist } from "./Playlist.js";
export class MusicPlayer {//facade pattern
    constructor() {
        this.mediaManager = new MediaManager();
    }

    createPlaylist(name) {
        return new Playlist(name);
    }

    getFavoriteSongs() {
        let playlist = new Playlist("Favorites");
        let songs = this.mediaManager.getFavoriteSongs();
        for (let song of songs) {
            let adapter = new MediaAdapter(song);
            let songItem = new SongItem(adapter);
            playlist.add(songItem);
        }
        return playlist;
    }

    getArtistPlaylist(artist) {
        let playlist = new Playlist(`${artist} Playlist`);
        let songs = this.mediaManager.getSongsByArtist(artist);
        for (let song of songs) {
            let adapter = new MediaAdapter(song);
            let songItem = new SongItem(adapter);
            playlist.add(songItem);
        }
        return playlist;
    }
}


class MediaManager {
    constructor() {
        this.songs = [];
    }

    getAllSongs() {
        return this.songs;
    }

    getFavoriteSongs() {
        return this.songs.filter(song => song.isFavorite);
    }

    getSongsByArtist(artist) {
        return this.songs.filter(song => song.artist === artist);
    }

    addSong(song) {
        this.songs.push(song);
    }

}