const router = require("express").Router();

router.get("/usertest", (req, res)=> {
    res.send("Test is successful");
});

router.post("/userposttest", (req, res)=> {
    const userName = req.body.username;
    console.log(userName);
    res.send("your username is " + userName);
});

module.exports = router;