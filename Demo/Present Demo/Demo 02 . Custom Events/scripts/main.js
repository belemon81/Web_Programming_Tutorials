const presentContainer = document.querySelector('#presents');
const titleContainer = document.querySelector('#title');
const app = new App(presentContainer, titleContainer);

// class Playlist {
//     constructor(name, songs) {
//         this.name = name;
//         this.songs = songs;

//         // Bind event listeners.
//         this._addSong = this._addSong.bind(this);
//     }

//     _addSong(name) {
//         this.songs.oush(name)
//     }
// }

const Playlist = {
    id : 'Happy Life',
    song : [],
    addSong : function(songName) {
        this.song.push(songName)
    }
}
Playlist.addSong('Hello me');
console.log(Playlist.song);