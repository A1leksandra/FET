document.addEventListener('DOMContentLoaded', function () {
    const btnLoad = document.getElementById('loadUser');
    const userCard = document.getElementById('userCard');

    function renderUserList(users) {
        let html = "";

        users.forEach(user => {
            const picture = user.picture.large;
            const city = user.location.city;
            const country = user.location.country;
            const postcode = user.location.postcode;
            const email = user.email;

            html += `
                <div class="user-card">
                    <img src="${picture}" alt="User picture">
                    <div class="user-info">
                        <p><strong>Місто:</strong> ${city}</p>
                        <p><strong>Країна:</strong> ${country}</p>
                        <p><strong>Поштовий індекс:</strong> ${postcode}</p>
                        <p><strong>e-mail:</strong> ${email}</p>
                    </div>
                </div>
            `;
        });

        userCard.innerHTML = html;
    }

    function renderError(message) {
        userCard.innerHTML = `<p class="error">${message}</p>`;
    }

    btnLoad.addEventListener('click', function () {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => {
                if (!response.ok) throw new Error('Помилка HTTP: ' + response.status);
                return response.json();
            })
            .then(data => {
                renderUserList(data.results);
            })
            .catch(error => {
                renderError('Сталася помилка: ' + error.message);
            });
    });
});
