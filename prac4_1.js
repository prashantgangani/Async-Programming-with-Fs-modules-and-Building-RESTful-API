const fs = require('fs');
const path = require('path');


const categorizeFile = (fileName) => {
  const ext = path.extname(fileName).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'].includes(ext)) {
    return 'Images';
  } else if (['.txt', '.doc', '.docx', '.pdf', '.xlsx', '.ppt', '.pptx'].includes(ext)) {
    return 'Documents';
  } else {
    return 'Others';
  }
};


const processFiles = (directory) => {
  const summary = [];

  
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Error reading the directory:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(directory, file);
      const fileCategory = categorizeFile(file);

 
      const categoryFolder = path.join(directory, fileCategory);
      if (!fs.existsSync(categoryFolder)) {
        fs.mkdirSync(categoryFolder);
      }

  
      const newFilePath = path.join(categoryFolder, file);

      fs.rename(filePath, newFilePath, (err) => {
        if (err) {
          console.error('Error moving file:', err);
          return;
        }

        const logEntry = `Moved file: ${file} -> ${fileCategory}\n`;
        summary.push(logEntry);
      });
    });

    fs.writeFile(path.join(directory, 'summary.txt'), summary.join(''), (err) => {
      if (err) {
        console.error('Error writing summary:', err);
        return;
      }
      console.log('Operation completed. Summary written to summary.txt.');
    });
  });
};

const directory = process.argv[2];

if (!directory) {
  console.log('Please provide a directory path.');
} else {
  processFiles(directory);
}
