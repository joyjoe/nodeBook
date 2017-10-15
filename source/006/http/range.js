// Request:
// range: bytes=[start]-[end]

// Response:
// Accept-Ranges: bytes
// Content-Range: bytes [start]-[end]/[total]

module.exports = function range(total, req, res){
  let rangeStr = req.headers["range"];
  if(!rangeStr){
    return {
      "code": 200
    };
  }
  // let range = rangeStr.match(/bytes=([\d+|*])-([\d+|*])/);
  let range = rangeStr.match(/bytes=([\d*]+)-([\d*]+)/);
  let code, start, end;
  // let result = {code, start, end};
  if(!range){
    code = 200;
  }else{
    start = parseInt(range[1] || 0);
    end = parseInt(range[2] || total-1);
    console.log("total, start, end = ", total, start, end)

    if(start > end || start < 0 || end > total){
      code = 416;
    }else{
      code = 206;
    }
  }
  return {
    code,
    start,
    end
  };
};