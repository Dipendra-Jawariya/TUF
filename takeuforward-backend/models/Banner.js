const db = require('../config/db');

const Banner = {
    getBanner: callback => {

        console.log("Get function has been invoked");
        db.query('SELECT * FROM banner', callback);
    },

    updateBanner: (data, callback) => {
        const { description, timer, link } = data;
        db.query('UPDATE banner SET description = ?, timer = ?, link = ? WHERE id = 1', 
            [description, timer, link], callback);
    },

    addBanner: (data, callback) => {
        const { description, timer, link } = data;
        db.query('INSERT INTO banner (description, timer, link) VALUES (?, ?, ?)', 
            [description, timer, link], callback);
    },
    // postBanner : ( data,callback) => {
    //     const {description,timer,link} = data;
    //     db.query(POST banner SET  description = ?, timer = ?, link = ? WHERE id = 1', 
    //         [description, timer, link], callback);
    // }
};

module.exports = Banner;
