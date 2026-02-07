import { Request, Response } from "express";
import { z } from "zod";
import {
  validate,
  validateQuery,
  validateParams,
} from "../../../utils/validation.util";
import { AppError } from "../../../utils/error.util";

describe("validation.util", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: jest.Mock;

  beforeEach(() => {
    mockReq = {
      body: {},
      query: {},
      params: {},
    };
    mockRes = {};
    mockNext = jest.fn();
  });

  describe("validate", () => {
    it("devrait valider un body valide et appeler next()", () => {
      const schema = z.object({
        name: z.string(),
        age: z.number(),
      });

      mockReq.body = { name: "John", age: 30 };
      const middleware = validate(schema);

      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith();
      expect(mockNext).toHaveBeenCalledTimes(1);
      expect(mockReq.body).toEqual({ name: "John", age: 30 });
    });

    it("devrait transformer les données selon le schéma", () => {
      const schema = z.object({
        email: z.email(),
        count: z.coerce.number(),
      });

      mockReq.body = { email: "test@example.com", count: "42" };
      const middleware = validate(schema);

      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith();
      expect(mockReq.body.count).toBe(42);
    });

    it("devrait appeler next() avec une AppError si la validation échoue", () => {
      const schema = z.object({
        email: z.email(),
      });

      mockReq.body = { email: "invalid-email" };
      const middleware = validate(schema);

      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
      const error = mockNext.mock.calls[0][0];
      expect(error).toBeInstanceOf(AppError);
      expect(error.statusCode).toBe(400);
      expect(error.message).toContain("Validation error");
    });

    it("devrait gérer plusieurs erreurs de validation", () => {
      const schema = z.object({
        email: z.email(),
        age: z.number().min(18),
      });

      mockReq.body = { email: "invalid", age: 15 };
      const middleware = validate(schema);

      middleware(mockReq as Request, mockRes as Response, mockNext);

      const error = mockNext.mock.calls[0][0];
      expect(error).toBeInstanceOf(AppError);
      expect(error.message).toContain("Validation error");
    });

    it("devrait passer les erreurs non-Zod à next()", () => {
      const schema = {
        parse: jest.fn().mockImplementation(() => {
          throw new Error("Non-Zod error");
        }),
      } as any;

      const middleware = validate(schema);
      middleware(mockReq as Request, mockRes as Response, mockNext);

      const error = mockNext.mock.calls[0][0];
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Non-Zod error");
    });
  });

  describe("validateQuery", () => {
    it("devrait valider des query params valides", () => {
      const schema = z.object({
        page: z.coerce.number().default(1),
        limit: z.coerce.number().default(10),
      });

      mockReq.query = { page: "2", limit: "20" };
      const middleware = validateQuery(schema);

      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith();
      expect(mockReq.query.page).toBe(2);
      expect(mockReq.query.limit).toBe(20);
    });

    it("devrait transformer les types dans req.query", () => {
      const schema = z.object({
        id: z.coerce.number(),
        active: z.coerce.boolean(),
      });

      mockReq.query = { id: "123", active: "true" };
      const middleware = validateQuery(schema);

      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockReq.query.id).toBe(123);
      expect(mockReq.query.active).toBe(true);
    });

    it("devrait appeler next() avec une AppError si la validation échoue", () => {
      const schema = z.object({
        page: z.coerce.number().min(1),
      });

      mockReq.query = { page: "0" };
      const middleware = validateQuery(schema);

      middleware(mockReq as Request, mockRes as Response, mockNext);

      const error = mockNext.mock.calls[0][0];
      expect(error).toBeInstanceOf(AppError);
      expect(error.statusCode).toBe(400);
    });
  });

  describe("validateParams", () => {
    it("devrait valider des params valides", () => {
      const schema = z.object({
        id: z.uuid(),
      });

      mockReq.params = { id: "123e4567-e89b-12d3-a456-426614174000" };
      const middleware = validateParams(schema);

      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith();
      expect(mockReq.params.id).toBe("123e4567-e89b-12d3-a456-426614174000");
    });

    it("devrait appeler next() avec une AppError si la validation échoue", () => {
      const schema = z.object({
        id: z.uuid(),
      });

      mockReq.params = { id: "invalid-uuid" };
      const middleware = validateParams(schema);

      middleware(mockReq as Request, mockRes as Response, mockNext);

      const error = mockNext.mock.calls[0][0];
      expect(error).toBeInstanceOf(AppError);
      expect(error.statusCode).toBe(400);
    });

    it("devrait transformer les types dans req.params", () => {
      const schema = z.object({
        id: z.coerce.number(),
      });

      mockReq.params = { id: "123" };
      const middleware = validateParams(schema);

      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockReq.params.id).toBe(123);
    });
  });
});
