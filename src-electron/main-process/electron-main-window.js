import { BrowserWindow } from "electron";

const mainWindow = new BrowserWindow({
  width: 1024,
  height: 768,
  minWidth: 800,
  minHeight: 600,
  useContentSize: true,
  webPreferences: {
    // Change from /quasar.conf.js > electron > nodeIntegration;
    // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
    nodeIntegration: process.env.QUASAR_NODE_INTEGRATION,
    nodeIntegrationInWorker: process.env.QUASAR_NODE_INTEGRATION,

    // More info: /quasar-cli/developing-electron-apps/electron-preload-script
    // preload: path.resolve(__dirname, 'electron-preload.js')
  }
})

export default { mainWindow }
export { mainWindow }
