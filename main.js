 var strings = ["“Be yourself; everyone else is already taken.”" 
    ,"“So many books, so little time.”"
    , "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
    ,"“You only live once, but if you do it right, once is enough.”"
    ,"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
    ,"“You only live once, but if you do it right, once is enough.”"
    ,"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”" 
    
]; 
 function change_text(){
    var randomIndex = Math.floor(Math.random() * strings.length);  
    var randomString = strings[randomIndex]
    document.getElementById("demo").innerHTML= randomString;
    }




