const decimalStr = (str) => {
  const newStr = str.split(" ");
  // Tạo một chuỗi mới với ký tự đầu tiên thay đổi thành "a"

  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < newStr[i].length; j++) {
      newStr[i] = newStr[i][j].charCodeAt() + newStr[i].slice(j+1);
    }
    

   
  }
  console.log(newStr[0].slice(1));
  return newStr.join(" ");
};

console.log(decimalStr("the anh"));
