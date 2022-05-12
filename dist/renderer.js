

let source = $("#recipe-template").html()
let templateONE = Handlebars.compile(source);


class Renderer {
    render(data) {

        let newHTML = templateONE({ title: data.results })
        $(".xoxo").append(newHTML)
    }

}


// Write a for loop here that loops through
// the items array, creates a template for each
// item, and appends it to the items div.
