const fs     = require('fs');
const _      = require('lodash');
const prompt = require('prompt');
// Import bitmap manipuation module
const bit = require('bitmap-helpers');

(function() {
  prompt.start();
  prompt.get(['filename', 'transformation', 'file_destination'], function(err, result) {
    console.log('File ' + result.filename + ' received.');
    console.log('Transformation: ' + result.transformation + ' selected.');
    console.log('File will be written at ' + result.file_destination + '.');
    if (result.filename === undefined) return 'Please enter a valid filename';

    var originalBitmap = fs.readFileSync(result.filename), // Bitmap parameter
        transformation = result.transformation,            // Transformation to perform
           destination = result.file_destination;          // Destination of transformed bitmap
    // Log bitmap meta data
    bit.readBitMapHeader(originalBitmap);
    // New File
    var newFile = bit.createNewFile(originalBitmap, transformation);
    // File Options
    var fileOptions = {
      fileToCreate: destination + transformation + '.bmp'
    };
    // Write new file
    bit.writeFile(newFile, fileOptions);
  })
})();
