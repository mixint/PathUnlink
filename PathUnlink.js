let Transflect = require('@mixint/transflect')
let fs = require('fs')

/**
 * @extends Transflect
 * no need to _open(source) a stream here, source is available as this.source
 */
module.exports = class PathUnlink extends Transflect {
    constructor(options){
        super(options)
    }

    /**
     * set statusCode 204 finished delete, no content to return
     * if unlink calls done with an error, PathUnlink emits error,
     * ServerFailSoft writes error object to client and overwrites statusCode
     */
    _flush(done){
        this.statusCode = 204
        fs.unlink(this.source.pathname, done)
    }
}
