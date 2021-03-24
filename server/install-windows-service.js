var Service = require('node-windows').Service;

// Config: replace the script value with the exact path to message.js file.
var svc = new Service({
  name:'Node.js message server',
  description: 'Node msg service',
  script:'C:\\path\\to\\message.js'
});

// Listen for the install event, which indicates the process is available as a service
svc.on('install',function(){
  svc.start();
});

svc.install();