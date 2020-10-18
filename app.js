'use strict'

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
    const app = req.params.id;
    res.send(schema[app])
});

// Get the Data
app.get('/list/:id', (req, res) => {
    const app = req.params.id;
    const limit = parseInt(req.query.limit) || 50;
    const start = parseInt(req.query.page) || 1;
    
    const total = data[app].length;    
    const totalpages = Math.ceil(total / limit);
    const next = start < totalpages ? start + 1 : 0;    
    const page = (start - 1) * limit;
    
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
    const key = schema[app].UpdateKeyColumn;

    body.items.forEach(item => {    
        const next_id = Math.max.apply(Math, data[app].map(p => p[key])) + 1;
        data[app].push({...item, [key]: next_id });
    });

    res.send({ success: true });
});

// UPDATE Rows
app.put('/list/:id', (req, res) => {
    const app = req.params.id;
    const body = req.body;
    const key = schema[app].UpdateKeyColumn;

    body.items.forEach(item => {
        data[app]
            .filter(row => row[key] === item[key])
            .forEach(row => 
                { 
                    for(let p in item) row[p] = item[p]; 
                });
    });

    res.send({ success: true });
});

// DELETE Rows
app.delete('/list/:id', (req, res) => {
    const app = req.params.id;
    const body = req.body;
    const key = schema[app].UpdateKeyColumn;

    const todelete = body.items.map(p => p[key]);        
    data[app] = data[app].filter(row => !todelete.includes(row[key]));

    res.send({ success: true });
});

app.listen(port, () => console.log(`Simego WebAPI for Products listening on port ${port}!`));