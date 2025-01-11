import { describe, expect, test, it, vi } from 'vitest';
import request from "supertest";
import { app } from "../index"
import { prismaClient } from '../__mocks__/db'

vi.mock('../db');

describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {

        // HOW TO MOCK RETURN value >
        // here we are not testing inputs to be mocked here 
        // Are we sending the right inputs here? 
        // a and b can be any thing it doesnot matter ( not good here )
        // we have to SPYing on input things here
        prismaClient.sum.create.mockResolvedValue({
            id: 1,
            a: 1,
            b: 2,
            result: 3
        });

        vi.spyOn(prismaClient.sum, "create");

        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });

        expect(prismaClient.sum.create).toHaveBeenCalledWith({
            data: {
              a: 1,     // input a must be 1
              b: 2,     // input b must be 2
              result: 3 // result must be 3
            }
        })

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });

    it("should return 411 if no inputs are provided", async () => {
        const res = await request(app).post("/sum").send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs");
    });

});


// describe("GET /sum", () => {
//   it("should return the sum of two numbers", async () => {
//       prismaClient.sum.create.mockResolvedValue({
//         id: 1,
//         a: 1,
//         b: 1,
//         result: 3
//       });

//       const res = await request(app)
//         .get("/sum")
//         .set({
//           a: "1",
//           b: "2"
//         })
//         .send();
//       expect(res.statusCode).toBe(200);
//       expect(res.body.answer).toBe(3);
//   });

//   it("should return 411 if no inputs are provided", async () => {
//     const res = await request(app)
//       .get("/sum").send();
//     expect(res.statusCode).toBe(411);
//   });

// });