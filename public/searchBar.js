// const searchPc = document.getElementById('search_pc');
const searchMobile = document.getElementById('search_mobile');
// const searchBar = document.getElementById('input-container');
// const searchExit = document.querySelector('.search-exit');
const searchModal = document.getElementById('searchModal');

// searchPc.addEventListener('click', () => {
//     searchBar.classList.add("activate");
// });

searchMobile.addEventListener('click', () => {
    searchModal.classList.add('active')
});

// searchExit.addEventListener('click', ()=> {
//     searchBar.classList.remove('activate');
// });

class SearchModal {
    constructor(btn) {
      this.btn = btn;
      this.modal = document.getElementById(btn.dataset.target);
      this.dismiss = this.modal.querySelector("[data-dismiss='modal']");
      this.search = this.modal.querySelector('.search-input');
      this.tags = this.modal.querySelectorAll('.tag');
      this.content = this.modal.querySelector('.content');
      this.backBtn = this.modal.querySelector('.back');
      this.selectedTag = this.modal.querySelector('.selected-tag');
    }
  
    init() {
      this.bindEvents();
    }
  
    bindEvents() {
      this.btn.addEventListener('click', () => {
        this.toggle();
      });
  
      this.dismiss.addEventListener('click', () => {
        this.close();
      });
  
      document.body.addEventListener('keyup', event => {
        //If keyboard shortcut is ctrl + s
        if (event.ctrlKey && event.which === 83) {
          this.toggle();
        }
        if (event.which === 27) {
          this.close();
        }
      });
  
      this.tags.forEach(tag => {
        tag.addEventListener('click', event => {
          var tagText = tag.textContent;
          this.content.classList.contains('show-tag-results') ? this.hideTagResults() : this.showTagResults(tagText);
        });
  
        tag.addEventListener('keyup', event => {
          var tagText = tag.textContent;
          if (event.which === 13) {
            this.content.classList.contains('show-tag-results') ? this.hideTagResults() : this.showTagResults(tagText);
          }
        });
      });
  
      this.backBtn.addEventListener('click', event => {
        this.content.classList.toggle('show-tag-results');
      });
    }
  
    showTagResults(text) {
      this.selectedTag.textContent = text;
      this.content.classList.add('show-tag-results');
    }
  
    hideTagResults() {
      this.content.classList.remove('show-tag-results');
    }
  
    toggle() {
      this.modal.classList.contains('active') ? this.close() : this.open();
    }
  
    close() {
      this.modal.classList.remove('active');
      this.hideTagResults();
    }
  
    open() {
      this.modal.classList.add('active');
    }}
  
  
  const searchModalBtns = Array.from(document.querySelectorAll("[data-toggle='modal']"));
  
  for (let btn of searchModalBtns) {
    const search = new SearchModal(btn);
    search.init();
  }
