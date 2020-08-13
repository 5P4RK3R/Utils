//Get Range of List
 range = (start, end, step)=> {
    let arr = [],
      len = 0;
  
    step = step === undefined ? 1 : step;
  
    if (arguments.length === 1) {
      len = start;
      start = 0;
      end = start;
    } else {
      start = start === undefined ? 1 : start;
      end = end === undefined ? 1 : end;
      len = end - start;
    }
  
    var i = 0;
    while (i < len) {
      arr.push(start + i * step);
  
      i += 1;
    }
  
    return  arr;
  }