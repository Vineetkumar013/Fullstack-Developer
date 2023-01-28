// let prateekMarksData = {
//     name: "Prateek",
//     subject1: "Javascript",
//     subject2: "HTML",
//     subject3: "CSS",
//     subject4: null,
//     subject5: null,
//     marks1: 90, 
//     marks2: 81,
//     marks3: 80,
//     marks4: null,
//     marks5: null,
//   }
  
//   let nrupulMarksData = {
//     name: "Nrupul",
//     subject1: "Java",
//     subject2: "Python",
//     subject3: null,
//     subject4: null,
//     subject5: null,
//     marks1: 95, 
//     marks2: 85,
//     marks3: null,
//     marks4: null,
//     marks5: null,
//   }
  
//   let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
  
//   let massagedData = allStudentsMarksData.map((item) => {
//     // console.log(item.prateekMarksData)
    
//      let obj = {};
//          obj['name'] =item.name;
//          obj['marks']=[];
     
        
        
//   for (let i = 1; i <=5; i++){
//     item[`subject${i}`] && item.subject1 && obj['marks'].push({subject: item[`subject${i}`], score: item[`marks${i}`]});
//   }
  
//         //  item.subject1 && obj['marks'].push({subject:item.subject1,score:item.marks1});
//         //  item.subject2 && obj['marks'].push({subject:item.subject2,score:item.marks2});
//         //  item.subject3 && obj['marks'].push({subject:item.subject3,score:item.marks3});
//         //  item.subject4 && obj['marks'].push({subject:item.subject4,score:item.marks4});
//         //  item.subject5 && obj['marks'].push({subject:item.subject5,score:item.marks5});
  
    
//     return obj;
//   });
  
//   console.log(massagedData);
  
//   /*
//    ------------------------------------------------
//    massage the `allStudentsMarksData` to get a new 
//    array called `massagedData`
  
//    Instead of separate enties for 5 subjects and their marks,
//    in the new array, we just have one entry called marks. 
//    marks is an array of objects. the objects of marks
//    contains subject and score.
//    ------------------------------------------------
  
//     Expected output from `massagedData`
  
//     [
//        {
//          name: "Prateek", 
//          marks: [
//            {subject: 'HTML', score: 81},
//            {subject: 'CSS', score: 80}
//          ]
//        },
//        {
//          name: "Nrupul", 
//          marks: [
//            {subject: 'Java', score: 95},
//            {subject: 'Python', score: 85}
//          ]
//        },
  
//     ]
  
//   */


// export {massagedData};





let prateekMarksData = {
  name: "Prateek",
  subject1: null,
  subject2: "HTML",
  subject3: "CSS",
  subject4: null,
  subject5: null,
  marks1: 90, 
  marks2: 81,
  marks3: 80,
  marks4: null,
  marks5: null,
}

let nrupulMarksData = {
  name: "Nrupul",
  subject1: "Java",
  subject2: "Python",
  subject3: null,
  subject4: null,
  subject5: null,
  marks1: 95, 
  marks2: 85,
  marks3: null,
  marks4: null,
  marks5: null,
}

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];

let massagedData = allStudentsMarksData.map((item) => {
  let obj = {};
  
  obj['name'] = item.name;
  obj['marks'] = [];
  
  for (let i = 1; i <=5; i++){
    item[`subject${i}`] &&  obj['marks'].push({subject: item[`subject${i}`], score: item[`marks${i}`]});
  }
  
  
  return obj;
})

console.log(massagedData);

/*
 ------------------------------------------------
 massage the `allStudentsMarksData` to get a new 
 array called `massagedData`

 Instead of separate enties for 5 subjects and their marks,
 in the new array, we just have one entry called marks. 
 marks is an array of objects. the objects of marks
 contains subject and score.
 ------------------------------------------------

  Expected output from `massagedData`

  [
     {
       name: "Prateek", 
       marks: [
         {subject: 'Javascript', score: 90},
         {subject: 'HTML', score: 81},
         {subject: 'CSS', score: 80}
       ]
     },
     {
       name: "Nrupul", 
       marks: [
         {subject: 'Java', score: 95},
         {subject: 'Python', score: 85}
       ]
     },

  ]

*/

export {massagedData};