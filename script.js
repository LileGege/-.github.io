// 页面加载时从 localStorage 读取数据并更新页面
window.addEventListener('DOMContentLoaded', function() {
    loadPersonalInfo();
});

function loadPersonalInfo() {
    const data = JSON.parse(localStorage.getItem('personalInfo'));

    if (data) {
        // 更新基本信息
        if (data.name) {
            document.querySelector('.hero-title .highlight').textContent = data.name;
            document.querySelector('.footer p').textContent = `© 2026 ${data.name}. All rights reserved.`;
        }
        if (data.title) {
            document.querySelector('.hero-subtitle').textContent = data.title;
        }
        if (data.description) {
            document.querySelector('.hero-description').textContent = data.description;
        }

        // 更新关于我
        if (data.aboutIntro || data.education || data.experience || data.hobbies || data.goals) {
            const aboutContent = document.querySelector('.about-content');
            aboutContent.innerHTML = `
                <p>${data.aboutIntro || ''}</p>
                <ul>
                    ${data.education ? `<li><strong>教育背景：</strong>${data.education}</li>` : ''}
                    ${data.experience ? `<li><strong>工作岗位：</strong>${data.experience}</li>` : ''}
                    ${data.hobbies ? `<li><strong>个人爱好：</strong>${data.hobbies}</li>` : ''}
                    ${data.goals ? `<li><strong>职业追求：</strong>${data.goals}</li>` : ''}
                </ul>
            `;
        }

        // 更新技能
        const skillCards = document.querySelectorAll('.skill-card');
        const skills = [
            { title: data.skill1Title, content: data.skill1Content, icon: '💻' },
            { title: data.skill2Title, content: data.skill2Content, icon: '🧪' },
            { title: data.skill3Title, content: data.skill3Content, icon: '🤖' },
            { title: data.skill4Title, content: data.skill4Content, icon: '🛠️' }
        ];

        skillCards.forEach((card, index) => {
            if (skills[index] && skills[index].title && skills[index].content) {
                card.querySelector('h3').textContent = skills[index].title;
                card.querySelector('p').textContent = skills[index].content;
            }
        });

        // 更新联系方式
        if (data.email) {
            const emailLink = document.querySelector('a[href^="mailto:"]');
            emailLink.href = `mailto:${data.email}`;
            emailLink.querySelector('span:last-child').textContent = data.email;
        }
        if (data.github) {
            const githubLink = document.querySelector('a[href*="github.com"]');
            githubLink.href = `https://github.com/${data.github}`;
        }
    }
}

// 平滑滚动已通过 CSS 实现

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// 为导航链接添加活动状态
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', function() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// 添加滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// 观察所有卡片元素
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// 控制台输出欢迎信息
console.log('%c欢迎来到我的个人主页！', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%c如果你对这个网站感兴趣，欢迎联系我！', 'color: #6b7280; font-size: 14px;');
