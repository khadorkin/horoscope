if (process.env.NODE_ENV === 'development') {
  require('./debug');
  require('./warnings');
}
