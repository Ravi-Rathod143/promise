// Problem :  1
// Create a Promise that resolves after 2 seconds and prints a message.
//===>
// const myPromise=new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve("hello ji i call you after 2 second")
//     }, 2000);
// }) // resolve zalya chya nantr .then call kr
// myPromise.then((msg)=>console.log(msg))

// 2. Handling Promise Rejection
// Problem:
// Create a Promise that rejects with an error after 3 seconds.
///====>
// const myPromise=new Promise((_,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("something is wrong here please verify it !!!"))
//     },2000)
// })
// myPromise.catch((err)=>{
//     console.error(err);

// })

// 3. Promise Chaining (Basic)
// Problem:
// Chain two Promises. The second Promise should run after the first Promise resolves.
//====> Explanation:
//          firstPromise resolve झाल्यावर दुसरा promise then() मध्ये chain होतो.
//          Promise chaining असे करणे नेहमीच छान आहे.

// const myFirstPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("my first promise is resolved 2second")
//     },2000)
// })
// myFirstPromise.then((mgs)=>{
//     console.log(mgs)
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("second promise resolve kr after the 4 second")
//         },4000)
//     })
// }).then((msg)=>{
//     console.log(msg)
// })

// 4. Promise.all() with Multiple Promises
// Problem:
// Run multiple Promises in parallel and wait for all of them to resolve.

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 1 is resolved"),2000})
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 2 is resolved"),2000})
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 3 is resolved"),2000})
// })
// Promise.all([p1,p2,p3])
// .then((msg)=>{
//     console.log(msg)
// })

// 5. Handling Multiple Errors with Promise.all()
// Problem:
// Handle errors when any promise in a Promise.all() array fails.

// const p1=new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("promise 1 is resolved"),2000})
// })

// const p2=new Promise((_,reject)=>{
//     setTimeout(()=>{
//         reject("promise 2 is rejected"),3000})
// })

// const p3=new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("promise 3 is resolved"),4000})
// })
// const p4=new Promise((_,reject)=>{
//     setTimeout(()=>{
//         reject("promise 4 is rejected"),4000})
// })
// const p5=new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("promise 5 is resolved"),2000})
// })

// Promise.all([p1,p2,p3,p4,p5])
// .then((msg)=>console.log(msg))
// .catch((error)=>console.error("Error ",error))

///// promise with RETRY MECHANISM

// function fetchDataWithRetry(attempt){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let success=Math.random()>0.5
//         if(success){
//             resolve("data fetch successfully")
//         }
//         else{
//             reject("failed to data fetch")
//         }
//         },5000)

//     })// setTtimeOut zalyavr kiti attemp sillak rahila or kiti attenpt left
//     .catch((error)=>{
//         if(attempt<3){
//             console.log(`retrying... attempt left  ${attempt-1}`);
//             return fetchDataWithRetry(attempt-1)
//         }
//         throw error;
//     })
// }

// fetchDataWithRetry(3)
// .then((msg) => {
//     console.log(msg)

// }).catch((err) => {
//     console.log("Error ",err);

// });

// 11. Chaining Multiple Promises Sequentially
// Problem:
// Chain multiple promises where each one depends on the previous one.

// function firstTask() {
//     return new Promise((resolve) => setTimeout(() => resolve("First task complete"), 2000));
// }

// function secondTask() {
//     return new Promise((resolve) => setTimeout(() => resolve("Second task complete"), 1500));
// }

// function thirdTask() {
//     return new Promise((resolve) => setTimeout(() => resolve("Third task complete"), 1000));
// }
// firstTask()
// .then((result) => {
//     console.log(result);
//     return secondTask()
// }).then((msg)=>{
//     console.log(msg);
//     return thirdTask()
// }).then((msg)=>{
//     console.log(msg);

// })

// 13. Parallel Execution with Error Handling
// Problem:
// Execute multiple promises concurrently and handle errors individually.
///=====>

    // const task1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 complete"), 2000));
    // const task2 = new Promise((_, reject) => setTimeout(() => reject("Task 2 failed"), 1500));
    // const task3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 complete"), 1000));
    
    // Promise.allSettled([task1, task2, task3])
    //     .then((results) => {
    //         results.forEach((result) => {
    //             if (result.status === "fulfilled") {
    //                 console.log(result.value);
    //             } else {
    //                 console.error(result.reason);
    //             }
    //         });
    //     });
        
    


















    




































































































