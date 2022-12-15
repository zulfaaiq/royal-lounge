/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restos')

Before(({ I }) => {
  I.amOnPage('/#/favorit')
})

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#query')
  I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found')
})

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found')
  I.amOnPage('/')

  I.seeElement('.post-item__title a')

  const firstResto = locate('.post-item__title a').first()
  const firstRestoTitle = await I.grabTextFrom(firstResto)
  I.click(firstResto)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorit')
  I.seeElement('.post-item')
  const likedRestoTitle = await I.grabTextFrom('.post-item__title')

  assert.strictEqual(firstRestoTitle, likedRestoTitle)
})

Scenario('searching restos', async ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found')

  I.amOnPage('/')

  I.seeElement('.post-item__title a')

  const titles = []

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.post-item__title a').at(i))
    I.seeElement('#likeButton')
    I.click('#likeButton')
    titles.push(await I.grabTextFrom('.info-list'))
    I.amOnPage('/')
  }

  I.amOnPage('/#/favorit')
  I.seeElement('#query')
})
