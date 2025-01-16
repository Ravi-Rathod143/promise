//  1 image selection 4 second
//  2 filter 2second  
// caption 3sec
// uploading image 2 sec

const step1=()=>{
    console.log("please wait selecting image")
    return new Promise((resolve,reject)=>{
        resolve(" step 1 => selected image")
    },4000)
}
const step2=(image)=>{
    console.log(`please applying some fileter to this image => ${image}`)
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("step 2 => filtered images ")
        },5000)
    })
}

const step3=(filter)=>{
    console.log(`please wait adding some caption ${filter}`)
    return new Promise((resolve)=>{
        resolve("step 3=> caption adding")
    },6000)
}
const step4=(uploadedImages)=>{
    console.log(`please wait uploading image ${uploadedImages}`)
    return new Promise((resolve)=>{
        resolve("step 4 => image uploadedd re ....")
    },7000)   
}

step1()
.then((image)=>{
    console.log("step1 chya THEN madhun ahe mi ",image)
    return step2(image)
})
.then((filter)=>{
    console.log("step2 chya then madheun ahe mi ",filter)
    return step3(filter)
})
.then((caption)=>{
    console.log("step3 chya then madheun ahe mi ",caption)
    return step4(caption)
})
.then((uploadedImages)=>{
    console.log("step4 chya then madheun ahe mi ",uploadedImages)
    
}).catch((err)=>{
    console.log("Error ahe re baba kuch to ",err)
})
















































