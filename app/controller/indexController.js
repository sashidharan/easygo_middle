// const qrCode = require('qrcode');

module.exports.createImage = function (req, res) {
    console.log('creatimafe');
    res.render('index', { title: 'Express' });
};