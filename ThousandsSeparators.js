function Thousandpoints(Number) {

Number=Number.toString();

if (Number.length > 3) {

  for(i=0;i<=Number.length;i=i+4) {

      let a=Number.substr(0, Number.length-i);
      let b=Number.substr(Number.length-i, Number.length);
      Number=a + "." + b;

  }

  if (Number.substr(0, 1) == ".") {

    Number=Number.substr(1, Number.length);

  }

  if (Number.substr(Number.length-1, Number.length) == ".") {

    Number=Number.substr(0, Number.length-1);

  }

}

return Number;

}
