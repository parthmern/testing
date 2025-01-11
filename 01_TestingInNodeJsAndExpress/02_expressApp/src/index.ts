import express, { Request, Response } from "express";
import { z } from "zod";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
});

// POST /sum
app.post("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body);
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    return res.json({
        answer
    });
    
});

// GET /sum
app.get("/sum", (req: Request, res: Response) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    });
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    return res.json({
        answer
    });
});





// if i do this here in file so evrytime while running test 
// supertest also make server with randomPort so move this to bin.ts file
// app.listen(3000)
