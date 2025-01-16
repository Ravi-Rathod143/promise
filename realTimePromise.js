// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; // Assume API call success आहे
//             if (success) {
//                 resolve({ name: "Rahul", age: 25 });
//             } else {
//                 reject("User data fetch fail झाली!");
//             }
//         }, 2000); // 2 सेकंद simulate केले
//     });
// }

// fetchUserData()
//     .then((user) => {
//         console.log("User Data:", user);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });


//----------------------------------------------------------------------------------
// function uploadFile(fileName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const isUploaded = Math.random() > 0.5; // Random success/fail
//             if (isUploaded) {
//                 resolve(`${fileName} upload झाली!`);
//             } else {
//                 reject(`${fileName} upload fail झाली!`);
//             }
//         }, 3000); // 3 सेकंद simulate केले
//     });
// }

// uploadFile("Resume.pdf")
//     .then((message) => console.log("Success:", message))
//     .catch((error) => console.log("Error:", error));

//----------------------------------------------------------------------------------

            // Example 3: Multiple Promises - Product Ordering System
// तुमचं कंपनीचं e-commerce platform आहे. Customer ने Order दिला आहे. Order चे 3 steps आहेत:

// Payment Processing
// Packing Order
// Shipping Complete
// javascript
// Copy
// Edit

// =====>>

// function paymentProcessing(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//                 resolve("your payment are processing ")
//         },2000)
//     })
// }


// function packingOrder(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//                 resolve("your order is packed... ")
//         },3000)
//     })
// }

// function Shipping(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//                 resolve(" shipping iis completed")
//         },4000)
//     })
// }

// paymentProcessing()
// .then((res)=>{
//     console.log(res)
//     return packingOrder()
// })
// .then((res)=>{
//     console.log(res)
//     return Shipping()
// })
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log("Error  ",err)
// })


// Example 4: Promise.all - Parallel Task Execution
// तुमचं कंपनीचं app 3 वेगवेगळ्या API calls करून data मिळवतं. तुम्हाला ही कामं एकत्र (parallel) करायची आहेत.

// function fetchProduct(){
//     // promise return krun deto ya function la
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("ypur product is fetched...")
//         },2000)
//     })
// }
// function fetchData(){
//     return new Promise((res,rej)=>{
//         res("your data is fetch successfully...")
//     },3000)
// }
// function oneMoreExample(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             rej(new Error("Erroe are found ..."))
//         },4000)
//     })
// }
// Promise.all([fetchProduct,fetchData,oneMoreExample])
// .then((result)=>{
//     console.log("all result data  ",result)
// })
// .catch((err)=>{
//     console.log("data are not found",err)
// })








