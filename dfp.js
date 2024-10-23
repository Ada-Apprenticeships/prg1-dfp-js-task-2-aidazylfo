const fs = require('fs');

function parseFile (indata, outdata, delimiter = ';') {
  if (!fs.existsSync(indata)) { //existsSync checks if the data (input data) does actually exist 
    return -1; //returns -1 if data exists
  }
  if (fs.existsSync(outdata)) {
     fs.unlinkSync(outdata); //if output file does already exist then its deleted using fs.unlinksync
  }
 const data = fs.readFileSync(indata, 'utf-8')
 const lines = data.split('\n');
 const transformedLine = [];
 let totalRecordsExported = 0;

for (let i = 1 ; i< lines.length; i++) {
  const line = lines[i].trim ();
  if (line === '') continue;
  const elements = line.split(delimiter)
  if (elements.length < 2 ) contiune;

  let review = elements[0].trim();
  const sentiment = elemets [1].trim();
  review = review.slice(0,20);

  const transformedLine = `${sentiment}${delimiter}${review}`;
}


}






  



// Leave this code here for the automated tests
module.exports = {
  parseFile,
}




// possible usefull code 
function splitTextIntoChunks (text, chunksize = 20) {
  let chunks = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }
 return chunks;
}