function  getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
    let nested = document.querySelector("#nested")
    return nested.querySelector(".target")
}

function deepestChild(){
  let grand = document.querySelector("#grand-node")
  return grand.lastElementChild.lastElementChild.lastElementChild.lastElementChild
}

function increaseRankBy(n){

  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

    for (let i = 0; i < lis.length; i++) {
      lis[i].innerHTML = (parseInt(lis[i].innerHTML) + parseInt(n)).toString();
    }
}
