const spinner = function() {
  let time = 100;
  while (time < 3000) {
    let symbols = ['|', '/', '-', '\\'];
    let index = 0;
    setTimeout(() => {
      process.stdout.write(`${symbols[index]}   `);
    }, time, time += 200, index += 1);
  
    if (index === 4) {
      index = 0;
    };
  };
}

spinner();
