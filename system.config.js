System.config({
  meta: {
    'bower_components/angular/angular': { format: 'global', exports: 'angular' },
    //'bower_components/angular-mocks/angular-mocks': { deps: ['angular'] },
    //'bower_components/angular-touch/angular-touch': { deps: ['angular'] },
    //'bower_components/angular-animate/angular-animate': { deps: ['angular'] },
    //'bower_components/angular-aria/angular-aria/angular-aria': { deps: ['angular'] },
    //'bower_components/angular-messages/angular-messages': { deps: ['angular'] },
    //'bower_components/angular-i18n-en-gb/angular-i18n/angular-locale_en-gb': { deps: ['angular'] },
    'bower_components/angular-ui-router/angular-ui-router/release/angular-ui-router': { deps: ['angular'] },
  },
  map: {
    'angular': 'bower_components/angular/angular',
    //'angular-mock': 'components/angular-mocks/angular-mocks',
    //'angular-touch': 'components/angular-touch/angular-touch',
    //'angular-animate': 'components/angular-animate/angular-animate',
    //'angular-aria': 'components/angular-aria/angular-aria',
    //'angular-messages': 'components/angular-messages/angular-messages',
    'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router'
  }
});