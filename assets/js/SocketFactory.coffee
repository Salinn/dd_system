Application.core.factory('socket', ($rootScope)->
    socket = io.connect()

    onn = (eventName, callback)->
        socket.on(eventName, ->
            args = arguments
            $rootScope.$apply(->
                callback.apply(socket, args)
            )
        )

    emit = (eventName, data, callback) ->
        socket.emit(eventName, data, ->
            args = arguments
            $rootScope.$apply(->
                if (callback)
                    callback.apply(socket, args)
            )
        )
    get = (path, param, cb) ->
        socket.get(path, param, cb)

    post = (path, param, cb) ->
        socket.post(path, param, cb)

    put = (path, param, cb) ->
        socket.put(path, param, cb)

    del = (path, param, cb) ->
        socket.delete(path, param, cb)

    return 'on': onn, 'emit': emit, 'get': get, 'post': post, 'put': put, 'delete': del
)