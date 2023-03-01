const loadData = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(response => response.json())
        .then(data => displayData(data.data.news_category))
}

const displayData = (categories) => {
    // console.log(categories)
    categories.forEach((category) => {
        // console.log(category)
        const categoryContainer = document.getElementById("category-container");
        categoryContainer.innerHTML += `
        <a onclick="loadCategory('${category.category_id}')" class="text-decoration-none" href='#'>${category.category_name}</a>
        `
    })

}

const loadCategory = (id) => {
    console.log(id)
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`



}
loadData()