const { createHash } = require('crypto')
const token = 'cxyagdahd4WW'
function vaild(req) {
    const { signature, timestamp, nonce } = req

    const waitTras = [token, timestamp, nonce].sort().join('')
    const aimDigest = strToSha1(waitTras)
    return aimDigest === signature
}

function strToSha1(msg) {
    const hash = createHash('sha1')
    hash.update(msg)
    return hash.digest('hex')
}

module.exports={
    vaild
}