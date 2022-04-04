var navigation = document.querySelector("#navigation");
var main = document.querySelector("main");

function append(index)
{
    index = index.split("\n");

    for(i = 0; i < index.length; i++)
    {
        subject = index[i].split(" ");

        let name = subject[0].replace("_", " ");
        let tag = subject[1];

        createCategory(name, tag);

        createSection(name, tag, parseInt(subject[2]));
    }

    function createCategory(name, tag)
    {
        let category = document.createElement("a");
        category.href = `#${tag}`;
        category.innerHTML = name;

        navigation.appendChild(category);
    }

    function createSection(name, tag, contentAmount)
    {
        let section = document.createElement("section");
        section.id = tag;

        let title = document.createElement("h2");
        title.innerHTML = name;

        section.appendChild(title);

        for(j = contentAmount; j >= 1; j--) // If I write 'i' instead of 'j'; code crashes!
        {
            reach(`/resources/portfolios/${tag}/${j}.ekin`, createContent);
        }

        main.appendChild(section);

        function createContent(data)
        {
            let content = document.createElement("div");
            content.classList.add("content");
            content.innerHTML = data;

            section.appendChild(content);

            //content.querySelectorAll(".slider").forEach(slide); SLİDE İÇİN BURAYA DÖN
        }
    }
}

/* (MAIN) -------------------------------------------------- */

reach("/resources/portfolios/index.ekin", append);