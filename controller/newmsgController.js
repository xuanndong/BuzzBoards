const asyncHandler = require("express-async-handler");
const pool = require('../db/pool');
const { createMessages } = require('../db/queries');
//const messages = require("../data/messages");
//const date = new Date();
//const month = date.toLocaleString('default', { month: 'long' });
//let hours = date.getHours();
//let newformat = hours >= 12 ? 'PM' : 'AM';
//hours = hours % 12;



const getForm = asyncHandler(async (req, res) => {
    res.render("form");
});

const postMessagefromForm = asyncHandler(async (req, res) => {




    //messages.push({text: req.body.messageText, user: req.body.userName, added:`${date.getDate()} ${month} ${date.getFullYear()} ${hours}: ${date.getMinutes()} ${newformat}`});

    createMessages(req.body.messageText, req.body.userName);
    res.redirect("..");

});


module.exports = {
    getForm,
    postMessagefromForm
};
