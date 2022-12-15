(()=>{"use strict";var n,A={756:(n,A,e)=>{e.d(A,{Z:()=>l});var t=e(537),r=e.n(t),i=e(645),o=e.n(i),a=e(667),d=e.n(a),p=new URL(e(355),e.b),s=o()(r());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap);"]);var C=d()(p);s.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  font-size: 12px;\n  color: #424242;\n}\n\n/*\n* Skip to Content\n*\n*/\n\n.skip-link {\n  position: absolute;\n  font-family: \"Roboto\", sans-serif;\n  font-size: medium;\n  text-transform: uppercase;\n  text-decoration: none;\n  top: -60px;\n  left: 0;\n  background-color: #2c3e50;\n  color: white;\n  padding: 16px 20px;\n  z-index: 100;\n}\n \n.skip-link:focus {\n   top: 0;\n}\n\n/*\n* Header\n*\n*/\n\n.header {\n  min-height: 56px;\n  transition: min-height 0.3s;\n}\n\n.header__inner {\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.header__title {\n  font-weight: 300;\n  font-size: 4em;\n  margin: 0.5em 0.25em;\n  display: inline-block;\n  color: #212121;\n}\n\n.header__menu {\n  font-size: xx-large;\n  margin: 20px auto;\n  padding: 20px 60px;\n  text-decoration: none;\n  display: block;\n  width: 30px;\n}\n\n.header__menu:hover {\n  color: #666666 10px;\n}\n\n/*\n * Top level navigation\n */\n\n .nav {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.nav__list {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 24%;\n  text-align: center;\n  line-height: 24px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: #616161;\n}\n\n.nav a:hover {\n  text-decoration: underline !important;\n  color: #000;\n}\n\n/* styling pendukung */\n \nmain {\n  padding: 16px;\n}\n \n#drawer ul {\n  list-style-type: none;\n  padding: 0 16px;\n}\n \n#drawer li {\n  padding: 5px 0px;\n}\n \n#drawer a {\n  text-decoration: none;\n  font-size: small;\n  color: #2b2c2d;\n}\n \n#hamburger {\n  font-size: 32px;\n  text-decoration: none;\n  color: black;\n}\n\n/*\n * Jumbotron\n */\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-image: url("+C+");\n  background-position: center;\n  background-size: cover;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 50%;\n}\n\n.hero__title {\n  color: #fff;\n  font-weight: 500;\n  font-size: 36px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n\n/*\n * main\n */\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n/*\n * content\n */\n\n.content {\n  padding: 32px;\n}\n\n/*\n * restos\n */\n\n.restos {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  margin: 32px 0;\n  text-align: left;\n}\n\n/*\n  resto\n*/\n\n.resto {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n/*detail page*/\n.resto_poster{\n\twidth: 50% !important;\n\theight: 370px;\n\tobject-fit: cover;\n\tobject-position: center;\n\tmargin-bottom: 0px;\n}\n\n.resto_title{\n\tfont-size: 30px;\n\ttext-align: center;\n\tmargin-bottom: 25px;\n}\n\n.checked {\n\tcolor: #2b2c2d;\n}\n\n.rating-name{\n\tdisplay: inline-block;\n}\n\n.info-list{\n\tfont-size: 18px;\n}\n.category {\n\tpadding: 0.3em 1em;\n\tcolor: #ffffff;\n\tbackground-color: #2b2c2d;\n\tmargin-right: 2px;\n\tborder: 1px solid transparent;\n\tborder-radius: 0px 10px 0px 10px;\n  }\n\n.categories{\n\tmargin-top: 10px;\n}\n\n.menu-detail h4 {\n  font-size: 15px;\n  padding-top: 10px;\n  color: #2b2c2d;\n  background-color: #ffffff;\n}\n\n.food {\n\ttext-align: left;\n  \tdisplay: flex;\n  \tflex-direction: column;\n  \talign-content: center;\n}\n\n.food li {\n\tfont-size: 14px;\n  padding: 3px 0;\n  display: block;\n  text-decoration: none;\n  background-color: #ffffff;\n  border: 0.5px solid black;\n  border-width: 0 0 0.5px;\n}\n\n.drink {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.drink li {\n\tfont-size: 14px;\n  padding: 3px 0;\n  display: block;\n  text-decoration: none;\n  background-color: #ffffff;\n  border: 0.5px solid black;\n  border-width: 0 0 0.5px;\n}\n\n.review-detail {\n\tmax-width: 100%;\n\tfont-size: 14px;\n\ttext-align: center;\n}\n  \n.review-detail-item {\n\tborder: 0.5px solid black;\n  border-radius: 5px;\n\tmargin-bottom: 1.5em;\n\tpadding: 5px 1em;\n}\n  \n.review-detail-item:last-child {\n\tmargin-bottom: 0;\n}\n  \n.header-review {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1em 1em;\n}\n  \n.namereview {\n\tfont-weight: bold;\n}\n  \n.date-rev {\n\tfont-size: 11px;\n\tfont-weight: lighter;\n}\n  \n.bodyrev {\n\tpadding: 1em;\n\ttext-align: left;\n}\n\n.p-detail{\n\tfont-size: 14px;\n\tmargin-top: 10px;\n}\n\n.detail{\n  padding: 20px;\n}\n\n.like {\n    font-size: 18px;\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    background-color: #ff8303;\n    color: white;\n    border: 0;\n    border-radius: 50%;\n    width: 55px;\n    height: 55px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/*\n * headline\n */\n\n.headline__figure {\n  width: 100%;\n}\n\n.headline__figure img {\n  width: 100%;\n}\n\n.headline__figure figcaption {\n  text-align: center;\n  color: #666666;\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 8px;\n}\n\n.headline__content {\n  width: 100%;\n  padding: 16px 0;\n}\n\n.headline__title {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.headline__description {\n  font-size: larger;\n  margin-top: 12px;\n}\n\n.headline__button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  margin-top: 24px;\n  cursor: pointer;\n  padding: 14px 16px;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  background-color: #2c3e50;\n  transition: opacity 0.3s;\n}\n\n.headline__button:hover {\n  opacity: 0.8;\n}\n\n/*\n * latest\n */\n\n.latest {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.latest__label {\n  font-size: 32px;\n  font-weight: lighter;\n}\n\n.latest__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n}\n\n/*\n * input\n */\n\ninput {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border: 3px solid #ccc;\n  border-radius: 4px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  outline: none;\n}\n\ninput:focus {\n  border: 3px solid #555;\n}\n\n/*\n * post\n */\n\n.posts {\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n/*\n * post item\n */\n\n.post-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.post-item__content {\n  padding: 16px;\n}\n\n.post-item__thumbnail {\n  width: 100%;\n  max-height: 30%;\n  object-fit: cover; \n  object-position: center;\n}\n\n.post-item__date {\n  text-transform: uppercase;\n  font-size: 15px;\n}\n\n.post-item__date__author {\n  color: rgb(32, 173, 189);\n  text-decoration: none;\n  font-size: 15px;\n  padding: 14px 16px;\n}\n\n.post-item__title {\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n}\n\n.post-item__title:hover {\n  opacity: 0.5;\n}\n\n.post-item__title a {\n  text-decoration: none;\n  color: inherit;\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n\n.post-item__description {\n  margin-top: 16px;\n  font-size: 12px;\n  line-height: 1.5em;\n}\n\n#more {display: none;}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/*\n * footer\n */\n\nfooter {\n  background-color: #2b2c2d;\n  padding: 2em;\n  width: 100%;\n  text-align: center;\n}\n\nfooter p {\n  color: #fff;\n  text-align: center;\n  font-family: 'Nunito', 'Segoe UI', arial;\n  font-size: medium;\n}\n\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  font-size: 12px;\n  color: #424242;\n}\n\n/*\n* Skip to Content\n*\n*/\n\n.skip-link {\n  position: absolute;\n  font-family: \"Roboto\", sans-serif;\n  font-size: medium;\n  text-transform: uppercase;\n  text-decoration: none;\n  top: -60px;\n  left: 0;\n  background-color: #2c3e50;\n  color: white;\n  padding: 16px 20px;\n  z-index: 100;\n}\n \n.skip-link:focus {\n   top: 0;\n}\n\n/*\n* Header\n*\n*/\n\n.header {\n  min-height: 56px;\n  transition: min-height 0.3s;\n}\n\n.header__inner {\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.header__title {\n  font-weight: 300;\n  font-size: 4em;\n  margin: 0.5em 0.25em;\n  display: inline-block;\n  color: #212121;\n}\n\n.header__menu {\n  font-size: xx-large;\n  margin: 20px auto;\n  padding: 20px 60px;\n  text-decoration: none;\n  display: block;\n  width: 30px;\n}\n\n.header__menu:hover {\n  color: #666666 10px;\n}\n\n/*\n * Top level navigation\n */\n\n .nav {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.nav__list {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 24%;\n  text-align: center;\n  line-height: 24px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: #616161;\n}\n\n.nav a:hover {\n  text-decoration: underline !important;\n  color: #000;\n}\n\n/* styling pendukung */\n \nmain {\n  padding: 16px;\n}\n \n#drawer ul {\n  list-style-type: none;\n  padding: 0 16px;\n}\n \n#drawer li {\n  padding: 5px 0px;\n}\n \n#drawer a {\n  text-decoration: none;\n  font-size: small;\n  color: #2b2c2d;\n}\n \n#hamburger {\n  font-size: 32px;\n  text-decoration: none;\n  color: black;\n}\n\n/*\n * Jumbotron\n */\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-image: url(\"../public/images/heros/hero.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 50%;\n}\n\n.hero__title {\n  color: #fff;\n  font-weight: 500;\n  font-size: 36px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n\n/*\n * main\n */\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n/*\n * content\n */\n\n.content {\n  padding: 32px;\n}\n\n/*\n * restos\n */\n\n.restos {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  margin: 32px 0;\n  text-align: left;\n}\n\n/*\n  resto\n*/\n\n.resto {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n/*detail page*/\n.resto_poster{\n\twidth: 50% !important;\n\theight: 370px;\n\tobject-fit: cover;\n\tobject-position: center;\n\tmargin-bottom: 0px;\n}\n\n.resto_title{\n\tfont-size: 30px;\n\ttext-align: center;\n\tmargin-bottom: 25px;\n}\n\n.checked {\n\tcolor: #2b2c2d;\n}\n\n.rating-name{\n\tdisplay: inline-block;\n}\n\n.info-list{\n\tfont-size: 18px;\n}\n.category {\n\tpadding: 0.3em 1em;\n\tcolor: #ffffff;\n\tbackground-color: #2b2c2d;\n\tmargin-right: 2px;\n\tborder: 1px solid transparent;\n\tborder-radius: 0px 10px 0px 10px;\n  }\n\n.categories{\n\tmargin-top: 10px;\n}\n\n.menu-detail h4 {\n  font-size: 15px;\n  padding-top: 10px;\n  color: #2b2c2d;\n  background-color: #ffffff;\n}\n\n.food {\n\ttext-align: left;\n  \tdisplay: flex;\n  \tflex-direction: column;\n  \talign-content: center;\n}\n\n.food li {\n\tfont-size: 14px;\n  padding: 3px 0;\n  display: block;\n  text-decoration: none;\n  background-color: #ffffff;\n  border: 0.5px solid black;\n  border-width: 0 0 0.5px;\n}\n\n.drink {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.drink li {\n\tfont-size: 14px;\n  padding: 3px 0;\n  display: block;\n  text-decoration: none;\n  background-color: #ffffff;\n  border: 0.5px solid black;\n  border-width: 0 0 0.5px;\n}\n\n.review-detail {\n\tmax-width: 100%;\n\tfont-size: 14px;\n\ttext-align: center;\n}\n  \n.review-detail-item {\n\tborder: 0.5px solid black;\n  border-radius: 5px;\n\tmargin-bottom: 1.5em;\n\tpadding: 5px 1em;\n}\n  \n.review-detail-item:last-child {\n\tmargin-bottom: 0;\n}\n  \n.header-review {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1em 1em;\n}\n  \n.namereview {\n\tfont-weight: bold;\n}\n  \n.date-rev {\n\tfont-size: 11px;\n\tfont-weight: lighter;\n}\n  \n.bodyrev {\n\tpadding: 1em;\n\ttext-align: left;\n}\n\n.p-detail{\n\tfont-size: 14px;\n\tmargin-top: 10px;\n}\n\n.detail{\n  padding: 20px;\n}\n\n.like {\n    font-size: 18px;\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    background-color: #ff8303;\n    color: white;\n    border: 0;\n    border-radius: 50%;\n    width: 55px;\n    height: 55px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/*\n * headline\n */\n\n.headline__figure {\n  width: 100%;\n}\n\n.headline__figure img {\n  width: 100%;\n}\n\n.headline__figure figcaption {\n  text-align: center;\n  color: #666666;\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 8px;\n}\n\n.headline__content {\n  width: 100%;\n  padding: 16px 0;\n}\n\n.headline__title {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.headline__description {\n  font-size: larger;\n  margin-top: 12px;\n}\n\n.headline__button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  margin-top: 24px;\n  cursor: pointer;\n  padding: 14px 16px;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  background-color: #2c3e50;\n  transition: opacity 0.3s;\n}\n\n.headline__button:hover {\n  opacity: 0.8;\n}\n\n/*\n * latest\n */\n\n.latest {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.latest__label {\n  font-size: 32px;\n  font-weight: lighter;\n}\n\n.latest__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n}\n\n/*\n * input\n */\n\ninput {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border: 3px solid #ccc;\n  border-radius: 4px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  outline: none;\n}\n\ninput:focus {\n  border: 3px solid #555;\n}\n\n/*\n * post\n */\n\n.posts {\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n/*\n * post item\n */\n\n.post-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.post-item__content {\n  padding: 16px;\n}\n\n.post-item__thumbnail {\n  width: 100%;\n  max-height: 30%;\n  object-fit: cover; \n  object-position: center;\n}\n\n.post-item__date {\n  text-transform: uppercase;\n  font-size: 15px;\n}\n\n.post-item__date__author {\n  color: rgb(32, 173, 189);\n  text-decoration: none;\n  font-size: 15px;\n  padding: 14px 16px;\n}\n\n.post-item__title {\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n}\n\n.post-item__title:hover {\n  opacity: 0.5;\n}\n\n.post-item__title a {\n  text-decoration: none;\n  color: inherit;\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n\n.post-item__description {\n  margin-top: 16px;\n  font-size: 12px;\n  line-height: 1.5em;\n}\n\n#more {display: none;}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/*\n * footer\n */\n\nfooter {\n  background-color: #2b2c2d;\n  padding: 2em;\n  width: 100%;\n  text-align: center;\n}\n\nfooter p {\n  color: #fff;\n  text-align: center;\n  font-family: 'Nunito', 'Segoe UI', arial;\n  font-size: medium;\n}\n\n"],sourceRoot:""}]);const l=s},948:(n,A,e)=>{e.d(A,{Z:()=>a});var t=e(537),r=e.n(t),i=e(645),o=e.n(i)()(r());o.push([n.id,".posts-item {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto;\r\n  grid-row-gap: 16px;\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #fff;\r\n    width: 300px;\r\n    position: absolute;\r\n\r\n    /* This trasform moves the drawer off canvas. */\r\n    -webkit-transform: translate(-300px, 0);\r\n    transform: translate(-300px, 0);\r\n\r\n    /* Optionally, we animate the drawer. */\r\n    transition: transform 0.3s ease;\r\n  }\r\n\r\n  .open {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n\r\n  .nav__item {\r\n    display: list-item;\r\n    border-bottom: 1px solid #E0E0E0;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 455px) {\r\n  .headline__content {\r\n    padding: 16px 16px;\r\n  }\r\n\r\n  .headline__title {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .headline__description {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .header__menu {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* @media screen and (max-width: 600px) {\r\n  .hero {\r\n    background-image: url('../../dist/images/hero-small.jpg');\r\n  }\r\n} */\r\n\r\n@media screen and (min-width: 650px) {\r\n  .headline__content {\r\n    margin: 0 auto;\r\n    max-width: 650px;\r\n  }\r\n\r\n  .post-item__content {\r\n    padding: 16px 32px 32px 32px;\r\n  }\r\n\r\n  .post-item__title {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .post-item__description {\r\n    font-size: 14px;\r\n  }\r\n  \r\n  #drawer {\r\n    position: relative;\r\n    transform: translate(0, 0);\r\n  }\r\n \r\n  #hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .restos {\r\n    grid-template-columns: 1fr 1fr;\r\n\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .nav__list {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n  .restos {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .headline {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .headline__content {\r\n    padding: 16px 32px;\r\n  }\r\n\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n\r\n  .restos {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n  .restos {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE;IACE,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;;IAElB,+CAA+C;IAC/C,uCAAuC;IACvC,+BAA+B;;IAE/B,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,kCAAkC;IAClC,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,gCAAgC;IAChC,WAAW;IACX,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;;;;GAIG;;AAEH;EACE;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,0BAA0B;EAC5B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,8BAA8B;;EAEhC;;AAEF;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,gBAAgB;IAChB,cAAc;EAChB;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF",sourcesContent:[".posts-item {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto;\r\n  grid-row-gap: 16px;\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #fff;\r\n    width: 300px;\r\n    position: absolute;\r\n\r\n    /* This trasform moves the drawer off canvas. */\r\n    -webkit-transform: translate(-300px, 0);\r\n    transform: translate(-300px, 0);\r\n\r\n    /* Optionally, we animate the drawer. */\r\n    transition: transform 0.3s ease;\r\n  }\r\n\r\n  .open {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n\r\n  .nav__item {\r\n    display: list-item;\r\n    border-bottom: 1px solid #E0E0E0;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 455px) {\r\n  .headline__content {\r\n    padding: 16px 16px;\r\n  }\r\n\r\n  .headline__title {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .headline__description {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .header__menu {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* @media screen and (max-width: 600px) {\r\n  .hero {\r\n    background-image: url('../../dist/images/hero-small.jpg');\r\n  }\r\n} */\r\n\r\n@media screen and (min-width: 650px) {\r\n  .headline__content {\r\n    margin: 0 auto;\r\n    max-width: 650px;\r\n  }\r\n\r\n  .post-item__content {\r\n    padding: 16px 32px 32px 32px;\r\n  }\r\n\r\n  .post-item__title {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .post-item__description {\r\n    font-size: 14px;\r\n  }\r\n  \r\n  #drawer {\r\n    position: relative;\r\n    transform: translate(0, 0);\r\n  }\r\n \r\n  #hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .restos {\r\n    grid-template-columns: 1fr 1fr;\r\n\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .nav__list {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n  .restos {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .headline {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .headline__content {\r\n    padding: 16px 32px;\r\n  }\r\n\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n\r\n  .restos {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n  .restos {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}"],sourceRoot:""}]);const a=o},46:(n,A,e)=>{var t=e(379),r=e.n(t),i=e(795),o=e.n(i),a=e(569),d=e.n(a),p=e(565),s=e.n(p),C=e(216),l=e.n(C),E=e(589),B=e.n(E),c=e(756),g={};g.styleTagTransform=B(),g.setAttributes=s(),g.insert=d().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),r()(c.Z,g),c.Z&&c.Z.locals&&c.Z.locals},362:(n,A,e)=>{var t=e(379),r=e.n(t),i=e(795),o=e.n(i),a=e(569),d=e.n(a),p=e(565),s=e.n(p),C=e(216),l=e.n(C),E=e(589),B=e.n(E),c=e(948),g={};g.styleTagTransform=B(),g.setAttributes=s(),g.insert=d().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),r()(c.Z,g),c.Z&&c.Z.locals&&c.Z.locals}},e={};function t(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return A[n](i,i.exports,t),i.exports}t.m=A,n=[],t.O=(A,e,r,i)=>{if(!e){var o=1/0;for(s=0;s<n.length;s++){for(var[e,r,i]=n[s],a=!0,d=0;d<e.length;d++)(!1&i||o>=i)&&Object.keys(t.O).every((n=>t.O[n](e[d])))?e.splice(d--,1):(a=!1,i<o&&(o=i));if(a){n.splice(s--,1);var p=r();void 0!==p&&(A=p)}}return A}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[e,r,i]},t.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return t.d(A,{a:A}),A},t.d=(n,A)=>{for(var e in A)t.o(A,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var A=t.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var e=A.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{t.b=document.baseURI||self.location.href;var n={954:0};t.O.j=A=>0===n[A];var A=(A,e)=>{var r,i,[o,a,d]=e,p=0;if(o.some((A=>0!==n[A]))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(d)var s=d(t)}for(A&&A(e);p<o.length;p++)i=o[p],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),t.nc=void 0;var r=t.O(void 0,[666,582,193,337,268,924],(()=>t(253)));r=t.O(r)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map