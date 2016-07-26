// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/router-deprecated',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  'ng2-file-upload',
  'ng2-bootstrap',

  // App specific barrels.
  'app',
  'app/shared',
  'app/welcome',
  'app/home',
  'app/login-bar',
  'app/home/form-status',
  'app/navbars/nav-bar-component',
  'app/navbars/nav-bar',
  'app/question-form',
  'app/question-form/fields/text-field',
  'app/question-form/fields/integer-field',
  'app/question-form/fields/multi-option-field',
  'app/question-form/fields/option-field',
  'app/question-form/fields/upload-field',
  'app/question-form/fields/subform-field',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    'ng2-file-upload': 'vendor/ng2-file-upload',
    'ng2-bootstrap': 'vendor/ng2-bootstrap',
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
