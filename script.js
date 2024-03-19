let son = +prompt('son yozing')
while(isNaN(son) || son==0){
  son= +prompt('iltimos son kiriting')
}

let last = ''

for(let i = 0 ; i < son; i++){
  for(let p = 0 ; p < son; p++){
    if(p == i || i == 0|| p == 0 || p == son - 1 || i == son -1){
      last += '⬛'
    }
    else{
      last += '⬜'
    }
  }
  console.log(last);
  last=''
}