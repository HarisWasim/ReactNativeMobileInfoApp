var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var url = require('url');
var http = require('http');
var port = 8888;

// Create connection to database
var config =
{
    userName: 'hariswasim', // update me
    password: '786Pkh786!', // update me
    server: 'ecommercemobilehq.database.windows.net', // update me
    options:
    {
        database: 'FinalMissingOrders' //update me
        , encrypt: true
    }
}
var connection = new Connection(config);

//variable that holds the final response in JSON format from DB
var finalResponse;

var server = http.createServer(handler);
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Query Database
makeConnection();

// Attempt to connect and execute queries if connection goes through
function makeConnection() {
    connection.on('connect', function (err) {
        if (err) {
            console.log(err)
        }
        else {
            queryDatabase()
        }
    });
}

function queryDatabase() {
    console.log('Reading rows from the Table...');

    // Read all rows from table
    request = new Request(
        "SELECT * FROM FinalMissingOrders FOR JSON PATH",
        function (err, rowCount, rows) {
            console.log(rowCount + ' row(s) returned');
        }
    );

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            finalResponse = JSON.parse(column.value);
        });
        console.log(finalResponse);
    });
    connection.execSql(request);
}


function handler(request, response) {
    request.addListener('end', function () {
        var url = request.url;
        if (url.indexOf("/response") == 0) { // if query
            queryHandler(request, response, url);
        } else { // else serve them their file
            fileServer.serve(request, response, function (e, res) {
                if (e && (e.status === 404)) {
                    fileServer.serveFile('/not-found.html', 404, {}, request, response);
                }
            });
        }
    }).resume();
}

function queryHandler(request, response, url) {
    response.writeHead(200, {
        "Content-Type": "text"
    });
    var jsonList = JSON.stringify(finalResponse);
    response.write(jsonList);
    response.end();
}

