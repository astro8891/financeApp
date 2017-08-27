fs = require('fs'),
http = require('http'),
csv = require('csv')
dragDrop = require('drag-drop')

dragDrop('#dropTarget', function (files) {
    console.log('Here are the dropped files', files)

    files.forEach(function (file) {
        console.log(file.name)
        console.log(file.size)
        console.log(file.type)
        console.log(file.lastModifiedData)
        console.log(file.fullPath)

    })
});