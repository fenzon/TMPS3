import { Account } from "./Account.js";
import { MusicPlayer } from "./MusicPlayer.js";

const musicPlayer = new MusicPlayer();
let favorites = musicPlayer.getFavoriteSongs();//lista de favorite
favorites.play();

let artistPlaylist = musicPlayer.getArtistPlaylist("Eminescu");//Lista dupa artist
artistPlaylist.play();
let account = new Account("NicuBorta", "mamatata123");//cont de user creat
account.addPlaylist(favorites);
account.addPlaylist(artistPlaylist);

account.play(favorites);//facem play la lista de favorite
