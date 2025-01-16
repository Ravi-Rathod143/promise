
// // // // 1. Single Promise Example - User Signup Flow
// // // // Problem:
// // // // User Signup करताना तुम्हाला:

// // // // a) Database मध्ये user data save करायचं.
// // // // b) Email verification request पाठवायचं.
// // // // c) Success response द्यायचं.

// // // function databaseMadheSavekr(data){
// // //     return new Promise((res,rej)=>{
// // //         setTimeout(() => {
// // //             res(`your name is database ${data.name} ${data.email}`)
// // //         },2000)
// // //     })
// // // }
// // // function emailChVerificationKr(email){
// // //     return new Promise((res,rej)=>{
// // //         setTimeout(() => {
// // //             res(`your email varification ${email}`)
// // //         },3000)
// // //     })
// // // }
// // // function success(data){
// // //     databaseMadheSavekr(data)
// // //     .then((data)=>{
// // //         console.log("from database he he he  ",data)
// // //         // console.log(data)
// // //         return emailChVerificationKr(data.email)
// // //     })
// // //     .then((res)=>{
// // //         console.log("form email varification  ",res)
// // //     }).catch((err)=>{
// // //         console.log("error : ",err)
// // //     })
// // // }


// // // success({ name: "Rahul", email: "rahul@example.com" })



// // // 8. Progressive Loading - Large Data Fetch with Pagination
// // // Problem:
// // // तुमच्या App ला मोठ्या data set (e.g., 10,000 records) एकाच वेळी load करणं शक्य नाही. त्यामुळे तुम्हाला pagination किंवा chunk-wise data load करायचं आहे.

// // ////====>
// //     function fetchDataChunk(page) {
// //         return new Promise((resolve) => {
// //             setTimeout(() => resolve(`Page ${page} चे data मिळाले`), 1000);
// //         });
// //     }
    
// //     async function fetchAllData(totalPages) {
// //         for (let page = 1; page <= totalPages; page++) {
// //             const data = await fetchDataChunk(page);
// //             console.log(data);
// //         }
// //         console.log("सगळं data मिळालं!");
// //     }
    
// //     fetchAllData(5); // 5 pages चे data क्रमाक्रमाने मिळतील
    






// // 11. Dynamic Retry Logic for Unstable Services
// // Problem:
// // Unstable services साठी dynamic retries implement करायचं आहे (e.g., backoff delay वाढवत जावं)

// // function unstableService() {
// //     return new Promise((resolve, reject) => {
// //         const success = Math.random() > 0.7; // Random success/failure
// //         setTimeout(() => {
// //             if (success) resolve("Service यशस्वी");
// //             else reject("Service Fail");
// //         }, 1000);
// //     });
// // }

// // async function callWithDynamicRetry(maxRetries) {
// //     for (let i = 0; i < maxRetries; i++) {
// //         try {
// //             const result = await unstableService();
// //             console.log(result);
// //             return;
// //         } catch (error) {
// //             console.log(`Attempt ${i + 1} failed.`);
// //             await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1))); // Backoff delay
// //         }
// //     }
// //     console.log("सर्व attempts fail झाले.");
// // }

// // callWithDynamicRetry(5);




// 12. Task Batching System
// Problem:
// 10 tasks आहेत, पण तुम्ही एका वेळी फक्त 3 tasks execute करू शकता.

// Solution:
// javascript
// Copy
// Edit
// function taskHandler(taskId) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`Task ${taskId} पूर्ण झाली`), 2000);
//     });
// }

// async function batchProcess(tasks, batchSize) {
//     for (let i = 0; i < tasks.length; i += batchSize) {
//         const batch = tasks.slice(i, i + batchSize).map(taskHandler);
//         const results = await Promise.all(batch);
//         console.log("Batch Complete:", results);
//     }
//     console.log("सर्व Task पूर्ण!");
// }

// const tasks = Array.from({ length: 10 }, (_, i) => i + 1);
// batchProcess(tasks, 3); // एका वेळी 3 task
// 13. Data Transformation Pipeline
// Problem:
// Data pipeline तयार करायचं आहे जिथे:

// Raw data fetch करा.
// Transform करा.
// Final data save करा.
// Solution:
// javascript
// Copy
// Edit
// function fetchRawData() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve([1, 2, 3]), 2000);
//     });
// }

// function transformData(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(data.map((num) => num * 10)), 1500);
//     });
// }

// function saveData(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`Data Save झालं: ${data}`), 1000);
//     });
// }

// async function dataPipeline() {
//     const rawData = await fetchRawData();
//     console.log("Raw Data:", rawData);

//     const transformedData = await transformData(rawData);
//     console.log("Transformed Data:", transformedData);

//     const result = await saveData(transformedData);
//     console.log(result);
// }

// dataPipeline();
// 14. Chained Error Recovery
// Problem:
// Task failure झाल्यावर recovery logic लागू करायचं आहे.

// Solution:
// javascript
// Copy
// Edit
// function primaryTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject("Primary Task Fail"), 1500);
//     });
// }

// function recoveryTask() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Recovery Task यशस्वी"), 1000);
//     });
// }

// primaryTask()
//     .catch((error) => {
//         console.log(error);
//         return recoveryTask();
//     })
//     .then((message) => console.log(message));
// 15. Real-time Polling using Promise
// Problem:
// Server update साठी polling logic तयार करायचं आहे (e.g., Payment Status Check).

// Solution:
// javascript
// Copy
// Edit
// function checkStatus() {
//     return new Promise((resolve, reject) => {
//         const status = Math.random() > 0.8 ? "Success" : "Pending";
//         setTimeout(() => {
//             if (status === "Success") resolve("Payment Successful");
//             else reject("Still Pending");
//         }, 2000);
//     });
// }

// async function pollStatus(retries) {
//     for (let i = 0; i < retries; i++) {
//         try {
//             const result = await checkStatus();
//             console.log(result);
//             return;
//         } catch (error) {
//             console.log(`Attempt ${i + 1}: ${error}`);
//         }
//     }
//     console.log("Payment Failed after multiple retries.");
// }

// pollStatus(5);









