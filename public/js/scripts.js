// window.onload=function(){
// 	document.getElementById('paragraph').style.color='red'
// }

// function findBook(){
// 	document.getElementById('result').innerHTML='Book results will display here';
// }

function findBook(){
 		var userSearch=document.getElementById('userInput').value;
 		//document.getElementById('result').innerHTML=userSearch;
 		var bookResult=document.getElementById('result');


    bookResult.innerHTML = "";

    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        dataType: "JSON",
        success: function(book){
            console.log(book);
            for(var i = 0; book.items.length; i++){

                // create img element for images  
                 var image = document.createElement('img');
                image.className = 'mr-3';
                image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
   
                // create div element with class of media-body
                var wrapperDiv = document.createElement('div');
                var div = document.createElement('div');
                var header = document.createElement('h2');
                var author = document.createElement('h6');
                var country = document.createElement('p');
                var desc = document.createElement('p');
                var line = document.createElement('hr');
                var year=document.createElement('p');
  				var pageCount=document.createElement('p');
  				var publisher=document.createElement('p');
  				var previewlink=document.createElement('a');
					                				
                wrapperDiv.className = 'media';
                div.className = 'media-body';         
                // create header for body
                header.className = 'mt-0';              
                header.innerHTML = book.items[i].volumeInfo.title;
                // append header to the body
                div.appendChild(header);
                wrapperDiv.appendChild(image);
                wrapperDiv.appendChild(div);
                // create h5 element for author
                author.innerHTML = book.items[i].volumeInfo.authors[i];
                div.appendChild(author);
                // create paragraph for country
                country.innerHTML = '<b>Country:</b>' + ' ' + book.items[i].accessInfo.country;
                div.appendChild(country);
                  
                //publish date
                year.innerHTML="<b>Publish Date:</b>"+" "+book.items[i].volumeInfo.publishedDate;
  				div.appendChild(year);

                // create pagecount
  				pageCount.innerHTML="<b>Pages:</b>"+" "+book.items[i].volumeInfo.pageCount;
  				div.appendChild(pageCount);

    			publisher.innerHTML="<b>Auther:</b>"+" "+book.items[i].volumeInfo.publisher;
  				div.appendChild(publisher);

                // create element for discription
                desc.innerHTML = book.items[i].volumeInfo.description;
                div.appendChild(desc);
	
                previewlink.innerHTML='view More'
	             previewlink.href=book.items[i].volumeInfo.previewLink;
	             div.appendChild(previewlink);

                // Make every elements as children element of bookResult
                bookResult.appendChild(wrapperDiv);
                //create hr
                bookResult.appendChild(line);
                

            }
        }
    })
}