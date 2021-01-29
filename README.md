# EDIT-THIS-README
1) Home

HTML Setup: form for user data



On submit: 
- store the user data in local storage 
-redirect user to the map/list

2) Map/List

HTML setup: ul/p tags to inject quests into  
-if all quests are completed - redirect to the results page 
if the user has < or 0 hp, redirect to results page 
-otherwise: 
    Grab quest data 
    loop through it 
    generate a title for each quest 
    - if the quest has been completed, modify quest link on home page (cross out/check)
    - if the quest has not been completed, it should be a link to the correct quest

3) quest page
HTML setup: header, image, paragaph and a list of radio buttons
Grab the id of the quest from the url 
use that id to 'findByID' that quest in our quest data 
-use the quest to populate the elements of the html 

on submit, 
    calculate the user's new stats (hp and gold) 
        put the new stats in local storage 
        then redirect user back to the map 


4) results 
- display some custom ending determined by the users stats 
- button to play again (clear local storage and redirect home)
