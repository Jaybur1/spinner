const spinner = ['\r|','\r/','\r-','\r\\']
let timeout = 100;

spinner.forEach(el => {
  setTimeout(()=>{
    process.stdout.write(el);
  }, timeout)
  timeout += 200;
});