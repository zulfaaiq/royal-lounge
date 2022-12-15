import CONFIG from '../../globals/config'

const createRestoDetailTemplate = (resto) => `
<div class="latest">
    <h1 class="latest__label">${resto.name}</h1>
</div>
<article class="post-item detail">
    <img class="post-item__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" />
    <div class="resto_info">
    <h3 class="info-list">Adress</h3>
        <p class="p-detail">${resto.address}, ${resto.city}</p><br>
    <h3 class="info-list">Rating</h3>
        <p class="post-item__date">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="15px"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> 
        ${resto.rating} 
        </p><br>
    <br><h3 class="info-list">Category</h3>
    <p class="categories p-detail">${resto.categories.map((category) => `
            <span class="category">${category.name}</span>`).join('')}</p>
    </div>
    <div class="resto_overview">
    <br><h3 class="info-list">Description</h3>
    <p class="p-detail">${resto.description}</p>
    </div>
    <br><br><h2>Menu</h2>
    <div class="menu-detail">
        <div class="food">
        <h4>Food</h4><br>
        <ul>${resto.menus.foods.map((food, i) => `
                <li><p>${i + 1}) ${food.name}</p></li>`).join('')}
        <ul>
        </div>
        <div class="drink">
        <h4>Drink</h4><br>
        <ul>
            ${resto.menus.drinks.map((drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>`).join('')}
        <ul>
        </div>
    </div>
    <br><br><h2>Reviews</h2><br>
    <div class="review-detail">${resto.customerReviews.map((review) => `
            <div class="review-detail-item">
            <div class="header-review">
                <p class="namereview">${review.name}</p>
                <p class="date-rev">${review.date}</p>
            </div>
            <div class="bodyrev">
                ${review.review}
            </div>
            </div>`).join('')}
    </div>
</article>
`

const createRestoItemTemplate = (resto) => `
    <article class="post-item">
        <img class="post-item__thumbnail lazyload"
            data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}"
            alt="${resto.name || '-'}">
        <div class="post-item__content">
            <p class="post-item__date">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="15px"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> 
            ${resto.rating || '-'} | <a href="#" class="post-item__date__author"> ${resto.city} </a>
            </p>
            <h1 class="post-item__title resto__title"><a href="#/detail/${resto.id}">${resto.name || '-'}</a></h1>
            <p class="post-item__description">${resto.description.slice(0, 400) || '-'}...</p>
        </div>
    </article>
  `
const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
