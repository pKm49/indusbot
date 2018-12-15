const express = require('express');
const router = express.Router();

router.get(/\.css$/,function(req, res, next){
    var csspath = path.join(__dirname, '', req.url);
    var filestream = fs.createReadStream(csspath);
    res.writeHead(200, {'Content-Type':'text/css'});
    filestream.pipe(res);
});

router.get(/\.js$/,function(req, res, next){
     var jspath = path.join(__dirname, '', req.url);
     var filejsstream = fs.createReadStream(jspath);
     res.writeHead(200, {'Content-Type':'text/javascript'});
     filejsstream.pipe(res);
});

router.get(/\.jpg$/,function(req, res, next){
    var imagepath = path.join(__dirname, '', req.url);
    var fileimgstream = fs.createReadStream(imagepath);
    res.writeHead(200, {'Content-Type':'image/jpg'});
    fileimgstream.pipe(res);
});

router.get(/\.png$/,function(req, res, next){
    var imagepath = path.join(__dirname, '', req.url);
    var fileimgstream = fs.createReadStream(imagepath);
    res.writeHead(200, {'Content-Type':'image/png'});
    fileimgstream.pipe(res);
});
