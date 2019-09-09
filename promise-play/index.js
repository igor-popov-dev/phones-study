const p1 = new Promise((res, rej)=> {
  setTimeout(()=>{
    console.log('start');
    res('JavaScript');
  },2000)
})

const p2 = p1
  .then((data)=>{
    console.log('step 1', data);
  })
  .then((data)=>{
    console.log('step 2', data);
  })
  .then((data)=>{
    console.log('step 3', data);
    return Promise.resolve('TypeScript')
  })
  .then((data)=>{
    console.log('step 4 ', data);
  })

setTimeout(() => {
  console.log('start timeout');
  p .then((data)=>{
    console.log(data);
    console.log(data);
    console.log(data);
    console.log(data);
  })
},5000)