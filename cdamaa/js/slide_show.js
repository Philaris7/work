     
var album_g1 = new Array('images/1.jpg', 
                      'images/2.jpg',
                      'images/3.jpg',
                      'images/4.jpg',
                      );
                      
var album_g2 = new Array('images/G1/1.png', 
                      'images/G1/2.png',
                      'images/G1/3.png',
                      'images/G1/4.png',
                      );
                      
var album_all = [].concat(album_g1, album_g2);                      
var album = album_all;                      
var imageNumber = 0;
var imageLength = album.length - 1;

function changeImage(num){  
    imageNumber = imageNumber + num;
    if (imageNumber > imageLength){
        imageNumber = 0;
    }
    if(imageNumber < 0){
        imageNumber = imageLength;
    }
    document.getElementById('slide_show_image').src = album[imageNumber];
    document.getElementById('image_number').innerHTML = String(imageNumber +1) + ' / ' + String(imageLength + 1);     
} 


function changeAlbum(album){ 
    if (String(album) == "album_g1"){
        album = album_g1;
        imageLength = album.length - 1;
        document.getElementById('slide_show_image').src = album[0];
        document.getElementById('image_number').innerHTML = '1' + ' / ' + String(imageLength + 1); 
        document.getElementById('slide_show_image').scrollIntoView();
    }else if(String(album) == "album_g2"){
        album = album_g2;
        imageLength = album.length - 1;
        document.getElementById('slide_show_image').src = album[0];
        document.getElementById('image_number').innerHTML = '1' + ' / ' + String(imageLength + 1); 
        document.getElementById('slide_show_image').scrollIntoView()       
    }else if(String(album) == "album_g3"){
        album = album_g3;
        imageLength = album.length - 1;
        document.getElementById('slide_show_image').src = album[0];
        document.getElementById('image_number').innerHTML = '1' + ' / ' + String(imageLength + 1);
        document.getElementById('slide_show_image').scrollIntoView()        
    }else if(String(album) == "album_all"){
        album = album_all;
        imageLength = album.length - 1;
        document.getElementById('slide_show_image').src = album[0];
        document.getElementById('image_number').innerHTML = '1' + ' / ' + String(imageLength + 1);
        document.getElementById('slide_show_image').scrollIntoView()        
    }  
}




