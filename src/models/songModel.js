class Song {
    constructor(title, single, explicit, album_title, release_date, year, track_number, disk_number, isrc, label, duration, genre, language_code, socials, sections) {
        this.title = title;
        this.single = single;
        this.explicit = explicit;
        this.album_title = album_title;
        this.release_date = release_date;
        this.year = year;
        this.track_number = track_number;
        this.disk_number = disk_number;
        this.isrc = isrc;
        this.label = label;
        this.duration = duration;
        this.genre = genre;
        this.language_code = language_code;
        this.socials = socials;
        this.sections = sections;
    }

    toJSON() {
        return {
            title: this.title,
            single: this.single,
            explicit: this.explicit,
            album_title: this.album_title,
            release_date: this.release_date,
            year: this.year,
            track_number: this.track_number,
            disk_number: this.disk_number,
            isrc: this.isrc,
            label: this.label,
            duration: this.duration,
            genre: this.genre,
            language_code: this.language_code,
            socials: this.socials,
            sections: this.sections,
        };
    }

    static async getAll(db) {
        const songsSnapshot = await db.collection('songs').get();
        return songsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    static async getById(db, id) {
        const songDoc = await db.collection('songs').doc(id).get();
        if (!songDoc.exists) {
            throw new Error('Song not found!');
        }
        return { id: songDoc.id, ...songDoc.data() };
    }
}

module.exports = Song;
