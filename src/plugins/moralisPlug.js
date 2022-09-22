export default {
  install: (app, options) => {

    const consoleOut = () => {
      console.log('Fired wow')
      console.log('test')
    }

    app.provide('consoleout', consoleOut)
  }
}