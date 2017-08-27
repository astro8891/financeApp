var csv = require('csv'),
var dragDrop = require('drag-drop')

dragDrop('#dropTarget', function (file) {
    console.log('Here are the dropped files', file)

    files.forEach(function (file) {
        console.log(file.name)
        console.log(file.size)
        console.log(file.type)
        console.log(file.lastModifiedData)
        console.log(file.fullPath)

    })
});