const fs = require('fs');

function writeData(names, addresses) {
    const data = [];
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      const address = addresses[index];
      const str = `${name} - ${address}`;
      data.push(str);
      // fs.appendFileSync('./result.txt', str, 'utf8');
    }
    fs.writeFileSync(
      './result.txt',
      // JSON.stringify(data)
      // data.toString()
      data.join('\n'),
      'utf8',
    );
}

module.exports = writeData;
