function rot13(str) {

  let arr = str.split("");
  console.log(arr);

  arr = arr.map(a => a.charCodeAt(a))

  console.log(arr);

  //arr = arr.map(a => a+13);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 13 >= 91) {
      arr[i] = arr[i] - 13;
    } else if (arr[i] > 64 && arr[i] < 91) {
      arr[i] = arr[i] + 13;
    }
  }

  console.log(arr);

  /*
  arr = arr
  .filter(a => {if (a >= 91) { 
  }})
  .map(a => a-26);
  */

  console.log(arr);

  arr = arr.map(a => String.fromCharCode(a));

  console.log(arr);

  str = arr.join("");

  console.log(str);
  return str;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
