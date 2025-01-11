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

### mocking issue  ( solve : mock return values)

```
  // here we are mocking this
    const response = await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })

    // response.id ID is going to be issue here
    res.json({
        answer,
        id: response.id     // here if we mocking so response object is not going to be received so we are not getting response.id
    })
```