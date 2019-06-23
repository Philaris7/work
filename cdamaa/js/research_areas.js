
document.addEventListener('DOMContentLoaded', init, false);
var div1;
var div2;
var div3;
var div4;

function init(){
    div1 = document.getElementById("article_div1");
    div2 = document.getElementById("article_div2");
    div3 = document.getElementById("article_div3");
    div4 = document.getElementById("article_div4");
};


function showArticle(articleId){
        div1.style.display = "none";
        div2.style.display = "none";        
        div3.style.display = "none";
        div4.style.display = "none";
        
        
        div1.parentElement.style.background = "#eee";
        div2.parentElement.style.background = "#eee";  
        div3.parentElement.style.background = "#eee";
        div4.parentElement.style.background = "#eee";
        
        
        
        curDiv = document.getElementById(articleId);
        curDiv.style.display = "block";
        curDiv.parentElement.style.background = "white";
        curDiv.parentElement.scrollIntoView();        
    };
    

