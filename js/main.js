
$(document).ready(function(){
let left;
let boxWidth = $(".side-Nav-left").outerWidth();
$("#btn").click(function () {
    left = $(".side-Nav").css("left")
    if (left == "0px") {
        // boxWidth = $(".side-Nav-left").outerWidth()
        $(".side-Nav").animate({ left: `-${boxWidth}px` }, 500);
        $("#btn").removeClass("fa-close").addClass("fa-align-justify");
    }
    else {
        $(".side-Nav").animate({ left: `0px` }, 500);
        $("#btn").removeClass("fa-align-justify").addClass("fa-close");
        
    }

});
let myHttp,
    myData,
    temp,
    myMeals = [],

    searchValue,

    myHttp2,
    myData2,

    myHttp3,
    myData3,
    myMeals3,
    categoriesList = [],

    myHttp4,
    myData4,
    AreaList = [],

    myHttp5,
    myData5,
    IngredientsList = [];


keyUpsearchByName = document.getElementById("Findmaels");
keyUpsearchFirstLetter = document.getElementById("FindmaelsFirstLetter");


async function getData() {
    myHttp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    myData = await myHttp.json();
    myMeals = myData.meals;
    // console.log(myData.meals[0].strMealThumb);
    displayMeal()
}
getData()

function displayMeal() {
    let temp = "";
    for (let i = 0; i < myMeals.length; i++) {
        temp += `
            <div class="col item" data-bs-toggle="modal" data-bs-target="#exampleModal" nameMeal2=${myMeals[i].strMeal}>
                <div class="h-100" >
                    <div class="inner-image rounded cursor-pointer" >
                        <img src="${myMeals[i].strMealThumb}" class="card-img-top" alt="images/logo.png">
                        <div class="layer">
                            <h5>${myMeals[i].strMeal}</h5>
                        </div>
                    </div>
                </div>
            </div>
    
        `;
    }

    document.getElementById("demo").innerHTML = temp;

    $(".item").click(function () {
        let nameMeal = $(this).attr("nameMeal2");
        console.log(nameMeal);
        getDetialsData(nameMeal);
        // console.log(this); 
    })


}

async function getDetialsData(id) {
    myHttp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
    myData = await myHttp.json();
    myMeals = myData.meals;
    console.log(myData.meals);
    displayMealDetials()
}


function displayMealDetials() {
    let temp = "";
    for (let i = 0; i < myMeals.length; i++) {
        temp += `
        <div class="col-md-4 col-sm-12 item text-white" nameMeal2=${myMeals[i].strMeal}>
            <img src="${myMeals[i].strMealThumb}" class="w-100" alt="">
            <h3 class="text-white text-center my-3">${myMeals[i].strMeal}</h3>
        </div>
        
        <div class="col-md-8 col-sm-12 text-white">
            <h3 class="text-white my-3" >Instructions</h3>
            <p class="text-white">${myMeals[i].strInstructions}</p>
            <div class="my-3">Area : <span>${myMeals[i].strArea}</span></div>
            <div class="my-3">Category : <span>${myMeals[i].strCategory}</span></div>

            <h3 class="text-white my-3">Recipes :</h3>
            <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure1}</span>
            <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure2}</span>
            <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure3}</span>
            <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure4}</span>
            <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure5}</span>
            <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure6}</span>

            <h3 class="text-white my-3">Tags :</h3>
            <div class="badge text-bg-info px-5 py-2 my-3">${myMeals[i].strTags}</div>
            <div class="my-3">
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            </div>

        </div>
        
            `;
    }

    document.getElementById("maelDitels").innerHTML = temp;



}

// ----------------------------- SearchSection Section------------------------------------
function SearchSection() {
    async function getSearchData() {
        myHttp3 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
        myData3 = await myHttp3.json();
        myMeals3 = myData3.meals;
        // console.log(myData3.meals[0].strMealThumb);
    }
    getSearchData()


// async function getDetialsDataS(id) {
//         myHttp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
//         myData = await myHttp.json();
//         myMeals = myData.meals;
//         console.log(myData.meals);
//         displayMealDetialss()
//     }
    
    
//     function displayMealDetialss() {
//         let temp = "";
//         for (let i = 0; i < myMeals.length; i++) {
//             temp += `
//             <div class="col-md-4 col-sm-12 item text-white" nameMeal2=${myMeals[i].strMeal}>
//                 <img src="${myMeals[i].strMealThumb}" class="w-100" alt="">
//                 <h3 class="text-white text-center my-3">${myMeals[i].strMeal}</h3>
//             </div>
            
//             <div class="col-md-8 col-sm-12 text-white">
//                 <h3 class="text-white my-3" >Instructions</h3>
//                 <p class="text-white">${myMeals[i].strInstructions}</p>
//                 <div class="my-3">Area : <span>${myMeals[i].strArea}</span></div>
//                 <div class="my-3">Category : <span>${myMeals[i].strCategory}</span></div>
    
//                 <h3 class="text-white my-3">Recipes :</h3>
//                 <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure1}</span>
//                 <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure2}</span>
//                 <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure3}</span>
//                 <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure4}</span>
//                 <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure5}</span>
//                 <span class="badge text-bg-Success px-3 py-2">${myMeals[i].strMeasure6}</span>
    
//                 <h3 class="text-white my-3">Tags :</h3>
//                 <div class="badge text-bg-info px-5 py-2 my-3">${myMeals[i].strTags}</div>
//                 <div class="my-3">
//                 <button type="button" class="btn btn-success">Success</button>
//                 <button type="button" class="btn btn-danger">Danger</button>
//                 </div>
    
//             </div>
            
//                 `;
//         }
    
//         document.getElementById("maelDitelsS").innerHTML = temp;
    
    
    
//     }

keyUpsearchByName.addEventListener("keyup", function () {
        searchValue = keyUpsearchByName.value.toLowerCase();
        temp = "";
        for (let i = 0; i < myMeals.length; i++) {
            let x = myMeals[i].strMeal
            if (x.toLowerCase().includes(searchValue) == true) {
                temp += `
                    <div class="col ">
                        <div class="h-100">
                            <div class="inner-image rounded cursor-pointer" >
                                <img src="${myMeals[i].strMealThumb}" class="card-img-top" alt="images/logo.png">
                                <div class="layer">
                                    <h5>${myMeals[i].strMeal}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
        document.getElementById("demoSearch").innerHTML = temp;

        // $(".item").click(function () {
        //     let nameMeal = $(this).attr("nameMeal2");
        //     console.log(nameMeal);
        //     getDetialsDataS(nameMeal);
        //     // console.log(this); 
        // })
    
    })

    keyUpsearchFirstLetter.addEventListener("keyup", function () {
        searchValue = keyUpsearchFirstLetter.value.toLowerCase();
        temp = "";
        for (let i = 0; i < myMeals.length; i++) {
            let x = myMeals[i].strMeal
            if (x.toLowerCase().includes(searchValue) == true) {
                temp += `
                            <div class="col ">
                                <div class="h-100">
                                    <div class="inner-image rounded cursor-pointer" >
                                        <img src="${myMeals[i].strMealThumb}" class="card-img-top" alt="images/logo.png">
                                        <div class="layer">
                                            <h5>${myMeals[i].strMeal}</h5>
                                        </div>
                                    </div>
                            </div>
                                </div>
                        `;
            }
        }
        document.getElementById("demoSearch").innerHTML = temp;

        // $(".item").click(function () {
        //     let nameMeal = $(this).attr("nameMeal2");
        //     console.log(nameMeal);
        //     getDetialsDataS(nameMeal);
        //     // console.log(this); 
        // })
    
    })
}


$(".searchLink").click(function () {
    $("#SearchSection").removeClass("d-none").addClass("d-block")
    $("#HomeSection").removeClass("d-block").addClass("d-none")
    $("#CategoriesSection").removeClass("d-block").addClass("d-none")
    $("#AreaSection").removeClass("d-block").addClass("d-none")
    $("#IngredientsSection").removeClass("d-block").addClass("d-none")
    $(".side-Nav").animate({ left: `-${boxWidth}px` }, 500);
    $("#ContacUsSection").removeClass("d-block").addClass("d-none")
    SearchSection();
})


// ----------------------------- Categories Section------------------------------------
async function getCategoriesData() {
    myHttp2 = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    myData2 = await myHttp2.json();
    categoriesList = myData2.categories;
    console.log(myData2.categories[0].strCategoryThumb);
    displayCategoriesData()
}
function displayCategoriesData() {
    let temp = "";
    for (let i = 0; i < categoriesList.length; i++) {
        temp += `
            <div class="col">
                <div class="h-100">
                    <div class="inner-image rounded cursor-pointer" >
                        <img src="${categoriesList[i].strCategoryThumb}" class="card-img-top" alt="images/logo.png">
                        <div class="layer d-flex flex-column">
                            <h5>${categoriesList[i].strCategory}</h5>
                            <p>${categoriesList[i].strCategoryDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
    
        `;
    }

    document.getElementById("demoCategories").innerHTML = temp;


}
$(".categoriesLink").click(function () {
    $("#CategoriesSection").removeClass("d-none").addClass("d-block")
    $("#SearchSection").removeClass("d-block").addClass("d-none")
    $("#HomeSection").removeClass("d-block").addClass("d-none")
    $("#AreaSection").removeClass("d-block").addClass("d-none")
    $("#IngredientsSection").removeClass("d-block").addClass("d-none")
    $("#ContacUsSection").removeClass("d-block").addClass("d-none")
    $(".side-Nav").animate({ left: `-${boxWidth}px` }, 500);
    getCategoriesData();
})

// ----------------------------- Area Section------------------------------------
async function getAreaData() {
    myHttp4 = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    myData4 = await myHttp4.json();
    AreaList = myData4.meals;
    console.log(myData4.meals[0].strArea);
    displayAreaData()
}
function displayAreaData() {
    let temp = "";
    for (let i = 0; i < AreaList.length; i++) {
        temp += `
            <div class="col">
                <div class="h-100">
                    <div class="inner-image rounded cursor-pointer shadow-lg text-center" >
                        <i class="fa-solid fa-city fa-3x text-danger"></i>
                        <h2 class="text-white">${AreaList[i].strArea}</h2>
                    </div>
                </div>
            </div>
    
        `;
    }

    document.getElementById("demoArea").innerHTML = temp;


}
$(".areaLink").click(function () {
    $("#AreaSection").removeClass("d-none").addClass("d-block")
    $("#CategoriesSection").removeClass("d-block").addClass("d-none")
    $("#SearchSection").removeClass("d-block").addClass("d-none")
    $("#HomeSection").removeClass("d-block").addClass("d-none")
    $("#IngredientsSection").removeClass("d-block").addClass("d-none")
    $("#ContacUsSection").removeClass("d-block").addClass("d-none")
    $(".side-Nav").animate({ left: `-${boxWidth}px` }, 500);
    getAreaData();
})
// ----------------------------- Ingredients Section------------------------------------
async function getIngredientsData() {
    myHttp5 = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    myData5 = await myHttp5.json();
    IngredientsList = myData5.meals;
    console.log(myData5.meals[0].strIngredient);
    displayIngredientsData()
}
function displayIngredientsData() {
    let temp = "";
    for (let i = 0; i < 20 ; i++) {
        temp += `
            <div class="col">
                <div class="h-100">
                    <div class="inner-image rounded cursor-pointer shadow-lg text-center" >
                        <i class="fa-solid fa-bowl-food fa-3x text-success"></i>
                        <h2 class="text-white">${IngredientsList[i].strIngredient}</h2>
                        <p class="ingredient-p text-white">${IngredientsList[i].strDescription}</p>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById("demoIngredients").innerHTML = temp;
}

$(".ingredientsLink").click(function () {
    $("#IngredientsSection").removeClass("d-none").addClass("d-block")
    $("#AreaSection").removeClass("d-block").addClass("d-none")
    $("#CategoriesSection").removeClass("d-block").addClass("d-none")
    $("#SearchSection").removeClass("d-block").addClass("d-none")
    $("#HomeSection").removeClass("d-block").addClass("d-none")
    $("#ContacUsSection").removeClass("d-block").addClass("d-none")
    $(".side-Nav").animate({ left: `-${boxWidth}px` }, 500);
    getIngredientsData();
})

// ----------------------------- ContacUs Section------------------------------------
$(".contactLink").click(function () {
    $("#ContacUsSection").removeClass("d-none").addClass("d-block")
    $("#AreaSection").removeClass("d-block").addClass("d-none")
    $("#CategoriesSection").removeClass("d-block").addClass("d-none")
    $("#SearchSection").removeClass("d-block").addClass("d-none")
    $("#HomeSection").removeClass("d-block").addClass("d-none")
    $("#IngredientsSection").removeClass("d-block").addClass("d-none")
    $(".side-Nav").animate({ left: `-${boxWidth}px` }, 500);
    getIngredientsData();
})

$("#Contac-name").keyup(function () {
    let regex = /[a-z||A-Z]{1,200}/
    if (regex.test($("#Contac-name").val()) == true) {
        $(".Contac-name").addClass("is-valid").removeClass("is-invalid")
        $(".alert-name").addClass("d-none").removeClass("d-block")
    }
    else {
        $(".Contac-name").addClass("is-invalid").removeClass("is-valid")
        $(".alert-name").addClass("d-block").removeClass("d-none")
    }
})

$("#Contac-email").keyup(function () {
    let regex = /^\S+@\S+\.\S+$/
    if (regex.test($("#Contac-email").val()) == true) {
        $(".Contac-email").addClass("is-valid").removeClass("is-invalid")
        $(".alert-email").addClass("d-none").removeClass("d-block")
    }
    else {
        $(".Contac-email").addClass("is-invalid").removeClass("is-valid")
        $(".alert-email").addClass("d-block").removeClass("d-none")
    }
})

// let phoneNumber = document.getElementById("Contac-phoneNumber");
// phoneNumber.addEventListener("keyup", valiePhoneNumber)
function valiePhoneNumber() {
    $("#Contac-phoneNumber").keyup(function () {
    let regex = /[0-9]{10,12}/
    if (regex.test($("#Contac-phoneNumber").val()) == true) {
        $(".Contac-phoneNumber").addClass("is-valid").removeClass("is-invalid");
        $(".alert-number").addClass("d-none").removeClass("d-block")
    }
    else {
        $(".Contac-phoneNumber").addClass("is-invalid").removeClass("is-valid");
        $(".alert-number").addClass("d-block").removeClass("d-none")
    }
})
}



function valiedAge() {
    $("#Contac-Age").keyup(function () {
        let regex = /^[1-9][0-9][0]?$/
        if (regex.test($("#Contac-Age").val()) == true) {
            $(".Contac-Age").addClass("is-valid").removeClass("is-invalid");
            $(".alert-age").addClass("d-none").removeClass("d-block");
            return true
        }
        else {
            $(".Contac-Age").addClass("is-invalid").removeClass("is-valid");
            $(".alert-age").addClass("d-block").removeClass("d-none")
            return false
        }
    })
}
valiedAge()


$("#Contac-password").keyup(function () {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    if (regex.test($("#Contac-password").val()) == true) {
        $(".Contac-password").addClass("is-valid").removeClass("is-invalid");
        $(".alert-password").addClass("d-none").removeClass("d-block");
    }
    else {
        $(".Contac-password").addClass("is-invalid").removeClass("is-valid")
        $(".alert-password").addClass("d-block").removeClass("d-none")

    }
})

$("#Contac-repassword").keyup(function () {
    if ($("#Contac-repassword").val() == $("#Contac-password").val()) {
        $(".Contac-repassword").addClass("is-valid").removeClass("is-invalid")
        $(".alert-repassword").addClass("d-none").removeClass("d-block");

    }
    else {
        $(".Contac-repassword").addClass("is-invalid").removeClass("is-valid")
        $(".alert-repassword").addClass("d-block").removeClass("d-none")
    }
})


// function validation() {
//     if (valiePhoneNumber() == true && valiedAge() == true) {

//         $(".btn-outline-danger").attr('disabled', true).attr("disabled", false);
//         console.log("yes");
//     }
//     else {
//         $(".btn-outline-danger").attr('disabled', false).attr("disabled", true);
//         console.log("no");
//     }

// }
// validation()



    $(".side-Nav").animate({ left: `-${boxWidth}px` }, 500);
})





// $("#btn").click(function(){
//     let left = $(".side-Nav").css("left")
//     if(left == "0px"){
//         $(".side-Nav").animate({left:'0px'});
//         $(".side-Nav-left").toggleClass("d-flex");
//         // $("#btn").removeClass("fa-align-justify").addClass("fa-close");
//     }
//     else{
//         $(".side-Nav").animate({left:'-240px'});
//         // $("#btn").removeClass("fa-close").addClass("fa-align-justify");
//     }
//   });