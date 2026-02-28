window.addEventListener('load', function () {

    setTimeout(() => {

        const topbar = document.querySelector('.topbar');

        if (!topbar) return;

        const logoutButton = document.createElement('button');

        logoutButton.innerText = 'Logout';
        logoutButton.classList.add('swagger-logout-btn');

        logoutButton.onclick = function () {
            window.location.href = '/auth/logout';
        };

        topbar.appendChild(logoutButton);

    }, 800);

});