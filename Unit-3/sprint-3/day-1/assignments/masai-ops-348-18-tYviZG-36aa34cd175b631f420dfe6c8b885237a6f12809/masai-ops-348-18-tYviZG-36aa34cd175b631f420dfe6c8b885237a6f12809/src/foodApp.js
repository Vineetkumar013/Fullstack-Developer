const getCategoriesData = async () => {
  // code here
  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  try {
    let res =await fetch(url)
  let getcat = await res.json()
  return getcat
  console.log(getcat)
  } catch (error) {
    return "something went wrong"
    // console.log("something went wrong")
  }
 
};

const getIngredientData = async () => {
  let url2 = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  try {
    let res =await fetch(url2)
  let getingred = await res.json()
  return getingred
  console.log(getingred)
  } catch (error) {
    return "something went wrong"
    // console.log("something went wrong")
  }
  
};

window.onload = function () {
  //  get the buttons here and add click event
  let getCategoriesData = document.getElementById("get-category-data")
  getCategoriesData.addEventListener("click", function(){
    getCategoriesData.then((data)=>console.log(data))
  })
  let getIngredientData = document.getElementById("get-ingredient-data")
  getIngredientData.addEventListener("click",function(){
    getIngredientData.then((data)=>console.log(data))
  })
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
