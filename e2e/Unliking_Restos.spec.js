/* eslint-disable no-undef */
const assert = require('assert')

Feature('Unliking Restos')

Before(({ I }) => {
  I.amOnPage('/#/favorit')
})

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#query')
  I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found')
})

Scenario('unliking one resto', async ({ I }) => {
  I.dontSeeElement('.post-item')
  I.amOnPage('/')

  I.seeElement('.post-item__title a')

  const firstResto = locate('.post-item__title a').first()
  const firstRestoTitle = await I.grabTextFrom(firstResto)
  I.wait()
  I.click(firstResto)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorit')
  I.seeElement('.post-item')
  const unlikedRestoTitle = await I.grabTextFrom('.post-item__title')

  assert.strictEqual(firstRestoTitle, unlikedRestoTitle)
  I.seeElement('.post-item__title a')
  await I.grabTextFrom(firstResto)
  I.click(firstResto)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorit')
  I.dontSeeElement('.post-item')
})
