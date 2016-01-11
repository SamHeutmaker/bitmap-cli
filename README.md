# bitmap-cli
A command line interface for modifying bitmap images


To run: 

1) $ git clone https://github.com/SamHeutmaker/bitmap-cli.git
2) cd bitmap-cli
3) npm install
4) node index.js <sourcefile> <transformation> <outputFileName>

example: node index.js tree.bmp sepia examples/sepia-tree

List of bitmap transformations:
grayscale
sepia
oldtime
redscale