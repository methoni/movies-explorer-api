const { PORT = 3000, BASE_PATH = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

module.exports = {
  PORT,
  BASE_PATH,
};
