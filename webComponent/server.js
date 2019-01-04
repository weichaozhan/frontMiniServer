const http = require('http')
const fs = require('fs')
const path = require('path')
const mime = require('mime')

let cache = {}

// 辅助函数

/**
 * @description 404 处理
 */
function send404(response) {
  response.writeHead(404, {
    'Content-Type': 'text/plain'
  })
  response.write('Error 404: resource not found.')
  response.end()
}

/**
 * @description 文件数据
 */
function sendFile(response, filePath, fileContents, isGzip) {
  const headers = {
    'Content-Type': mime.getType(path.basename(filePath)),
  }

  if (isGzip) {
    headers['Content-Encoding'] = 'gzip'
  }
  
  response.writeHead(200, headers)
  response.end(fileContents)
}

/**
 * @description 静态文件服务
 */
function serveStatic(response, cache, absPath) {
  const gzPath = absPath + '.gz'
  // const gzPath = 'absPath'
  
  fs.exists(gzPath, function(existsGZ) {
    if (existsGZ) {
      fs.readFile(gzPath, function(err, data) {
        if (err) {
          send404(response)
        } else {
          cache[gzPath] = data
          sendFile(response, gzPath, data, true)
        }
      })
    } else {
      fs.exists(absPath, function (exists) {
        // 检查 文件是否存在
        if (exists) {
          fs.readFile(absPath, function(err, data) {
            if (err) {
              send404(response)
            } else {
              cache[absPath] = data
              sendFile(response, absPath, data)
            }
          })
        } else {
          send404(response)
        }
      })
    }
  })

}

// 创建服务
const server = http.createServer(function(request, response) {
  let filePath = false

  if (request.url === '/') {
    filePath = './index.html'
  } else {
    if (!/\.\S*$/.test(request.url)) {
      filePath = './index.html'
    } else {
      filePath = './' + request.url
    }
  }

  let absPath = './' + filePath.replace(/\?+\S*/, '')

  serveStatic(response, cache, absPath)
})

server.listen(3002, function () {
  console.log('Server listening on port 3002')
})