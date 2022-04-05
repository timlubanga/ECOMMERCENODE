const deselectPassword = (doc) => {
  delete doc._doc.password;
  return doc;
};

module.exports = deselectPassword;
