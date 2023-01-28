
  let marksArray=[];
  function studentData(firstName,lastName,age,marksArray,...hobbies) {

    return{
      fullName:`${firstName} ${lastName}`,
      age:age,
      hobbies:hobbies,
      getInfo:function(){
        return `${firstName} ${lastName}'s age is ${age}.`
  
      },
      getResult:function(){
        let sum=0;
        let l=marksArray.length;
        for(let i=0;i<l;i++){
          sum+=marksArray[i]
        }
        if(sum/l<50){
          return "Result: FAIL"
        }
        return "Result: PASS"
      }
    }
    
     }
    

studentData("Vivek", "Agrawal", 38, [50, 60, 70],'Singing', 'Coding', 'Meditating' )

export {studentData}