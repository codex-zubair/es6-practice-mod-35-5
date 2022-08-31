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
        eyes: 'brow',
        hair: 'black',
        age: 27,
    },



    result: function()
    {
        return "My eyes are " + this.bodyStructure.eyes;        
    },



    result2: ()=>  {
        return 'this Result 2 Cant access inside object.'
    }

}


console.log(object1);
console.log(object1.result());


// !END Problem 1