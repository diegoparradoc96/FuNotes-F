const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path"); // Importa el módulo 'path'
// const serve = import("electron-serve");
// //const serve = require("electron-serve");

// const appServe = app.isPackaged ? serve({
//   directory: path.join(__dirname, "../out")
// }) : null;

let appServe;

(async () => {
  const serve = await import("electron-serve");
  appServe = app.isPackaged
    ? serve({
        directory: path.join(__dirname, "../out"),
      })
    : null;
})();

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
        if (
          path.extname(file) === ".jpg" ||
          path.extname(file) === ".png" ||
          path.extname(file) === ".jpeg"
        ) {
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

ipcMain.on("copy-file", (event, filePath) => {
  const destinationDirectory = "D:\\Personal-projects\\funotes\\public"; // Cambia esto por la ruta a tu directorio
  const fileName = path.basename(filePath);

  try {
    fs.copyFileSync(filePath, path.join(destinationDirectory, fileName));
    console.log("Archivo copiado con éxito.");
  } catch (error) {
    console.error("Error al copiar el archivo:", error);
  }
});

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true, // protege contra ataques de prototipos
      preload: path.join(__dirname, "preload.js"),
    },
  });

  //win.loadURL("http://localhost:3000");

  // // if (app.isPackaged) {
  // //   console.log("el app service: ", appServe);

  // //   appServe(win).then(() => {
  // //     win.loadURL("app://-");
  // //   });
  // // } else {
  // //   win.loadURL("http://localhost:3000");
  // //   win.webContents.openDevTools();
  // //   win.webContents.on("did-fail-load", (e, code, desc) => {
  // //     win.webContents.reloadIgnoringCache();
  // //   });
  // // }

  if (app.isPackaged) {
    console.log("el app service: ", appServe);

    if (appServe) {
      await appServe(win);
    }

    win.loadURL("app://-");
  } else {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
    win.webContents.on("did-fail-load", (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }
}

//app.whenReady().then(createWindow);

// // app.on("ready", () => {
// //   createWindow();
// // });

// // app.on("window-all-closed", () => {
// //   if (process.platform !== "darwin") {
// //     app.quit();
// //   }
// // });

app.on("ready", async () => {
  if (app.isPackaged) {
    const serve = await import("electron-serve");
    appServe = serve({ directory: path.join(__dirname, "../out") });
  }

  createWindow();
});

/* ############################################################################### */
