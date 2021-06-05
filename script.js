let result= document.querySelector(".result");


const remov = ()=> result.value= "";

const backspace = ()=> result.value= result.value.substring(0, result.value.length -1);


const percentage = ()=> result.value += "%";


const div = ()=>  result.value += "/";


const mul = ()=> result.value += "*";


const add = ()=> result.value += "+";


const sub = ()=> result.value += "-";


const calc = (num)=>result.value += num;





const equals = ()=> {
  if(result.value.includes("%")){
    let value= parseInt(result.value.substring(0,result.value.indexOf("%")));
    result.value = (value/100).toString();
  }else {
    result.value = eval(result.value);
  }
}
