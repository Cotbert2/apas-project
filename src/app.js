const { BrowserWindow , app} = require('electron');
const path = require('path');

let mainWindow ;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        icon: path.join(__dirname, './view/download.jpeg'),
        autoHideMenuBar: false
    });
    mainWindow.loadFile(path.join(__dirname, './view/index.html'));
});

app.on('quit', () => {
    console.log('Program has been closed');

})