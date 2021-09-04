const verifyToken = require('./verifyToken');

const mockRequest = (headers) => ({
  headers,
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

const nextFunction = jest.fn();

let req, res;

describe('verifyToken middleware', () => {
  describe('without "Authorization" header', () => {
    beforeEach(() => {
      req = mockRequest({});
      res = mockResponse();
    });

    const expectedResponse = {
      error: 'A valid token is required to get the requested response.',
    };

    test('should return status 401', () => {
      verifyToken(req, res, nextFunction);
      expect(res.status).toBeCalledWith(401);
    });

    test('should return error message', () => {
      verifyToken(req, res, nextFunction);
      expect(res.send).toBeCalledWith(expectedResponse);
    });
  });

  describe('with Authorizathon header', () => {
    beforeEach(() => {
      req = mockRequest({ authorization: process.env.TEST_TOKEN });
      res = mockResponse();
    });

    test('should attach jwt payload to req as "assessment"', () => {
      verifyToken(req, res, nextFunction);
      expect(req).toHaveProperty('assessment');
    });

    test('should go to next middleware', () => {
      verifyToken(req, res, nextFunction);
      expect(nextFunction).toBeCalled();
    });
  });
});
