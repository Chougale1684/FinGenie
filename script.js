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

    // Genie Chatbot Interactivity
    const genieMascot = document.getElementById('genie-mascot');
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeChatbotBtn = document.getElementById('close-chatbot');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

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

    if (genieMascot && chatbotWindow && closeChatbotBtn && chatbotForm && chatbotInput && chatbotMessages) {
        genieMascot.addEventListener('click', () => {
            chatbotWindow.classList.toggle('hidden');
            if (!chatbotWindow.classList.contains('hidden')) {
                setTimeout(() => chatbotInput.focus(), 200);
                if (!chatbotMessages.hasChildNodes()) {
                    addChatMessage('bot', "Hello! I'm your financial literacy genie. How can I help you today?");
                }
            }
        });
        closeChatbotBtn.addEventListener('click', () => {
            chatbotWindow.classList.add('hidden');
        });
        chatbotForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const userMsg = chatbotInput.value.trim();
            if (!userMsg) return;
            addChatMessage('user', userMsg);
            chatbotInput.value = '';
            addChatMessage('bot', await getFinanceBotResponse(userMsg));
        });
    }

    function addChatMessage(sender, text) {
        const row = document.createElement('div');
        row.className = 'chatbot-message-row ' + sender;
        if (sender === 'bot') {
            const avatar = document.createElement('img');
            avatar.src = 'images/Genie Mascot.png';
            avatar.alt = 'Genie';
            avatar.className = 'genie-avatar';
            row.appendChild(avatar);
        }
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chatbot-message ' + sender;
        msgDiv.textContent = text;
        row.appendChild(msgDiv);
        chatbotMessages.appendChild(row);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    async function getFinanceBotResponse(userMsg) {
        // Placeholder: Replace with real finance Q&A API or logic
        // For now, return a generic response
        // You can integrate OpenAI, Google, or any finance Q&A API here
        if (userMsg.toLowerCase().includes('budget')) {
            return 'A budget is a plan for your money. It helps you track income and expenses!';
        }
        if (userMsg.toLowerCase().includes('investment')) {
            return 'Investments are ways to grow your money, like stocks, bonds, or mutual funds.';
        }
        if (userMsg.toLowerCase().includes('saving')) {
            return 'Saving means setting aside money for future needs or emergencies.';
        }
        return "I'm your FinGenie! Ask me anything about finance, money, saving, investing, or budgeting.";
    }
}); 
