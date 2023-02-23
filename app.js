let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let body = document.querySelector("#body");
let formInput = document.getElementById("inputValue");
let formVal = Number(formInput.value);



function onKeyPress(e){
  if(typeof(formVal) === NaN ){

    document.querySelector('input').disabled = true;
  } else {
    
    document.querySelector('input').disabled = false;
  };

  e.preventDefault();
}

formInput.addEventListener('keypress', onKeyPress);



  function addToCart(e){
    let formInput = document.getElementById("inputValue");
    let formVal = Number(formInput.value);
    let newVal = formVal + 1;
  
    if(formVal === 0 || formVal != 0){
      document.querySelector("input").disabled = false;
      document.getElementById("inputValue").value =  newVal;
    };
  
    e.preventDefault();
  };
  
  plus.addEventListener('click', addToCart);
  
  
  
  
  function removeFromCart(e){
    let formInput = document.getElementById('inputValue');
    let formVal = Number(formInput.value);
    let newVal = formVal - 1;
  
    if(formVal === 0){
      document.querySelector('input').disabled = true;
      newVal = formVal + 0;
    } else {
      document.getElementById("inputValue").value = newVal;
    };
  
    e.preventDefault();
  };
  
  minus.addEventListener('click', removeFromCart);



function addToCart(e){
  let formInput = document.getElementById("inputValue");
  let formVal = Number(formInput.value);
  let newVal = formVal + 1;

  if(formVal === 0 || formVal != 0){
    document.querySelector("input").disabled = false;
    document.getElementById("inputValue").value =  newVal;
  };

  e.preventDefault();
};

plus.addEventListener('click', addToCart);
