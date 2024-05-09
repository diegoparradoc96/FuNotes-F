const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path"); // Importa el módulo 'path'

ipcMain.on("get-file-data", (event, path) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      // Maneja el error aquí
      console.log(err);
    } else {
      event.reply("file-data", data);
    }
  });
});

ipcMain.on("get-directory-data", (event, dirPath) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      // Maneja el error aquí
      console.log(err);
    } else {
      files.forEach((file) => {
        if (path.extname(file) === ".jpg" || path.extname(file) === ".png") {
          // Asegúrate de ajustar esto a los tipos de archivo que necesitas
          fs.readFile(path.join(dirPath, file), (err, data) => {
            if (err) {
              // Maneja el error aquí
              console.log(err);
            } else {
              event.reply("file-data", { file, data });
            }
          });
        }
      });
    }
  });
});

console.log("__dirname", __dirname);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true, // protege contra ataques de prototipos
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:3000/");
}

app.whenReady().then(createWindow);
