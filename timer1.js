let times = process.argv.slice(2);



for (const  time  of times ){
setTimeout(()=>{
  process.stdout.write('\x07')

},time*1000) 
}
