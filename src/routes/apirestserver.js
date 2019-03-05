const express = require('express');

var Request = require('tedious').Request;

const router = express.Router();

const mssql = require('../database');



router.get('/', (req, res) => {

    var request = new Request("SELECT * FROM ambientes", (err, rowCount, rows) => {
        if (!err) {
            //res.json(rows[0][0].value);
            //res.send('Funciona Bien');
            
        } else {
            res.json(err);
        }

    });
    var result = [];
    request.on('row', function (columns) {

        var item = {}; 
      
        columns.forEach(function (column) {
            //console.log("%s\t%s", column.metadata.colName, column.value);
            item[column.metadata.colName] = column.value;

            result.push(item)
        });
         
        res.json(result);
    });

    mssql.execSql(request);

    
});


/*router.get('/:id', (req, res) => {
    var { id } = req.params;
    //console.log(id);
    mssql.query('SELECT * FROM ambientes WHERE AmbienteID =' + id, (err, rows, fields) => {
        if (!err) {
            if (rows.recordset.length !== 0) {
                res.json(rows.recordset);
                console.log("Rows", rows.recordset.length)
            } else {
                res.json({
                    "Status": "Dato no Existe"
                });
            }


        } else {
            console.log(err);
        }
    });
});

router.post('/add', (req, res) => {
    const { NombreAmmbiente } = req.body;
    mssql.query("INSERT INTO ambientes (NombreAmmbiente) VALUES ('" + NombreAmmbiente + "')", (err, rows, fields) => {
        if (!err) {
            res.json({ 'status': 'Dato Agregado' });
        } else {
            res.json({
                "Error": err
            });
        }
    });
});

router.put('/edit/:id', (req, res) => {
    const { NombreAmmbiente } = req.body;

    const { id } = req.params;

    mssql.query("UPDATE ambientes SET NombreAmmbiente ='" + NombreAmmbiente + "' WHERE AmbienteID = " + id, (err, rows, fields) => {
        if (!err) {
            res.json({ 'status': 'Dato Editado' });
        } else {
            res.json({
                "Error": err
            });
        }
    });
});

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    mssql.query('DELETE FROM ambientes WHERE AmbienteID =' + id, (err, rows, fields) => {
        if (!err) {
            res.json({ 'status': 'Dato Eliminado' });
        } else {
            res.json({
                "Error": err
            });
        }
    });
});*/

module.exports = router;
