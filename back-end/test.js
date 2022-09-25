import crypto from 'crypto'
let token = crypto.createHash("sha256").update("Hello").digest("hex")
console.log(token)