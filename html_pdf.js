var fs = require('fs')
var conversion = require("phantom-html-to-pdf")();
conversion({
    html: `<h1>Hello World</h1>
<!DOCTYPE html>
<html>
<body>

<p>In HTML, spaces and new lines are ignored:</p>



  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.
  
  Oh, bring back my Bonnie to me.


<p>This is a paragraph.
<p>This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
This is a paragraph.

This is another paragraph.
</body>
</html>
` }, function (err, pdf) {
        var output = fs.createWriteStream('output.pdf')
        console.log(pdf.logs);
        console.log(pdf.numberOfPages);
        // since pdf.stream is a node.js stream you can use it
        // to save the pdf to a file (like in this example) or to
        // respond an http request.
        pdf.stream.pipe(output);
    });