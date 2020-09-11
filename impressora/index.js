const { app, BrowserWindow, ipcMain } = require("electron");
const { PosPrinter } = require("electron-pos-printer");

let win;

app.on("ready", () => {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    width: 650,
    height: 450,
  });
  win.loadFile("src/index.html");
  win.webContents.openDevTools();
});

ipcMain.on("print", (event, arg) => {
  const data = JSON.parse(arg);
  // printer
  PosPrinter.print(data, {
    printerName: "POS-58(copy of 1)",
    silent: true,
  }).catch((err) => console.log(err));
});
