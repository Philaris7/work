var person1 ={
    p_team : "Investigator/Team Leader",
    p_name : "Prof Festus Annor Frempong",
    p_qual : "PhD Agricultural Extension",
    p_role : "Project Management, Training, Advanced Research Methodology and value chain development",  
    p_image : "images/team/stu1.jpg"
} ;


var person2 ={
    p_team : "Dean, School of Agriculture",
    p_name : "Prof Elvis Asare",
    p_qual : "PhD Virology",
    p_role : "Supervisory of implementation of project ",  
    p_image : "images/team/stu2.jpg"
} ;


var person3 ={
    p_team : "Farmer Group Representative ",
    p_name : "Mr. Appiah Mensah",
    p_qual : "President, Ankwanda Unity Co-operative Multipurpose Society Limited",
    p_role : "Supervisory of implementation of project ",  
    p_image : "images/team/stu3.jpg"
} ;

var person4 ={
    p_team : "Headmaster of TVET",
    p_name : "Mr. Moses Nartey",
    p_qual : "MSc Post-harvest Technology & Logistics and PGD, Administration",
    p_role : "Supervision of TVET training and research ",  
    p_image : "images/team/stu4.jpg"
} ;

var person5 ={
    p_team : "Supervisory Team",
    p_name : "Dr William Ghartey",
    p_qual : "PhD Agricultural Economics",
    p_role : "Supervision of Agricultural Economics student and Agribusiness students",  
    p_image : "images/team/stu5.jpg"
} ;

var person6 ={
    p_team : "Supervisory Team",
    p_name : "Dr. Kwame Agyei Frimpong",
    p_qual : "PhD Plant and Soil Science",
    p_role : "Supervision of Soil Science student",  
    p_image : "images/team/stu1.jpg"
} ;

var person7 ={
    p_team : "Supervisory Team",
    p_name : "Dr Grace Caselina van der Puije (Mrs)",
    p_qual : "PhD Agriculture (Plant Pathology",
    p_role : "Supervision of Crop Science student",  
    p_image : "images/team/stu1.jpg"
} ;

var person8 ={
    p_team : "Supervisory Team",
    p_name : "Dr. Aaron Tettey Asare",
    p_qual : "PhD Agricultural Extension",
    p_role : "Supervisor Crop Science and plant propagation ",  
    p_image : "images/team/stu1.jpg"
} ;

var person9 ={
    p_team : "Supervisory Team",
    p_name : "Dr Ernest Teye",
    p_qual : "PhD. (Food Science and Engineering) School of Food Science and                                                                         Biological Engineering",
    p_role : "Supervisor food processing and establishment of pineapple plant ",  
    p_image : "images/team/stu1.jpg"
} ;

var person10 ={
    p_team : "Ministry of Food and Agriculture",
    p_name : "Peter Dick",
    p_qual : "Director of Agriculture, KEEA Municipal Assembly and Bsc Agriculture; MSc Project management",
    p_role : "Project management",  
    p_image : "images/team/stu1.jpg"
} ;

function getStudent(person){
   
    if(person == "person1"){
        var member = person1;
    }else if( person == "person2"){
        var member = person2;
    }else if( person == "person3"){
        var member = person3;
    }else if( person == "person4"){
        var member = person4;
    }else if( person == "person5"){
        var member = person5;
    }else if( person == "person6"){
        var member = person6;
    }else if( person == "person7"){
        var member = person7;
    }else if( person == "person8"){
        var member = person8;
    }else if( person == "person9"){
        var member = person9;
    }else if( person == "person10"){
        var member = person10;

    }

document.getElementById("stu_name").innerHTML = member.p_name;
document.getElementById("stu_role").innerHTML = member.p_role;
document.getElementById("stu_qual").innerHTML = member.p_qual;
document.getElementById("stu_team").innerHTML = member.p_team;
document.getElementById("stu_image").src = member.p_image;
document.getElementById('student_bio').style.display = "flex";       
document.getElementById('student_bio').scrollIntoView()        


}



