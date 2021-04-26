//  Gerador de Lista

function createList(list, text = "Text") {
    let listHTML = `<ul>\n`;
    for (let i = 0; i <= list; i++) {
        if(i!=list) {
            listHTML += ` <li>${text} ${i+1}</li>\n`;
        } else {
            listHTML += `</ul>`;
        }
    }
    return listHTML;
}


console.log(createList(3, "Text")); // => Text 1, 2, 3
console.log(createList(5, "Item")); // => Item 1, 2, 3, 4, 5
