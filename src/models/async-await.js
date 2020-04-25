const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
    
        setTimeout(() => {
            if(a<0 || b<0){
                return reject('Number must greater than 0')
            }
            
            resolve(a+b)
            
        }, 2000);
    })
}

const doWork = async()=>{
    const sum = await add(-2,1)
    const sum1 =await add(sum,20)
    const sum2 = await add(sum1,32)
    return sum2
}

doWork().then((result)=>{
    console.log('Result',result)
}).catch((e)=>{
    console.log('Error',e)
})

