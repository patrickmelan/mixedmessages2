const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const data = contents.split(/\r?\n/);

    return data;
}
//data is in format data = ['You may have to fight a battle more than once to win it. ~ Margaret Thatcher', ]
const data = syncReadFile('./doc.txt')

//sorts data in fromat dataSortedByQuoteAndAuthor = [ {quote: 'You may have to fight a battle...', author: 'Margaret Thatcher'}]
const dataSortedByQuoteAndAuthor = []
for (let i=0; i<data.length; i++){
    console.log
    const quote_author = data[i].split('~');
    const quote = quote_author[0];
    const author = quote_author[1];
    dataSortedByQuoteAndAuthor.push({"quote":quote, "author":author})
}
console.log(dataSortedByQuoteAndAuthor);

//export format to use data, dataSortedByQuoteAndAuthor to all files but only button.js will require/use it
module.exports = {data, dataSortedByQuoteAndAuthor}