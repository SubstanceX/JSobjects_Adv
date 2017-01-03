//Task 1: Console the year in which the song "Beat it" was relased 
console.log(library.music.eighties.Michael_Jackson[0].year);

//Task 2: Console the name of the song Lady Gaga released in 2006 
console.log(library.music.two_thousands.Lady_Gaga[0].song);

var favRecipe = {
    "Pancakes": {
        "Tirimusu":{
          "Ingredients":[
            {
              "Eggs": 2,
              "Flour": "2 Cups",
              "Milk": "1 1/2 Cup",
              "Butter" : "4 Tbsp",
              "Vanilla" : "2 Spn",
              "Cinnamon" :"1/4 Cup",
              "Cocoa Powder" : "2 Tbsp"
            }
            ],
            "Glaze": [
                {
              "Maple Syrup" : "1/4 Cup",
              "Coffee Liqueur" : "2 Tbsp",
              "Softened Butter" : "3 Tbsp"
            }
            ],
          "Servings" :[
             {
            "People": 5,
            "Dogs": 7,
            "Whale": "Invalid Amount of Pancakes....Please Make More!"
        }
    ]
        },
        "Chocolate_Chip": {
        "Ingredients":[
            {
              "Eggs": 2,
              "Flour": "2 Cups",
              "Milk": "1 1/2 Cup",
              "Butter" : "4 Tbsp",
              "Vanilla" : "2 Spn",
              "Cinnamon" :"1/4 Cup",
              "Cocoa Powder" : "2 Tbsp",
              "Chocolate Chips": "2 Cups",
              "Sugar" : "3 Tbsp",
              "Salt" : "Pinch",
            }
            ],
          "Servings" :[
             {
            "People": 5,
            "Dogs": 7,
            "Elephant": "Also an Invalid Amount of Pancakes....Please Make More!"
        }
        ]
    }
}
}

console.log(favRecipe.Pancakes.Chocolate_Chip.Ingredients);

$( document ).ready(function() {
//Task 3: Have the words "Rolling in the Deep" appear on the HTML page in a div tag.    
$("#thing").html(library.music.twenty_tens.Adele[0].song);
//Task 4: (project) Create a site that can display all songs from an artist specified by a user search. (This will require an input field for the user to type into.. OR a drop down menu populated with Artist names)

});
