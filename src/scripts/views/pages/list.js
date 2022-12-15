import TheRestoDbSource from '../../data/therestodb-source'
import { createRestoItemTemplate } from '../templates/template-creator'

const ListResto = {
  async render () {
    return ` 
        <section class="content">    
            <div class="latest">
                <h1 class="latest__label">What would you like to eat?</h1>

                    <div id="restos" class="restos"></div>

            </div>
        </section>
      `
  },

  async afterRender () {
    const restosContainer = document.querySelector('#restos')
    const restos = await TheRestoDbSource.listResto()
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto)
    })
  }
}

export default ListResto
