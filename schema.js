const products = {
    "UpdateKeyColumn": "Unique_ID",
    "UpdateKeyColumnDataType": "System.Int32",
    "BlobNameColumnFormat": null,
    "BlobUrlFormat": null,
    "Columns": [
        {
            "Name": "Unique_ID",
            "DataType": "System.Int32",
            "MaxLength": 0,
            "AllowNull": false,
            "Unique": true,
            "System": true,
            "ReadOnly": false
        },
        {
            "Name": "ProductID",
            "DataType": "System.Int32",
            "MaxLength": 0,
            "AllowNull": true,
            "Unique": true,
            "System": false,
            "ReadOnly": false
        },
        {
            "Name": "ProductName",
            "DataType": "System.String",
            "MaxLength": -1,
            "AllowNull": true,
            "Unique": false,
            "System": false,
            "ReadOnly": false
        },
        {
            "Name": "SupplierID",
            "DataType": "System.Int32",
            "MaxLength": 0,
            "AllowNull": true,
            "Unique": false,
            "System": false,
            "ReadOnly": false
        },
        {
            "Name": "CategoryID",
            "DataType": "System.Int32",
            "MaxLength": 0,
            "AllowNull": true,
            "Unique": false,
            "System": false,
            "ReadOnly": false
        },
        {
            "Name": "QuantityPerUnit",
            "DataType": "System.String",
            "MaxLength": -1,
            "AllowNull": true,
            "Unique": false,
            "System": false,
            "ReadOnly": false
        },
        {
            "Name": "UnitPrice",
            "DataType": "System.Decimal",
            "MaxLength": 0,
            "AllowNull": true,
            "Unique": false,
            "System": false,
            "ReadOnly": false
        },
        {
            "Name": "UnitsInStock",
            "DataType": "System.Int16",
            "MaxLength": 0,
            "AllowNull": true,
            "Unique": false,
            "System": false,
            "ReadOnly": false
        },
        {
            "Name": "UnitsOnOrder",
            "DataType": "System.Int16",
            "MaxLength": 0,
            "AllowNull": true,
            "Unique": false,
            "System": false,
            "ReadOnly": false
        },
        {
            "Name": "ReorderLevel",
            "DataType": "System.Int16",
            "MaxLength": 0,
            "AllowNull": true,
            "Unique": false,
            "System": false,
            "ReadOnly": false
        },
        {
            "Name": "Discontinued",
            "DataType": "System.Boolean",
            "MaxLength": 0,
            "AllowNull": true,
            "Unique": false,
            "System": false,
            "ReadOnly": false
        }        
    ]
};

module.exports = { products }