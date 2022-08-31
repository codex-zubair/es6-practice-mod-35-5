// ! Problem 1
/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। 
সেই অবজেক্ট এর মিনিমাম 6 প্রপার্টি থাকবে।
 তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। */


const object1 = {
    name: "Joy",
    roll: 10,
    male: true,
    favoriteFood: ['alu vaji', 'dal', 'pizza', 'pasta'],

    bodyStructure:
    {
        bodyColor: 'black',
        eyes: 'brown',
        hair: 'black',
        age: 27,
    },



    result: function () {
        return "My eyes are " + this.bodyStructure.eyes;
    },



    result2: () => {
        return 'this Result 2 Cant access inside object.'
    }

}


// console.log(object1);
// console.log(object1.result());




// !Problem 2
/*  ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।
 এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।
 */


const temp = `This is Template String Nested One ${object1.bodyStructure.age} this name ${object1.favoriteFood[1]} i'll call the function ${object1.result()}`;


// console.log(temp);




// !Problem 3
// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।

const zero = () => {
    return 89;
};

// console.log(zero());



//! Problem 4
/* ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। */


const one = (a) => {
    return a / 17;
}

// console.log(one(103));




// !Problem 5

/* ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। 
এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। 
সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। */

const two = (a, b) => {
    return a + b;
}

// console.log(two(10,10));








// !Problem 6
/* ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। 
সেটাতে দুইটা প্যারামিটার নিবে।
 ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। 
 সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর 
 সাথে ৭ যোগ করবে 
 তারপর যোগফল দুইটাকে আবার যোগ করবে।
  ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। */


const multiLine = (a, b) => {
    while (true) {
        a += 7;
        b += 7;
        console.log(a + b);
    }
}

// multiLine(10,12);




// !Problem 7
/* ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। 
প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
 */

const arr = [1232, 32, 3, 23, 2, 3, 2, 32, 43, 3, 54, 3, 5, 56, 756, 7, 56];

const nextArr = arr.map(itme => itme / 7);
// console.log(nextArr);






// !Problem 8
/* ৫. জাভাস্ক্রিপ্ট এ array এর map
=> map will operation into an array and after each element operation map will return the each value inside and array...

forEach
=> forEach almost like an map but doesn't give return array value as like map...



filter
=> Filter will take only true or false value inside array with conditon... of antoher array value by logically


, find 
=> find as like filter but it will only start from zero index and give the return first true value...
কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।
 */








// !Problem 9

/* ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 


array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

 */

// ! 1 Number
let { apple,book } = {
    apple: [11,22,3,44,5],
    book: 10,
}
const balance =  book;

console.log(book);
console.log(balance);


// ! 2 nubmer
let object = {
    name: 'apple',
    price: 20,
}


const {name,price} = object;
 balcen = price;
 console.log(price);






// // destructuring object & nested object & combine object into single object
// let user = {
//     name: 'Mike',
//     friend: ["John", "Paul", "Jimmy"],
//     location: {
//       region:"England",
//       country:"United Kingdom"
//     },
//     aboutMe: {
//       status: "Single",
//       pet: "Dog",
//     }
//   }
  
//   const { name, friend, location, aboutMe: {status , pet} } = user;
  
//   console.log(name); // output: "Mike"
//   console.log(friend);  // output: [ 'John', 'Paul', 'Jimmy' ]
//   console.log(location); // output: { region: 'England', country: 'United Kingdom' }
//   console.log(status); // output: "Single"
//   console.log(pet); // output: "Dog"






/* ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে।
 ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 
 
 তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
 */






/* ৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে।
 */




/* ৯. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা।

 */





/* 
১০. সিরিয়াস প্রাকটিস

হয় মডিউল 34 ভালো করে দেখে ফেলো। বিশেষ করে the meal db রি তারপরে আরো সময় থাকলে এর আরেকটা খালতো ভাই the coktaildb থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। */