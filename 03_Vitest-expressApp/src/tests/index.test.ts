import {describe, expect, test, it, vi} from 'vitest';
import request from "supertest";
import { app } from "../index"

// I have mocked the implementation of that function. 
// A mock does nothing and returns undefined when the function call succeeds.

// vi.mock('../db', () => ({
//     prismaClient: { 
//         sum: { 
//             create: vi.fn()     // vi.fn() is empty function
//         },
//         anotherModel : {
//             create: vi.fn(),
//             update: vi.fn(),
//         }
//     }       
// }));

vi.mock('../db');   // __mock__ > db.ts
  
describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app).post("/sum").send({
        a: 1,
        b: 2
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
    });

    it("should return 411 if no inputs are provided", async () => {
      const res = await request(app).post("/sum").send({});
      expect(res.statusCode).toBe(411);
      expect(res.body.message).toBe("Incorrect inputs");
    });

});


describe("GET /sum", () => {
  it("should return the sum of two numbers", async () => {

    // sending headers in supertest
      const res = await request(app)
        .get("/sum")
        .set({
          a: "1",
          b: "2"
        })
        .send();
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app).get("/sum").send();
    expect(res.statusCode).toBe(411);
  });

});

