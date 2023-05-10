// Decorator Pattern
//adaugarea unor modificari/suplumente la un obiect fara modificarii clasei de baza
export class Account {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.playlists = [];
    }

    addPlaylist(playlist) {
        this.playlists.push(playlist);
    }

    removePlaylist(playlist) {
        const index = this.playlists.indexOf(playlist);
        this.playlists.splice(index, 1);
    }

    play(playlist) {
        console.log(`Playing playlist "${playlist.name}" for account "${this.username}"------------+`);
        playlist.play();
    }
}