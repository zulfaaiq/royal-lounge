import UrlParser from '../../routes/url-parser'
import TheRestoDbSource from '../../data/therestodb-source'
import { createRestoDetailTemplate } from '../templates/template-creator'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import FavoriteRestoIdb from '../../data/favorite-resto-idb'

const Detail = {
  async render () {
    return `
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await TheRestoDbSource.detailResto(url.id)
    const restaurantContainer = document.querySelector('#resto')
    restaurantContainer.innerHTML = createRestoDetailTemplate(resto)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: url.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        adress: resto.adress,
        rating: resto.rating,
        pictureId: resto.pictureId
      }
    })
  }
}

export default Detail
