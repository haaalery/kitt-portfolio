document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll logic
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const aboutSection = document.getElementById('about');

    if (scrollIndicator && aboutSection) {
        scrollIndicator.addEventListener('click', () => {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Modal structure injection
    const modalHTML = `
        <div class="modal-overlay" id="projectModal">
            <div class="modal-content">
                <span class="modal-close" onclick="closeProjectModal()">&times;</span>
                <div class="modal-body">
                    <div class="modal-img-area">
                        <div class="placeholder-box">
                            <span>MISSION ASSETS</span>
                        </div>
                    </div>
                    <div class="modal-details">
                        <h2 id="modalTitle">MISSION BRIEFING</h2>
                        <p id="modalDesc" class="description">Detailed description will appear here...</p>
                        <h4 style="margin-bottom: 1.5rem; color: var(--green); text-transform: uppercase; letter-spacing: 2px;">Tech Payload:</h4>
                        <ul id="modalTasks" class="journal-tasks">
                            <!-- Tasks will be injected here -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    console.log("Kitt Harley Sy's Portfolio: External script loaded and initialized.");
});

// Modal Control Functions
function openProjectModal(title, description, tasks) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalTasks = document.getElementById('modalTasks');

    modalTitle.innerText = title;
    modalDesc.innerText = description;
    
    // Clear and populate tasks
    modalTasks.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerText = task;
        modalTasks.appendChild(li);
    });

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of content
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeProjectModal();
    }
}