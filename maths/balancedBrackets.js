const balancedbrackets = (str) => {
    const stack = [];
    let openers = ["{", "[", "("];
    let closers = ["}", "]", ")"];
    
    const dict = {
      "{" : "}",
      "[" : "]",
      "(" : ")"
    }
  
    for(let i = 0; i < str.length; i++) {
          let char = str[i];
          if(openers.includes(char)) {
              stack.push(char);
          }
          else if(closers.includes(char)) {
              //is our stack empty? 
  
              if(!stack.length) {
                  return false;
              }
              //does our popped element not match the corresponding element?
              else if(dict[stack.pop()] !== char) {
                  return false;
              }
          }
      }
      
      return stack.length === 0;