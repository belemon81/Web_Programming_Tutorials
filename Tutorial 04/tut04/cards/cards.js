// get red to #container

//for each link in links
//creat img element - document.creatElement("tagName")
    //img.src = link
    //add into container - container.appendChild(element)
    for (const link of links) {
        let card = document.createElement('img');
        card.src = link;
        const container = document.querySelector('#container');
        container.appendChild(card);
    }
    function enlarge(event) { 
        const classes = document.querySelector('.enlarge'); 
        if (classes) classes.classList.remove('enlarge');  
        // for(const img of imgs) {
        //     img.classList.remove('enlarge'); 
        // }
        const image = event.currentTarget;  
        image.classList.add('enlarge'); 
    }
    // function resize(event) {
    //     const image = event.currentTarget;  
    //     image.classList.remove('enlarge');  
    // } 
    const imgs = container.querySelectorAll('img');
    for(const img of imgs) {
        img.addEventListener('click', enlarge);
        //img.addEventListener('mouseleave', resize);
    }
    
