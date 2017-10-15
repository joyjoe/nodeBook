var path = require("path");
var fs = require("fs");

const mime = {
  "css": {
    "type": "text/css",
    "icon": "css"
  },
  "js": {
    "type": "text/javascript",
    "icon": "js"
  },
  "html": {
    "type": "text/html",
    "icon": "html"
  },
  "jpg": {
    "type": "image/jpeg",
    "icon": "jpg"
  },
  "gif": {
    "type": "image/gif",
    "icon": "gif"
  },
  "json": {
    "type": "application/json",
    "icon": "json"
  },
  "mp3": {
    "type": "audio/mp3",
    "icon": "mp3"
  },
  "mp4": {
    "type": "video/mpeg4",
    "icon": "mp4"
  },
  "folder": {
    "type": "",
    "icon": "folder"
  },
  "ico": {
    "type": "image/ico",
    "icon": "ico"
  },
  "text": {
    "type": "text/plain",
    "icon": "n/a"
  }
};

module.exports = function(filePath){
  var extname = path.extname(filePath).slice(1);
  if(!extname){
    return mime["folder"];
  }
  return mime[extname]? mime[extname]: mime["text"];
};