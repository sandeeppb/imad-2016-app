var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
                'article-one' : {
                title: 'Article One | Sandeep PB',
                heading: 'Article One',
                date: 'Sep 20, 2016',
                content: ` 
                <p>
                      creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
                </p>
                <hr/>
            	<p>
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	</p>`
                
                
            },
                'article-two': {
                title: 'Article Two | Sandeep PB',
                heading: 'Article Two',
                date: 'Sep 19, 2016',
                content: ` 
                <p>
                      creating Article Two to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
                </p>
                <hr/>
            	<p>
            	  This is about creating new webpages to the project.
            	  This is about creating new webpages to the project.
            	</p>`}
};

function createtemplate(data) {
            var title= data.title;
            var heading = data.heading;
            var date=data.date;
            var content = data.content;
            var htmltemplate = `
            <html>
                <head>
                    <title>
                    ${title}
                    </title>
                    <link href="/ui/style.css" rel="stylesheet" />
                </head>
                <body>
                <div class=container>
                    <div>
               		<a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                	${heading}
            	    </h3>
            	    <div>
            	    ${date}
                    <div>
                    ${content}
                    </div>
            
                </div>
                </body>
            
            </html>
    `;
return htmltemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
   res.send(createtemplate(articles[articleName]));
});
app.get('/article-two', function (req, res) {
   res.send(createtemplate(articletwo));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
