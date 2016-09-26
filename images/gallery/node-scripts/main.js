
for (var i=0; i<12; i++){
  var j = (i+1);
  if (i < 10){
    j = "0" + i;
  }
  console.log(

    '<div class="col-md-3 text-center gallery-padding-bottom">\n' +
    '<a href="images/gallery/image' + j + '.jpg" class="gallery-selector">\n' +
    '<img src="images/gallery/image' + j + '.jpg" class="gallery-thumb img-thumbnail" />\n' +
    '</a>\n' +
    '</div>'

  );
}
