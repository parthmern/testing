# Testing

- nodejs+express testing : https://projects.100xdevs.com/tracks/testing-1/Testing-in-the-MERN-Stack-1


1) unit testing = you donot start/connect to DB
2) integration testing = you do connect to DB
3) end to end = actually start browser while testing (client side included)

## mocking means

- 

```
app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    // you assume that this call is right and you simply ignore it 
    // (you donot want to execute this line)  -- u can do in JEST but really easy with VITEST
    // that called as MOCKING
    const dbCall = await ......

    res.json({
        answer
    })
});


```