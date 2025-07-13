
            document.addEventListener('DOMContentLoaded', () => {
                const counters = document.querySelectorAll('.number');
                const speed = 200;

                const animateCounter = (counter) => {
                    const target = +counter.getAttribute('data-target');
                    const updateCount = () => {
                        const count = +counter.innerText;
                        const increment = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + increment);
                            setTimeout(updateCount, 10); 
                        } else {
                            counter.innerText = target.toLocaleString(); 
                        }
                    };
                    updateCount();
                };

                const observerOptions = {
                    root: null,
                    threshold: 0.1
                };

                const observerCallback = (entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const counter = entry.target.querySelector('.number') || entry.target;
                            if (counter.getAttribute('data-target') && !counter.classList.contains('animated')) {
                                animateCounter(counter);
                                counter.classList.add('animated');
                            }
                        }
                    });
                };

                const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

                const counterItems = document.querySelectorAll('.counter-item');
                if (counterItems.length > 0) {
                    counterItems.forEach(item => intersectionObserver.observe(item));
                } else {
                    counters.forEach(counter => {
                        if (counter.getAttribute('data-target')) {
                            intersectionObserver.observe(counter);
                        }
                    });
                }

                if (!('IntersectionObserver' in window)) {
                    counters.forEach(counter => {
                        if (counter.getAttribute('data-target')) {
                            animateCounter(counter);
                        }
                    });
                }
            });

               const form = document.getElementById("thanks");
        const successMessage =
            document.getElementById("congo");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            successMessage.style.display = "block";
        });

