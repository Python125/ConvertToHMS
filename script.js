(function (global) {
  let TimeConvert = (function () {
    function TimeConvert() {}
    
    TimeConvert.prototype.sec2min = function (time) {
      let min = Math.floor(time / 60);
      let sec = time % 60;
      
      return {
        min: min,
        sec: sec
      }
    }
    
    TimeConvert.prototype.min2hour = function (time) {
      let hour = Math.floor(time / 60);
      let min = time % 60;
      
      return {
        hour: hour,
        min:min
      }
    }
    
    TimeConvert.prototype.sec2hour = function (time) {
      const sec = (time % 3600) % 60;
      const min = Math.floor(time / 60) % 60;
      const hour = Math.floor(time / 3600);
      
      return {
        hour: hour,
        min: min,
        sec: sec
      }
    }
    
    return TimeConvert;
  })();
  
  global.TimeConvert = TimeConvert;
}(this));

window.onload = function () {
  let timeConvert = new TimeConvert();
  let result = document.getElementById('result');
  let buttons = document.getElementsByTagName('button');
  let button;
  for (let i=0; i<buttons.length; i++) {
    button = buttons[i];
    button.addEventListener('click', function () {
      let time = document.getElementById('time').value;
      let method = this.id;
      switch (method) {
        case 'sec2min':
          result.innerText = JSON.stringify(timeConvert.sec2min(time));
          break;
        case 'min2hour':
          result.innerText = JSON.stringify(timeConvert.min2hour(time));
          break;
        case 'sec2hour':
          result.innerText = JSON.stringify(timeConvert.sec2hour(time));
          break;
      }
        
          
    });
  }
}
