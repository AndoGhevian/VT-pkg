const { VTexec } = require('open-term')


const internalNode = process.execPath
const internalFs = __dirname

const termProc = VTexec(`${internalNode} ${internalFs}/main.js`)
termProc.unref()

// // Logs for package.
// const fs = require('fs')
// console.log(`process.argv ${process.argv}`)
// console.log(`Internal FileSystem Path: ${internalFs}`)
// console.log(`Internal FileSystem Content: ${fs.readdirSync(internalFs)}`)
// console.log(`Internal Node Interpreter Path: ${internalNode}`)