const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")

function createWindow () {
    const window = new BrowserWindow({
        width: 400,
        height: 550,
        minWidth: 300,
        minHeight: 400,
        frame: false,
        show: false,
        icon: "icon.png",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            preload: path.join(__dirname, "preload.js")
        }
    })

    window.on("ready-to-show", () => {
        window.show()
    })
    
    window.loadFile("./src/html/index.html")

    ipcMain.on("app_close", () => {
        window.close()
    })

    ipcMain.on("app_maximise", () => {
        if (!window.isMaximized()) {
            window.maximize()
        } else {
            window.unmaximize()
        }
    })

    ipcMain.on("app_minimise", () => {
        window.minimize()
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})