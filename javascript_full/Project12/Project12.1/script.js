    class Options { 
        met(height = 300, width = 200, bg = 'green', fontSize = 40, textAlign = 'left') {
            let div = document.createElement('newDiv');
            div.textContent = "Hello!";
            div.style.cssText = `background-color:${bg};font-size:${fontSize}px;text-align:${textAlign}`;
            document.body.appendChild(div);
        }
        
        
      }
   let a = new Options();
      a.met();