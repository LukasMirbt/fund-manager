const getTokenFromRequest = (request) => {
  const authorization = request.headers["authorization"];
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

export default getTokenFromRequest;
