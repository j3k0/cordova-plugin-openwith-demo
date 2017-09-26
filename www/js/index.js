document.addEventListener('deviceready', setupOpenwith, false);

function setupOpenwith() {

  // Increase verbosity if you need more logs
  //cordova.openwith.setVerbosity(cordova.openwith.DEBUG);

  // Initialize the plugin
  cordova.openwith.init(initSuccess, initError);

  function initSuccess()  { console.log('init success!'); }
  function initError(err) { console.log('init failed: ' + err); }

  // Define your file handler
  cordova.openwith.addHandler(myHandler);

  function myHandler(intent) {
    console.log('intent received');

    console.log('  action: ' + intent.action);   // type of action requested by the user
    console.log('  exit: ' + intent.exit); // if true, you should exit the
                                                 // app after processing

    for (var i = 0; i < intent.items.length; ++i) {
      var item = intent.items[i];
      console.log('  type: ' + item.type);   // mime type
      console.log('  uri: ' + item.uri);     // uri to the file, probably NOT a web uri
      console.log('  path: ' + item.path);   // path on the device, might be undefined
    }

    // ...
    // Here, you probably want to do something useful with the data
    // ...
    // An example...

    // For simplicity, only handle sharing a single file.
    if (intent.items.length > 0) {
      cordova.openwith.load(intent.items[0], function(data, item) {
        // data is a long base64 string with the content of the file
        console.log("item loaded, it weights " + data.length + " bytes");
        // uploadToServer(item); // upload to your server, confirm to the user.
      });
    }
  }
}
