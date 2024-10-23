const fs = require('fs');

function parseFile (indata, outdata, delimiter = ';') {
  if (!fs.existsSync(indata)) { //existsSync checks if the data (input data) does actually exist 
    return -1; //returns -1 if data exists
   }
  if (fs.existsSync(outdata)) {
     fs.unlinkSync(outdata); //if output file does already exist then its deleted using fs.unlinksync
}
  let recordcount = 0 
  try {
    const fileContent = fs.readFileSync(indata, 'utf-8');
    const lines = fileContent.split(/\n/);

    for (let i = 1; i < lines.length; i++) {
      const line =lines[i].trim();
      if(line === '') continue;

      const [review, sentiment] = line.split(delimeter).map(item=> item.trim());
      const shortReview = review.substring(0, 20);
      console.log(shortReview)

      fs.appendFileSync (outdata, `${sentimen}${delimiter}${shortReview}\n`, 'utf-8');
      recordcount ++;
    }
  }
  catch (err) {
    console.error('Error parsing file', err);
    return -1;
}
return recordcount;

}
parseFile('./datafile.csv','./outputfile.csv')

module.exports = {
  parseFile,
}