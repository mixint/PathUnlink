# PathUnlink

PathUnlink is a [Transflect](http://github.com/mixint/transflect) stream released with [MIXINT](http://github.com/mixint/mixint) v0.1.0. It does nothing else but call 'fs.unlink' on the full pathname described in the incoming URL, and return a 204 on success or an error message otherwise.
