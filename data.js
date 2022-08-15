const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const data = contents.split(/\r?\n/);
    console.log(data);

    return data;
}
//data is in format data = ['quote. ~Author Name', 'quote. ~ Author Name', ....]
const data = syncReadFile('./doc.txt')

module.exports = {data}