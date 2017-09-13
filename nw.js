let Service = require('node-windows').Service;

let svc = new Service({
    name: 'myshop',
    description: 'myshop',
    script: './index.js',
    wait: '1',
    grow: '0.25',
    maxRestarts: '40'
});

svc.on('install', ()=>{
    svc.start();
    console.log('install complete.');
})

svc.on('uninstall', ()=>{
    console.log(`myshop is exists`);
})

svc.on('alreadyinstalled', ()=>{
    console.log('This server is already runing');
})

if(svc.exists) return svc.uninstall();

svc.install();
