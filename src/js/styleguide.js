(function (document) {
    // get colors from data attribute and push to array
    var colorContainer = document.getElementById("sg-color-block");
    var colors = document.querySelector('[data-colors]').getAttribute('data-colors');
    var colorsArray = {};
    colorsArray.colors = colors.replace(/(\r\n|\n|\r)/gm, "").split(','); // remove line breaks and create new array containing colors

    // create template
    var templateSrc = '{{#each colors}}<div class="sg-colors-{{this}}"><div>Sass Variable: ${{this}}</div></div>{{/each}}';
    var template = Handlebars.compile(templateSrc);

    // fill template with array values and append to colorContainer
    colorContainer.innerHTML += template(colorsArray) ;
})(document);

