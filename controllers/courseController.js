const Course = require('../models/courseModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.getCourses = catchAsync(async (req, res, next) => {
  const courses = await Course.find();
  if (res.locals.user) {
    if (
      res.locals.user.role === 'admin' ||
      res.locals.user.role === 'superadmin'
    ) {
      console.log('iiiiiiiiiiiiiiiiiiii inside publish;;;;;;;;;');
      res.locals.courses = courses;

      return next();
    }
  }
  let a = [];
  courses.forEach((el) => {
    if (el.publishStatus) {
      a.push(el);
    }
  });
  console.log(a);
  res.locals.courses = a;
  return next();

  // res.status(200).json({
  //   status: 'success',
  //   results: courses.length,
  //   data: {
  //     courses,
  //   },
  // });
  // next()
});

exports.addCourse = catchAsync(async (req, res, next) => {
  // console.log(req.body);
  // if ((req.body.year1, req.body.year2, req.body.year3)) {
  //   req.body.year1 = req.body.year1.split(',');
  //   req.body.year2 = req.body.year2.split(',');
  //   req.body.year3 = req.body.year3.split(',');
  // }

  const course = await Course.create(req.body);
  // console.log('course');
  let redirectURL = `/courses/${course._id}`;
  console.log(redirectURL);
  res.status(200).render('success', {
    message: 'course added successfully',
    redirectURL,
  });
});

exports.getSingleCourse = catchAsync(async (req, res, next) => {
  const course = await Course.findOne({ _id: req.params.courseID });
  res.status(200).render('course', {
    course,
    title: course.tag,
  });
});
exports.updateCourse = catchAsync(async (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);
  const course = await Course.findByIdAndUpdate(req.params.id, req.body);
  console.log('inside update course............');
  console.log(course);
  let redirectURL = `/courses/${course._id}`;
  res.status(200).render('success', {
    message: 'course updated successfully',
    redirectURL,
  });
});

exports.deleteCourse = catchAsync(async (req, res, next) => {
  console.log('course id = == = ' + req.params.courseID);

  await Course.findOneAndDelete({ courseID: req.params.courseID });
  res.status(200).json({
    status: 'success',
  });
});
