const express = require('express');
const data = require("./data");
const schema = require("./schema");

const app = express();
const port = process.env.PORT || '3000';

const lists = ["products"];

app.use(express.json());

// Get the Lists on this API
app.get('/list', (req, res) => res.send(lists));

// Get the Schema
app.get('/list/:id/schema', (req, res) => { 
    var app = req.params.id;
    res.send(schema[app])
});

// Get the Data
app.get('/list/:id', (req, res) => {
    var app = req.params.id;
    var limit = parseInt(req.query.limit) || 50;
    var start = parseInt(req.query.page) || 1;
    
    var total = data[app].length;    
    var totalpages = Math.ceil(total / limit);
    var next = start < totalpages ? start + 1 : 0;    
    var page = (start - 1) * limit;
    
    return res.send(
        {
            "list": app,
            "filter": null,
            "orderby": null,
            "currentpage": start,
            "nextpage": next,
            "totalpages": totalpages,
            "count": total,
            "data": data[app].slice(page, page+limit)
        });
});

// ADD Rows
app.post('/list/:id', (req, res) => {
    const app = req.params.id;
    const body = req.body;
        
    body.items.forEach(item => {    
        const next_id = Math.max.apply(Math, data[app].map(p => p.WS_ID)) + 1;
        data[app].push({...item, WS_ID: next_id});
    });

    res.send({ success: true });
});

// UPDATE Rows
app.put('/list/:id', (req, res) => {
    const app = req.params.id;
    const body = req.body;
    
    body.items.forEach(item => {
        data[app].forEach(row => 
            { 
                if(row.WS_ID === item.WS_ID)
                {
                    for(var p in item) {
                        row[p] = item[p];
                    }                    
                }                     
            });
    });

    res.send({ success: true });
});

// DELETE Rows
app.delete('/list/:id', (req, res) => {
    const app = req.params.id;
    const body = req.body;
    
    const todelete = body.items.map(p => p.WS_ID);        
    data[app] = data[app].filter(row => !todelete.includes(row.WS_ID));

    res.send({ success: true });
});

app.listen(port, () => console.log(`Simego WebAPI for Products listening on port ${port}!`));