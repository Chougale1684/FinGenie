document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');
    const homeSection = document.getElementById('home-section');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const getStartedBtn = document.getElementById('get-started');
    const lessonsContainer = document.getElementById('lessons-container');
    const logoutBtn = document.getElementById('logout');

    // Show/Hide Sections
    function showSection(section) {
        [loginSection, signupSection, homeSection].forEach(s => s.classList.add('hidden'));
        section.classList.remove('hidden');
    }

    // Event Listeners for Navigation
    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(signupSection);
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(loginSection);
    });

    // Form Submissions
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Here you would typically make an API call to verify credentials
        // For demo purposes, we'll just show the home section
        showSection(homeSection);
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const age = document.getElementById('signup-age').value;
        const gender = document.getElementById('signup-gender').value;
        const role = document.getElementById('signup-role').value;
        const password = document.getElementById('signup-password').value;

        // Here you would typically make an API call to create the account
        // For demo purposes, we'll just show the home section
        showSection(homeSection);
    });

    // Get Started Button
    getStartedBtn.addEventListener('click', () => {
        lessonsContainer.classList.remove('hidden');
        lessonsContainer.scrollIntoView({ behavior: 'smooth' });
    });

    // Logout
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(loginSection);
    });

    // Age-based Content Filtering
    function filterContentByAge(age) {
        const ageGroups = document.querySelectorAll('.age-group');
        ageGroups.forEach(group => {
            const ageRange = group.querySelector('h3').textContent;
            if (ageRange.includes(age)) {
                group.style.display = 'block';
            } else {
                group.style.display = 'none';
            }
        });
    }

    // Initialize the app
    showSection(loginSection);
}); 