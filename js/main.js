// Odota, että DOM on täysin latautunut
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio-suodattimet
    setupPortfolioFilters();
    
    // Yhteydenottolomake
    setupContactForm();

    // Scrollaus-animaatio
    setupScrollAnimation();
    
    // Modal-toiminnallisuus (lightbox) portfoliokuville
    setupPortfolioModal();
});

/**
 * Asettaa portfolio-sivun suodatintoiminnallisuuden
 */
function setupPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterButtons.length) return; // Jos ei ole suodatinpainikkeita, lopeta
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Poista aktiivinen luokka kaikilta painikkeilta
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Lisää aktiivinen luokka klikatulle painikkeelle
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Animoi suodatus
            projectCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        if (card.getAttribute('data-category') === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                    
                    setTimeout(() => {
                        if (card.style.display === 'block') {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }
                    }, 50);
                }, 300);
            });
        });
    });
}

/**
 * Asettaa yhteydenottolomakkeen toiminnallisuuden
 */
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return; // Jos lomaketta ei ole, lopeta
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Näytä latausanimaatio
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Lähetetään...';
        submitBtn.disabled = true;
        
        // Kerää lomakkeen tiedot
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simuloi lähetystä (tässä demossa 2s viive)
        setTimeout(() => {
            // Tämä on vain demo, joten näytämme viestin konsolissa
            console.log('Lomakkeen tiedot:', formData);
            
            // Näytä käyttäjälle viesti
            showFormSubmitMessage(true);
            
            // Palauta alkuperäinen nappi
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Tyhjennä lomake
            contactForm.reset();
        }, 2000);
    });
}

/**
 * Näyttää viestin lomakkeen lähetyksen jälkeen
 * @param {boolean} success - Onnistuiko lähetys
 */
function showFormSubmitMessage(success) {
    // Tarkista, onko viestielementti jo olemassa
    let messageElement = document.querySelector('.form-message');
    
    // Jos ei ole, luo se
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.className = 'form-message';
        const contactForm = document.getElementById('contact-form');
        contactForm.parentNode.insertBefore(messageElement, contactForm.nextSibling);
    }
    
    // Aseta viesti ja tyyli
    if (success) {
        messageElement.innerHTML = '<i class="fas fa-check-circle"></i> Kiitos viestistäsi! Olemme sinuun yhteydessä pian.';
        messageElement.className = 'form-message success';
    } else {
        messageElement.innerHTML = '<i class="fas fa-exclamation-circle"></i> Viestin lähetyksessä tapahtui virhe. Yritä uudelleen.';
        messageElement.className = 'form-message error';
    }
    
    // Piilota viesti 5 sekunnin kuluttua
    setTimeout(() => {
        messageElement.style.opacity = '0';
        setTimeout(() => {
            messageElement.remove();
        }, 500);
    }, 5000);
}

/**
 * Lisää animaatiot elementteihin scrollatessa
 */
function setupScrollAnimation() {
    const animatedElements = document.querySelectorAll('.section-header, .project-card, .cv-item, .skill-item');
    
    // Jos elementtejä ei ole, lopeta
    if (!animatedElements.length) return;
    
    // Lisää alkutyyli elementeille
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Funktio, joka tarkistaa elementin näkyvyyden
    function checkVisibility() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Tarkista näkyvyys aluksi
    checkVisibility();
    
    // Lisää scroll-kuuntelija
    window.addEventListener('scroll', checkVisibility);
}

/**
 * Lisää portfolio-modalin (lightbox) toiminnallisuuden
 */
function setupPortfolioModal() {
    const searchBtns = document.querySelectorAll('.overlay-btn:last-child');
    
    if (!searchBtns.length) return;
    
    // Luo modal elementti
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-image-container">
                <img src="" alt="Projektin isompi kuva">
            </div>
            <div class="modal-info">
                <h3></h3>
                <p class="modal-category"></p>
                <div class="modal-description"></div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Hae modal elementit
    const modalImage = modal.querySelector('img');
    const modalTitle = modal.querySelector('h3');
    const modalCategory = modal.querySelector('.modal-category');
    const modalDescription = modal.querySelector('.modal-description');
    const closeBtn = modal.querySelector('.close-modal');
    
    // Lisää click-tapahtumat hakupainikkeille
    searchBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hae projektin tiedot
            const projectCard = this.closest('.project-card');
            const projectImage = projectCard.querySelector('.image-placeholder').innerHTML;
            const projectTitle = projectCard.querySelector('h3').textContent;
            const projectCategory = projectCard.querySelector('.project-category').textContent;
            const projectDescription = projectCard.querySelector('.project-description').textContent;
            
            // Aseta tiedot modaliin
            modalImage.src = 'placeholder'; // Tosielämässä tässä olisi oikea kuvan URL
            modalTitle.textContent = projectTitle;
            modalCategory.textContent = projectCategory;
            modalDescription.textContent = projectDescription;
            
            // Näytä modal
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.style.opacity = '1';
                modal.querySelector('.modal-content').style.transform = 'translateY(0)';
            }, 10);
        });
    });
    
    // Sulje modal klikattaessa sulje-painiketta
    closeBtn.addEventListener('click', closeModal);
    
    // Sulje modal klikattaessa taustaa
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Funktio modalin sulkemiseen
    function closeModal() {
        modal.querySelector('.modal-content').style.transform = 'translateY(-50px)';
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

/**
 * Lisää responsiivisen navigaation toiminnallisuuden mobiililaitteille
 * Tämä on kommentoitu pois, koska emme ole vielä lisänneet mobiilinavigaatiota HTML:ään
 */
/*
function setupMobileNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}
*/
