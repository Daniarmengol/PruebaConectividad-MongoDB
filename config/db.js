const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tienda_online');

//te pide la url de la base de datos, en mysql es: mysql://user:pass@host:port/name
// mysql://root:mysqlpassword@127.0..0.1:3306/gimnasio_4