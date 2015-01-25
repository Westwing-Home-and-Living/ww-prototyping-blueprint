(function (document) {
    // get colors from data attribute and push to array
    var colorContainer = document.getElementById("sg-color-block");
    var colors = document.querySelector('[data-colors]').getAttribute('data-colors');
    var colorsArray = {};


    colorsArray.colors = colors.replace(/(\r\n|\n|\r)/gm, "").split(','); // remove line breaks and create new array containing colors

    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    console.log(colorsArray);

    // create template
    var templateSrc = '{{#each colors}}<div class="sg-colors-{{this}}"><div>Sass Variable: ${{this}}</div></div>{{/each}}';
    var template = Handlebars.compile(templateSrc);

    // fill template with array values and append to colorContainer
    colorContainer.innerHTML += template(colorsArray) ;

    document.getElementById('sg-color-block').addEventListener("mouseover", function(e){
        var regEx = /^sg-colors-/;
        if (e.target.className.match(regEx)) {
            var getBackgroundColor = window.getComputedStyle(e.target).getPropertyValue('background-color');
            var hexColor = rgb2hex(getBackgroundColor);

            console.log(getBackgroundColor)
            console.log(hexColor)
        }
    });
})(document);

