function func(f){
  let once = false;

  return function(){
    if(!once){
      once = true;
      return f();
    }
  };
}

function greet(){
  console.log("Good Morning");
}

const greet1 = func(greet);

greet1();
greet1();
greet1();