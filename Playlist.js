// Composite Pattern
export class Playlist {
    constructor(name) {
        this.name = name;
        this.playlistItems = [];
    }

    add(item) {
        this.playlistItems.push(item);
    }

    remove(item) {
        const index = this.playlistItems.indexOf(item);
        this.playlistItems.splice(index, 1);
    }

    play() {
        console.log(`Playing playlist "${this.name}"----------+`);
        for (const item of this.playlistItems) {
            item.play();
        }
    }
}