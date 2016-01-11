const fs  = require('fs');
const _   = require('lodash');
// Import bitmap manipuation module
const bit = require('bitmap-helpers');

// Get Bitmap parameter
var orginalBitmap = fs.readFileSync(process.argv[2]);
// Get Transformation to perform
var transformation = process.argv[3];
// Get Destination of transformed bitmap
var destination = process.argv[4];


// Log bitmap meta data
bit.readBitMapHeader(orginalBitmap);

// New File
var newFile = bit.createNewFile(orginalBitmap, transformation);
// File Options
var fileOptions = {
  fileToCreate: destination + '.bmp'
};

// Write new file
bit.writeFile(newFile, fileOptions);
