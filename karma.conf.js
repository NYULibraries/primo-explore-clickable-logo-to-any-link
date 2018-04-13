module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec', 'coverage', 'coveralls'],
    browsers: ['PhantomJS'],
    files: [
      'spec/fixtures/**/*.json',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/**/*.js',
      'spec/**/*.spec.js'
    ],
    preprocessors: {
      'js/**/*.js': ['babel', 'sourcemap'],
      'spec/**/*.spec.js': ['babel', 'sourcemap'],
      'spec/fixtures/**/*.json': ['json_fixtures'],
    },
    jsonFixturesPreprocessor: {
      stripPrefix: "spec/fixtures/"
    },
    coverageReporter: {
       type: 'lcov',
       dir: 'coverage/'
     }
  });
};