const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
                navLinks.style.display = "flex";

})

       

        function animateCounters() {
            const counters = document.querySelectorAll('.number');
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / 200;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(() => animateCounters(), 10);
                } else {
                    counter.innerText = target;
                }
            });
        }

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.addEventListener('DOMContentLoaded', () => {
            const impactSection = document.querySelector('.impact-section');
            if (impactSection) {
                observer.observe(impactSection);
            }
        });

        document.getElementById('thanks').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const msg = document.getElementById('congo');
            
            if (email) {
                msg.style.display = 'block';
                document.getElementById('email').value = '';
                setTimeout(() => {
                    msg.style.display = 'none';
                }, 3000);
            }
        });

        document.querySelector('.arrow-icon').addEventListener('click', () => {
            document.querySelector('.about-us').scrollIntoView({
                behavior: 'smooth'
            });
        });
  

              // Sample news data focusing on Ghana's climate initiatives
        const newsData = [
            {
                id: 1,
                title: "Ghana Launches New Carbon Credit Program for Farmers",
                summary: "The government unveils an innovative carbon credit initiative targeting smallholder farmers. This program aims to incentivize sustainable agricultural practices while generating revenue for rural communities.",
                image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Policy",
                date: "2025-07-10"
            },
            {
                id: 2,
                title: "Accra's Green Transportation Initiative Shows Remarkable Progress",
                summary: "Electric bus fleet expansion and dedicated cycling lanes are transforming urban mobility. The capital city reports a 25% reduction in transport emissions since the program's launch.",
                image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Transportation",
                date: "2025-07-08"
            },
            {
                id: 3,
                title: "Solar Energy Cooperative Empowers Northern Ghana Communities",
                summary: "A groundbreaking solar energy cooperative brings clean electricity to 50 villages in northern Ghana. The project demonstrates how renewable energy can drive economic development in rural areas.",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Energy",
                date: "2025-07-05"
            },
            {
                id: 4,
                title: "Ghana's Mangrove Restoration Project Wins International Recognition",
                summary: "The ambitious coastal restoration initiative receives global acclaim for its innovative approach. Over 10,000 hectares of mangrove forests have been successfully restored, protecting coastal communities.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Conservation",
                date: "2025-07-03"
            },
            {
                id: 5,
                title: "Climate-Smart Agriculture Training Program Expands Nationwide",
                summary: "Extension services now reach 200,000 farmers across Ghana with climate-resilient farming techniques. The program focuses on drought-resistant crops and water conservation methods.",
                image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Agriculture",
                date: "2025-07-01"
            },
            {
                id: 6,
                title: "Ghana's Plastic Waste Reduction Initiative Achieves Major Milestone",
                summary: "The national plastic waste reduction program successfully diverts 40% of plastic waste from landfills. New recycling facilities and community education programs drive this remarkable achievement.",
                image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Waste Management",
                date: "2025-06-28"
            },
            {
                id: 7,
                title: "Green Building Standards Mandatory for New Construction in Major Cities",
                summary: "New regulations require all commercial buildings to meet sustainability standards. The initiative aims to reduce energy consumption by 30% in urban areas within five years.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Construction",
                date: "2025-06-25"
            },
            {
                id: 8,
                title: "Community-Based Forest Conservation Shows Promising Results",
                summary: "Local communities take the lead in protecting Ghana's forest reserves. The collaborative approach has led to a 15% increase in forest coverage over the past two years.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                category: "Forestry",
                date: "2025-06-22"
            },
            {
                id: 9,
                title: "Ghana's Youth Climate Action Network Gains Global Momentum",
                summary: "Young environmental activists from Ghana share their innovative solutions at international forums. Their grassroots initiatives inspire climate action across West Africa.",
                image: "https://yotaweb.org/wp-content/uploads/2025/05/LIB20252.webp",
                category: "Youth Action",
                date: "2025-06-20"
            }
        ];

        let currentPage = 0;
        const articlesPerPage = 6;
        let displayedArticles = 0;

        // Format date function
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        // Create news card HTML
        function createNewsCard(article) {
            return `
                <div class="news-card">
                    <img src="${article.image}" alt="${article.title}" class="card-image">
                    <div class="card-content">
                        <span class="card-category">${article.category}</span>
                        <h3 class="card-title">${article.title}</h3>
                        <p class="card-summary">${article.summary}</p>
                        <div class="card-footer">
                            <span class="card-date">${formatDate(article.date)}</span>
                           
                        </div>
                    </div>
                </div>
            `;
        }

        // Load more articles
        function loadMoreArticles() {
            const newsGrid = document.getElementById('newsGrid');
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            
            const start = displayedArticles;
            const end = Math.min(start + articlesPerPage, newsData.length);
            
            for (let i = start; i < end; i++) {
                const cardHTML = createNewsCard(newsData[i]);
                newsGrid.innerHTML += cardHTML;
            }
            
            displayedArticles = end;
            
            // Hide load more button if all articles are displayed
            if (displayedArticles >= newsData.length) {
                loadMoreBtn.style.display = 'none';
            }
            
            // Trigger animations for new cards
            setTimeout(() => {
                const newCards = newsGrid.querySelectorAll('.news-card');
                newCards.forEach((card, index) => {
                    if (index >= start) {
                        card.style.animation = `fadeInUp 0.6s ease forwards`;
                        card.style.animationDelay = `${(index - start) * 0.1}s`;
                    }
                });
            }, 100);
        }

        // Read article function (placeholder)
        function readArticle(id) {
            const article = newsData.find(a => a.id === id);
            alert(`Reading: ${article.title}\n\nThis would normally redirect to the full article page.`);
        }

        // Intersection Observer for scroll animation
        function initScrollAnimation() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            observer.observe(document.getElementById('newsSection'));
        }

        // Initialize the page
        function init() {
            // Load initial articles
            loadMoreArticles();
            
            // Add event listener for load more button
            document.getElementById('loadMoreBtn').addEventListener('click', loadMoreArticles);
            
            // Initialize scroll animation
            initScrollAnimation();
        }

        // Start when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);



         class TestimonialSlider {
            constructor() {
                this.track = document.getElementById('testimonialTrack');
                this.prevBtn = document.getElementById('prevBtn');
                this.nextBtn = document.getElementById('nextBtn');
                this.navDots = document.getElementById('navDots');
                this.progressBar = document.getElementById('progressBar');
                
                this.currentIndex = 0;
                this.totalSlides = this.track.children.length;
                this.autoplayInterval = null;
                this.autoplayDuration = 5000; // 5 seconds
                this.progressInterval = null;
                
                this.init();
            }

            init() {
                this.createDots();
                this.bindEvents();
                this.updateSlider();
                this.startAutoplay();
            }

            createDots() {
                for (let i = 0; i < this.totalSlides; i++) {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    if (i === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => this.goToSlide(i));
                    this.navDots.appendChild(dot);
                }
            }

            bindEvents() {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
                
                // Pause autoplay on hover
                const section = document.querySelector('.testimonial-section');
                section.addEventListener('mouseenter', () => this.pauseAutoplay());
                section.addEventListener('mouseleave', () => this.startAutoplay());
            }

            updateSlider() {
                const offset = -this.currentIndex * 100;
                this.track.style.transform = `translateX(${offset}%)`;
                
                // Update dots
                const dots = this.navDots.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === this.currentIndex);
                });
            }

            goToSlide(index) {
                this.currentIndex = index;
                this.updateSlider();
                this.resetAutoplay();
            }

            nextSlide() {
                this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
                this.updateSlider();
                this.resetAutoplay();
            }

            prevSlide() {
                this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
                this.updateSlider();
                this.resetAutoplay();
            }

            startAutoplay() {
                this.pauseAutoplay();
                this.startProgressBar();
                this.autoplayInterval = setInterval(() => {
                    this.nextSlide();
                }, this.autoplayDuration);
            }

            pauseAutoplay() {
                if (this.autoplayInterval) {
                    clearInterval(this.autoplayInterval);
                    this.autoplayInterval = null;
                }
                this.pauseProgressBar();
            }

            resetAutoplay() {
                this.pauseAutoplay();
                this.startAutoplay();
            }

            startProgressBar() {
                this.progressBar.style.width = '0%';
                let progress = 0;
                const increment = 100 / (this.autoplayDuration / 50);
                
                this.progressInterval = setInterval(() => {
                    progress += increment;
                    if (progress >= 100) {
                        progress = 100;
                        clearInterval(this.progressInterval);
                    }
                    this.progressBar.style.width = progress + '%';
                }, 50);
            }

            pauseProgressBar() {
                if (this.progressInterval) {
                    clearInterval(this.progressInterval);
                    this.progressInterval = null;
                }
            }
        }

        // Initialize the slider when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            new TestimonialSlider();
        });