import { Request, Response, NextFunction } from 'express';
import isAdmin from '../../../middlewares/isAdmin';

describe('isAdmin middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    nextFunction = jest.fn();
  });

  it('should call next() when user is admin', async () => {
    mockRequest.user = {
      id: 'user-id',
      email: 'admin@example.com',
      username: 'admin',
      token: 'token',
      admin: true,
      profilePhoto: null,
    };

    await isAdmin(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toHaveBeenCalled();
    expect(mockResponse.status).not.toHaveBeenCalled();
  });

  it('should return 403 when user is not admin', async () => {
    mockRequest.user = {
      id: 'user-id',
      email: 'user@example.com',
      username: 'user',
      token: 'token',
      admin: false,
      profilePhoto: null,
    };

    await isAdmin(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalledWith('Forbidden');
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it('should return 403 when user.admin is undefined', async () => {
    mockRequest.user = {
      id: 'user-id',
      email: 'user@example.com',
      username: 'user',
      token: 'token',
      admin: undefined as any,
      profilePhoto: null,
    };

    await isAdmin(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it('should return 403 when user is not set', async () => {
    mockRequest.user = undefined;

    await isAdmin(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(nextFunction).not.toHaveBeenCalled();
  });
});
