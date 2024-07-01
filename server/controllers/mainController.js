/**
 * GET /
 * Homepage 
*/
exports.homepage =  (req, res) => {
  const locals = {
    title: "Notes app",
    description: "NodeJS  Notes App.",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}


/**
 * GET /
 * About 
*/
exports.about =  (req, res) => {
  const locals = {
    title: "About - Notes app",
    description: "NodeJS Notes App.",
  }
  res.render('about', locals);
}