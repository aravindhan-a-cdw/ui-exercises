const getJsonData = async (url) => {
    const data = await fetch(url).then((data) => data.json());
    return data;
}

let blogs = [];
let filteredBlogs = [];

const updateFilters = () => {
    const filtersSelected = [];
    document.getElementsByName('filter').forEach(element => {
        if(element.checked){
            filtersSelected.push(element.value);
        }
    })
}

const filterBlogs = () => {
    const searchValue = document.getElementById('blog-search').value.trim();
    const filtersSelected = [];
    document.getElementsByName('filter').forEach(element => {
        if(element.checked){
            filtersSelected.push(element.value);
        }
    })

    filteredBlogs = blogs.filter(blog => {
        if (filtersSelected.indexOf(blog.type.toLowerCase()) !== -1){
            if(searchValue === '') return true;
            if((blog.title.toLowerCase().indexOf(searchValue) !== -1 || blog.details.toLowerCase().indexOf(searchValue) !== -1)) return true;
            return false;
        }
        return false;
    })
    console.log(filteredBlogs);
}

/*
<div class="blog-card">
    <span class="card-title">How to Travel Time</span>
    <span class="card-type uppercase">International</span>
    <span class="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nihil fugiat consequatur laboriosam voluptate iste quasi labore aliquid provident unde tenetur repudiandae eaque error itaque iure, cumque quam commodi asperiores id dolorum explicabo autem. Laudantium a porro fugiat molestiae sed laborum nostrum quasi est voluptatem, consequatur officia tempore commodi ex.</span>
</div>
*/

const createElement = (tag, attributes) => {
    const element = document.createElement(tag);
    for(const attr of Object.keys(attributes)) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}
const renderBlogCard = (blogData, index) => {
    let child = null;
    const container = createElement('div', {class: 'blog-card'});
    container.setAttribute('data-index', index);

    child = createElement('span', {class: 'card-title'});
    child.innerText = blogData.title;
    container.appendChild(child);

    child = createElement('span', {class: 'card-type uppercase'});
    child.innerText = blogData.type;
    container.appendChild(child);

    child = createElement('span', {class: 'card-content'});
    child.innerText = blogData.details;
    container.appendChild(child);

    return container;
}

const processBlogs = async () => {
    const fragmentElement = document.createDocumentFragment();
    filteredBlogs.forEach((blog,index) => {
        fragmentElement.appendChild(renderBlogCard(blog, index));
    });

    document.getElementById('blog-cards').replaceChildren(fragmentElement);
    document.getElementsByClassName('blog-card')[0]?.classList.add('selected');

    // Add Eventlistener for selecting blog
    document.querySelectorAll('.blog-card').forEach(element => {
        element.addEventListener('click', () => {
            document.querySelectorAll('.blog-card').forEach(element => {
                element.classList.remove('selected');
            });
            element.classList.add('selected');

            const blogContainer = document.getElementById('blog-container');
            const blog = filteredBlogs[element.getAttribute('data-index')];
            const fragment = document.createDocumentFragment();

            if(blog.photo !== '') {
                const imageContainer = createElement('div', {class: 'blog-image'});
                let child = createElement('img', {src: blog.photo, alt: blog.title});
    
                imageContainer.appendChild(child);
                fragment.appendChild(imageContainer);
            }
            let child = createElement('h3', {class: 'blog-title'});
            child.innerText = blog.title;
            fragment.appendChild(child);

            child = createElement('p', {class: 'blog-content'});
            child.innerText = blog.details;
            fragment.appendChild(child);

            blogContainer.replaceChildren(fragment);


        })
    })
}


(async function () {
    updateFilters();

    // Add Eventlistener for checkbox
    document.getElementsByName('filter').forEach(element => {
        element.addEventListener('change', () => {
            filterBlogs();
            processBlogs();
        });
    })

    document.getElementById('blog-search').addEventListener('keydown', () => {
        filterBlogs();
        processBlogs();
    })


    const blogsArray = await getJsonData('https://jsonmockserver.vercel.app/api/blogs');
    if(blogsArray instanceof Array){
        blogs = blogsArray;
    }
    filterBlogs();
    processBlogs();
})()
