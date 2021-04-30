exports.getEvents = (req, res, next) => {
  res.locals.events = {
    event1: 'this is event 1',
    event2: 'this is event 3',
    event4: 'this is event 5',
  };
  next();
};
