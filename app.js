const langArr = {
    
  
    about: {
      en: 'About',
      fr: 'A propos de',
    }, 
  
    menu: {
      en: 'Menu',
      fr: 'Menu',
    },
    
    gallery: {
        en: 'Gallery',
        fr: 'Galerie',
    },
    
    contacts: {
        en: 'Contacts',
        fr: 'Contacts ',
    },
    
    main: {
        en: 'GooD caffee',
        fr: 'Bon café'
    },
  };
  
  document
    .querySelectorAll('.lang button')
    .forEach((b) => b.addEventListener('click', setLang));
  
  function setLang() {
    for (let key in langArr) {
      let elem = document.querySelector('#lng-' + key);
      if (elem) {
        elem.innerHTML = langArr[key][this.value];
      }
    }
  }