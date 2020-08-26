const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const db = new sqlite3.Database('./database.sqlite'); 
// Open the database.sqlite file as a sqlite3 database object and save it to a variable.

db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS Artist`);
    db.run('CREATE TABLE IF NOT EXISTS `Artist` ( ' +
    '`id` INTEGER NOT NULL, ' +
    '`name` TEXT NOT NULL, ' +
    '`date_of_birth` TEXT NOT NULL, ' +
    '`biography` TEXT NOT NULL, ' +
    '`is_currently_employed` INTEGER NOT NULL DEFAULT 1, ' +
    'PRIMARY KEY(`id`) )')
});
db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS Series`);
    db.run(`CREATE TABLE IF NOT EXISTS Series (
        id INTEGER NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL
    )`);
});
db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS Issues`);
    db.run(`CREATE TABLE IF NOT EXISTS Issues (
        id INTEGER NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        issue_number INTEGER NOT NULL,
        publication_date TEXT NOT NULL,
        artist_id INTEGER NOT NULL,
        series_id INTEGER NOT NULL,
        FOREIGN KEY(artist_id) REFERENCES Artist(id),
        FOREIGN KEY(series_id) REFERENCES Series(id) 
    )`)
})