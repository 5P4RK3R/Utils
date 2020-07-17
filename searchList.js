//search List 
searchFilter(list, value)=> {
    return list.filter(x => new RegExp(value, "i").test(Object.values(x)));
  }