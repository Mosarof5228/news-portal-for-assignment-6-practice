const loadAllCategory = async () => {
    url = `https://openapi.programming-hero.com/api/news/categories`
    const response = await fetch(url)
    const data = await response.json()
    displayCategory(data.data.news_category)
}
const displayCategory = (categories) => {
    // console.log(categories)
    const categoriesContainer = document.getElementById("category-container");
    categories.forEach((category) => {
        // console.log(category)
        const categoryP = document.createElement("p");
        categoryP.innerHTML = `
        <a  onclick="loadNewsByClick('${category.category_id}')" class="text-decoration-none pe-auto" href="#">${category.category_name}</a>
        `
        categoriesContainer.appendChild(categoryP)
    })

}

//click and specific category load

const loadNewsByClick = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayNewsByClick(data.data))
}

const displayNewsByClick = (newsObj) => {
    const newsContainer = document.getElementById("news-container");
    // news not found message
    const newsNotFoundMessage = document.getElementById("news-not-found-message");
    if (newsObj.length === 0) {
        newsNotFoundMessage.classList.remove("d-none")
    }
    else {
        newsNotFoundMessage.classList.add("d-none")
    }
    newsContainer.innerHTML = '';
    newsObj.forEach((singleNews) => {
        console.log(singleNews)
        const newsDiv = document.createElement("div");
        newsDiv.classList.add("card");
        newsDiv.classList.add("mb-3")
        newsDiv.innerHTML = `
             <div class="row g-0">
                        <div class="col-md-4 ">
                            <img id="single-image" src="${singleNews ? singleNews.image_url : "image not found"}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8 d-flex flex-column justify-content-between align-items-center">
                            <div class="card-body">
                                <h5 class="card-title">${singleNews.title}</h5>
                                <p class="card-text">${singleNews.details.slice(0, 150) + '...'}</p>
                                <div class="d-flex justify-content-between px-3">
                                    <img class="rounded-pill" src="${singleNews.author.img}" height="50px" width="50px">
                                    <div>
                                    <p  class="p-0 m-0">${singleNews.author.name ? singleNews.author.name : "Not Found Name"}</p>
                                    <p  class="p-0 m-0">${singleNews.author.published_date ? singleNews.author.published_date : "Nothing"}</p>
                                    </div>

                                    
                                   <dip class="d-flex justify-content-center align-items-center gap-3">
                                     <i class="fa-regular fa-eye p-0 m-0"></i>
                                    <p class="p-0 m-0">${singleNews.rating.number}</p>
                                   </dip>

                                 
                                    <div class="d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                   
                                    
                                </div>
                                
                            </div >
                        </div >
                    </div >

    `
        newsContainer.appendChild(newsDiv)

    })
}

loadAllCategory()