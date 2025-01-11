import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.json({
        answer
    })
});

// if i do this here in file so evrytime while running test 
// supertest also make server with randomPort so move this to bin.ts file
// app.listen(3000)
