const sqlite3 = require('sqlite3');
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
})