const Event = require('../models/eventModel');
const multer = require('multer');

const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

// setting upload destination and renaming image
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('...............setting storage ......................');
    cb(null, 'public/images/events');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];

    cb(
      null,
      `event-${req.body.name.split(' ').join('-')}-${Date.now()}.${ext}`
    );
  },
});

//chek if uploaded file is an image
const multerFilter = (req, file, cb) => {
  console.log(
    '................ inside multer filter ...............................'
  );
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Please upload only images', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadCoverPhoto = upload.single('coverPhoto');

exports.getEvents = catchAsync(async (req, res, next) => {
  let events = await Event.find();

  if (res.locals.user.role == 'student' || !res.locals.user) {
    let a = [];
    events.forEach((event) => {
      if (event.publishStatus) {
        a.push(event);
      }
    });
    events = a;
  }

  console.log(req.fromDashboard);
  if (req.fromDashboard) {
    res.locals.events = events;

    return next();
  }

  res.status(200).render('events', {
    events,
    title: 'Events',
  });
});

exports.addEvent = catchAsync(async (req, res, next) => {
  // console.log(req.body);

  if (req.file) {
    req.body.coverPhoto = req.file.filename;
    // req.body.coverPhoto = req.files.map((el) => el.filename);
  }
  const event = await Event.create(req.body);

  let redirectURL = `/events/${event._id}`;

  res.status(200).render('success', {
    message: 'event added successfully',
    redirectURL,
  });
});

exports.getSingleEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findOne({ _id: req.params.id });
  console.log('////////////////////////////// in get single event');
  res.status(200).render('event', {
    event,
    title: event.name,
  });
});
exports.updateEvent = catchAsync(async (req, res, next) => {
  if (req.file) {
    console.log('..................... file is runnng ////////////////');
    req.body.coverPhoto = req.file.filename;
  }

  console.log(req.body);
  const event = await Event.findOneAndUpdate({ _id: req.params.id }, req.body);

  let redirectURL = `/events/${event._id}`;
  res.status(200).render('success', {
    message: 'event updated successfully',
    redirectURL,
  });
});

exports.deleteEvent = catchAsync(async (req, res, next) => {
  await Event.findOneAndDelete({ _id: req.params.id });
  res.status(200).json({
    status: 'success',
  });
});
