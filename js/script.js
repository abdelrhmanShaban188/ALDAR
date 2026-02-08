document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Personal Information
    const { personalInfo, skills, projects, categories } = portfolioData;

    // Update Headings and Text
    document.querySelector('#hero-name').innerHTML = `<span class="gradient-text">${personalInfo.name}</span>`;

    // Typing Effect for Title
    const titleElement = document.querySelector('#hero-title');
    const titleText = personalInfo.title;
    titleElement.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < titleText.length) {
            titleElement.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    document.querySelector('#hero-desc').innerHTML = personalInfo.about;
    document.querySelector('#contact-email').href = `mailto:${personalInfo.email}`;
    document.querySelector('#footer-name').textContent = personalInfo.name;

    // Set Social Links
    document.querySelector('#link-linkedin').href = personalInfo.linkedIn;
    document.querySelector('#link-linkedin').target = "_blank";

    // WhatsApp Link (removing non-numeric chars from phone)
    const whatsappPhone = personalInfo.phone.replace(/\D/g, '');
    document.querySelector('#link-whatsapp').href = `https://wa.me/${whatsappPhone}`;
    document.querySelector('#link-whatsapp').target = "_blank";

    document.querySelector('#link-gmail').href = `mailto:${personalInfo.email}`;

    // 2. Render Skills
    const skillsContainer = document.querySelector('#skills-container');
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = skill;
        skillsContainer.appendChild(span);
    });

    // 2.5 Render Specialized Services
    const servicesGrid = document.querySelector('#services-grid');
    if (servicesGrid) {
        portfolioData.services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card animate-up';
            card.innerHTML = `
                <div class="service-icon">${service.icon.charAt(0)}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.details}</p>
                <div class="service-tech">
                    ${service.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                </div>
            `;
            servicesGrid.appendChild(card);
        });
    }

    // 3. Render Tabs
    const tabsContainer = document.querySelector('#tabs-container');
    categories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = cat.name;
        btn.dataset.category = cat.id;
        btn.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter Projects
            renderProjects(cat.id);
        });
        tabsContainer.appendChild(btn);
    });

    // 4. Render Projects & Services
    const projectsContainer = document.querySelector('#projects-container');

    function renderProjects(filterId = 'all') {
        projectsContainer.innerHTML = '';

        let displayList = [];
        if (filterId === 'all') {
            displayList = [...portfolioData.projects, ...portfolioData.services];
        } else if (filterId === 'services') {
            displayList = portfolioData.services;
        } else {
            displayList = portfolioData.projects.filter(p => p.category === filterId);
        }

        displayList.forEach(item => {
            const card = document.createElement('div');
            card.className = 'project-card animate-up';

            const isService = item.category === 'services';

            card.innerHTML = `
                <div class="project-portal ${isService ? 'service-portal' : ''}">
                    ${item.image ? `<img src="${item.image}" alt="${item.title}" class="project-image">` : `<div class="service-icon-placeholder">${item.icon}</div>`}
                </div>
                <div class="project-info">
                    <div class="project-caption-container">
                        <span class="project-arrow">${isService ? '✴' : '↳'}</span>
                        <div class="project-details">
                            <h3 class="project-title">${item.title}</h3>
                            <div class="project-meta">
                                ${item.consultant ? `<strong>Consultant:</strong> ${item.consultant}<br>` : ''}
                                ${item.contractor ? `<strong>Contractor:</strong> ${item.contractor}<br>` : ''}
                                ${item.area ? `<strong>Area:</strong> ${item.area}<br>` : ''}
                                ${item.location ? `<strong>Location:</strong> ${item.location}<br>` : ''}
                                <p class="project-desc-text" style="margin-top: 0.5rem; color: var(--text-secondary); text-transform: none;">
                                    ${item.details}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    }

    renderProjects();

    // 5. "Add Project" Feature
    const modal = document.querySelector('#add-project-modal');
    const addBtn = document.querySelector('#fab-add');
    const form = document.querySelector('#add-project-form');

    addBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newProject = {
            id: Date.now(),
            category: "bim",
            title: document.querySelector('#p-title').value,
            details: document.querySelector('#p-desc').value,
            consultant: document.querySelector('#p-consultant').value,
            contractor: document.querySelector('#p-contractor').value,
            area: document.querySelector('#p-area').value,
            location: document.querySelector('#p-link').value,
            image: "assets/images/placeholder.png",
            technologies: ["BIM"]
        };

        projects.push(newProject);
        renderProjects(document.querySelector('.tab-btn.active').dataset.category);

        modal.style.display = 'none';
        form.reset();

        const jsonString = JSON.stringify(newProject, null, 4);
        alert(`Project Added to View! \n\nTo save permanently, add this to projects in data.js:\n\n${jsonString}`);
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
