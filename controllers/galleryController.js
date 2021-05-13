const Gallery = require('../models/galleryModel');
const multer = require('multer');

const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

// setting upload destination and renaming image
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/gallery');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];

    cb(null, `gallery-${Date.now()}.${ext}`);
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

exports.uploadPhotos = upload.array('images');

exports.getGallery = catchAsync(async (req, res, next) => {
  const gallery = await Gallery.find();
  console.log(req.fromDashboard);
  if (req.fromDashboard === true) {
    res.locals.gallery = gallery;

    return next();
  }

  console.log(gallery);
  res.status(200).render('gallery', {
    gallery,
    title: 'Gallery',
  });
});

exports.updateGallery = catchAsync(async (req, res, next) => {
  let gallery = await Gallery.findOne({ name: 'gallery' });

  if (!gallery) {
    gallery = await Gallery.create({ name: 'gallery' });
  }
  let images = gallery.images;
  let newImages;

  if (req.files) {
    newImages = req.files.map((el) => el.filename);
    console.log(images);

    console.log('new img..............');
    images = images.concat(newImages);
    console.log(images);
  }

  await Gallery.findOneAndUpdate({ name: 'gallery' }, { images });

  let redirectURL = `/gallery`;
  res.status(200).render('success', {
    message: 'gallery updated successfully',
    redirectURL,
  });
});

exports.deleteImage = catchAsync(async (req, res, next) => {
  const gallery = await Gallery.findOne({ name: 'gallery' });
  let images = gallery.images;

  images.splice(images.indexOf(req.params.id), 1);

  await Gallery.findOneAndUpdate({ name: 'gallery' }, { images });

  res.status(200).json({
    status: 'success',
    message: 'image deleted successfully',
  });
});
