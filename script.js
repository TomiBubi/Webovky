// Vyber hlavní obrázek a náhledy
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.carousel-thumbnails .thumbnail');

// Funkce pro přepínání obrázků
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // Odeber třídu "active" ze všech náhledů
        thumbnails.forEach((thumb) => thumb.classList.remove('active'));

        // Přidej třídu "active" aktuálnímu náhledu
        thumbnail.classList.add('active');

        // Nastav zdroj hlavního obrázku na zdroj aktuálního náhledu
        mainImage.src = thumbnail.src;
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            // Odstranění aktivní třídy ze všech položek v sekci
            const section = this.closest('.tech-section');
            section.querySelectorAll('.tech-item').forEach(i => i.classList.remove('active'));
            
            // Skrytí všech specifikací v sekci
            section.querySelectorAll('.spec-overlay').forEach(spec => spec.classList.remove('active'));
            
            // Přidání aktivní třídy najeté položce
            this.classList.add('active');
            
            // Zobrazení příslušné specifikace
            const target = this.getAttribute('data-target');
            const spec = section.querySelector(`#${target}-spec`);
            if (spec) {
                spec.classList.add('active');
            }
        });

        item.addEventListener('mouseout', function() {
            // Odstranění aktivní třídy z položky
            this.classList.remove('active');
            
            // Skrytí příslušné specifikace
            const target = this.getAttribute('data-target');
            const spec = this.closest('.tech-section').querySelector(`#${target}-spec`);
            if (spec) {
                spec.classList.remove('active');
            }
        });
    });
});