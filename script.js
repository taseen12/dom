function process(){
  var person = document.getElementById("nameBox").value ; 
  
  var totalmarks = parseInt(document.getElementById("marksBox").value) ; 
  let message;

  if (totalmarks >= 90 ) {
   msg=  ` <h4>Hello ${person}, your grade is 4.00,TOP </h4>`; 
  }
  else if (totalmarks >= 85 ) {
    msg=  ` <h4>Hello ${person}, your grade is 3.7 </h4>`;
  }
  else if (totalmarks >= 80 ) {
    msg=  ` <h4>Hello ${person}, your grade is 3.3 </h4>`;
  }
  else if (totalmarks >= 75 ) {
    document.getElementById("content").innerHTML= 
    `
    <h4>Hello ${person}, your grade is 3.0 </h4>
    `
    ; 
  }
  else if (totalmarks >= 70 ) {
    document.getElementById("content").innerHTML= 
    `
    <h4>Hello ${person}, your grade is 2.7 </h4>
    `
    ; 
  }
  else if (totalmarks >= 65 ) {
    document.getElementById("content").innerHTML= 
    `
    <h4>Hello ${person}, your grade is 2.3 </h4>
    `
    ; 
  }
  else if (totalmarks >= 60 ) {
    document.getElementById("content").innerHTML= 
    `
    <h4>Hello ${person}, your grade is 2.0 </h4>
    `
    ; 
  }
  else if (totalmarks >= 55 ) {
    document.getElementById("content").innerHTML= 
    `
    <h4>Hello ${person}, your grade is 1.7 </h4>
    `
    ; 
  }
  else if (totalmarks >= 50 ) {
    document.getElementById("content").innerHTML= 
    `
    <h4>Hello ${person}, your grade is 1.3 </h4>
    `
    ; 
  }
  else if (totalmarks >= 45 ) {
      document.getElementById("content").innerHTML= 
    `
    <h4>Hello ${person}, your grade is 1.0 </h4>
    `
    ; 
    }
    else   {
      document.getElementById("content").innerHTML= 
    `
    <h4>Hello ${person}, your grade is 0.0 / Fail </h4>
    `

    ; 
    }
    document.getElementById("content").innerHTML = msg}
    console.log(content)
