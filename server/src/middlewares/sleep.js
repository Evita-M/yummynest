const sleep = (delay = 2000) => {
  return (req, res, next) => {
    setTimeout(() => {
      next();
    }, delay);
  };
};

export default sleep;
