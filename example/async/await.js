const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log(1)
    reject(1)
  },100)
})
let fn = async ()=>{
  try{
    await promise
  }catch(e){
    console.log('error', e)
  }
}
fn()

