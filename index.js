const {app, BrowserWindow, ipcMain , Menu} = require ('electron');
const electron = require('electron');
const path = require("path");
const url = require("url");
var common  = require('./common');
var lodash = require('lodash');
var scrapper = require('./scrapper');



console.log("from index.js");

let mainWindow;

function createWindow()
{
    mainWindow = new BrowserWindow(
        {
            width: 500,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        }
    )

    //mainWindow.loadURL('https://www.amazon.com')
   // mainWindow.loadFile('index.html')
    mainWindow.maximize();

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }));
    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed',() => {
        mainWindow = null;
    })

}

app.on('ready',createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });

// scrapper.fetchMainCategories(common.baseUrl, ((data, response) => {
//     if(response){
//         console.log(data);
//     }
// }))

// ipcMain.on('scrapper', (event, arg) => {
//     child_process.spawn('node main.js')
// });