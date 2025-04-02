class ProductCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.primaryImage = this.querySelector('.product-card__image--primary');
        this.secondaryImage = this.querySelector('.product-card__image--secondary');

        this.bindEvents();
    }

    bindEvents() {
        if (!this.primaryImage || !this.secondaryImage) return;
    
        this.addEventListener('mouseenter', () => {
          this.primaryImage.style.opacity = '0';
          this.secondaryImage.style.opacity = '1';
        });
    
        this.addEventListener('mouseleave', () => {
          this.primaryImage.style.opacity = '1';
          this.secondaryImage.style.opacity = '0';
        });

        this.querySelectorAll('button').forEach((button) => {
            button.addEventListener('click', () => {
                this.secondaryImage.src = button.dataset.variantImage;
            });
        });
    }

    disconnectedCallback() {
    
    }
}

if (typeof customElements.get('product-card') === 'undefined') {
    customElements.define('product-card', ProductCard);
}