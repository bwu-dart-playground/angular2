System.config({
  // traceurOptions: {
  //    annotations: true,
  //    types: true,
  //    memberVariables: true
  // },
  // paths: {
  //     'angular2/*' : 'node_modules/angular2/*',
  //      'rx': 'node_modules/rx/dist/rx.all.min.js'
  // },
  // defaultJSExtensions: true,

  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: "./src"
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    }
  }
});
