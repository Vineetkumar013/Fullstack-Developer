// All the JS Code for the Add Students Page Goes Here
let admission_form = document.querySelector("form")
let LSData =JSON.parse(localStorage.getItem("admission"))||[];
admission_form.addEventListener("submit",function(event){
    event.preventDefault();
let obj ={
        name:admission_form.name.value,
        email:admission_form.email.value,
        phone:admission_form.phone.value,
        gender:admission_form.gender.value,
        course:admission_form.course.value,
}
if(obj.name==""||obj.email==""||obj.phone==""||obj.gender==""||obj.course==""){
    alert("please fill the form")
}else{
    LSData.push(obj)
    localStorage.setItem("admission",JSON.stringify(LSData))
}



})