

let url="www.themealdb.com/api/json/v1/1/search.php?"//f=a
let menubtn=document.querySelectorAll('.mov-nav-ul li')
let allmenubtn=Array.from(menubtn)

console.log(allmenubtn)

const inputserchvalue=document.querySelector(".input-serch-aria")
const serchbtn=document.querySelector(".serch-btn")

serchbtn.addEventListener("click",function(e){
    e.preventDefault()
    const val=inputserchvalue.value;
    const inputcheck=function() {
   
        if(val.length===1){
                 return true;
        }else{
            return false
        }
   
}
   // console.log(inputcheck)
  return ( inputcheck()? fetchapi(val):fethwithword(val));
  // fetchapi(val):fethwithword(val)
})







async function fetchapi(val){
 let urll1=`https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`;
 let fethdata1=await fetch(urll1);
 let respo1=await fethdata1.json()
console.log(respo1.meals)
const cardbody=document.querySelector('.card-body');

for(let b=0 ; b <respo1.meals.length;b++){
    console.log(respo1.meals[b].strMealThumb);
    let cardbodyineer=document.createElement("div")
    cardbodyineer.classList.add("card");
    cardbodyineer.innerHTML=`
    <figure class="image-holder">

    <img src="${respo1.meals[b].strMealThumb}" class="imageis" alt="$">
</figure>

<div class="card-para-tit">
    <h5 class="tit">${respo1.meals[b].strMeal}</h5>
</div>

<div class="time-simble">

    <div class="time-place">


        <span class="material-symbols-outlined save-icone">
            schedule
        </span>

        <p class="timeis">23 minutes</p>


    </div>


    <div class="simblee">

        <span class="material-symbols-outlined">
            book
        </span>

    </div>
</div>
    `
    cardbody.appendChild(cardbodyineer)

}



}

async function fethwithword(val){
    let urll=`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`;
    let fethdata=await fetch(urll);
    let respo=await fethdata.json()
   //console.log(respo.meals)
   if(respo.meals===null){
    console.log("undifined word plese write it correctly")
   }
   }
   //fethwithword()


   allmenubtn.forEach(btn=>{
    btn.addEventListener("click",function(e){
        //console.log(e.target.innerHTML.trim())
        if(e.target.innerHTML.trim()=="menu"){

           // showcatagry()
         //  let catagrystyle=document.querySelector(".side-menu");
         //  catagrystyle.classList.toggle("menu-hide")
           console.log("hello")
           let catagrystyle=document.querySelector(".side-menu");
           catagrystyle.classList.toggle('menu-hide');
          let hisdistrue=catagrystyle.classList.contains("menu-hide")
         //  console.log(hisdistrue);



        }
    })
   })

   let script='https://www.themealdb.com/api/json/v1/1/categories.php';

   async function menucatogary(scr){
    
    let catagary=await fetch(scr)
    let responce=await catagary.json()
   console.log(responce.categories.length);
    let menulist=document.querySelector('.list-by-catagary')
  

for(let i=0 ; i<responce.categories.length ;i++){
   //d console.log(responce.categories[i].strCategory)
   let listt=document.createElement("li")
   listt.innerHTML=responce.categories[i].strCategory
   menulist.appendChild(listt)
}

   }
   menucatogary(script)