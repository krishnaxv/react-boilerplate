const fs = require('fs');

// Get all arguments
const args = process.argv.slice(2);
// Target files
const targetFileList = ['./public/index.html', './README.md'];
// Default text to be replaced
const replaceText = 'React Boilerplate';

// Check if argument is specified
if (typeof args[0] === 'undefined') {
  throw Error('Please specify argument.');
}

targetFileList.forEach(targetFile => {
  fs.readFile(targetFile, 'utf8', (error, data) => {
    if (error) {
      throw error;
    }
    const result = data.replace(replaceText, args[0]);
    fs.writeFile(targetFile, result, 'utf8', error => {
      if (error) {
        throw error;
      }
    });
  });
});
