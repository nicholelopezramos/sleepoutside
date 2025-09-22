// const alertUrl = '../public/json/alert.json';

export default class Alert {
    constructor() {    
    }

    async showAlerts() {
        const response = await fetch('../public/json/alert.json')
        const alerts = await response.json();

        if(alerts.length > 0) {
            const section = document.createElement('section');
            section.classList.add('alert-list')

            alerts.forEach(alert => {
                const p = document.createElement('p');
                p.textContent = alert.message;
                p.style.backgroundColor = alert.background
                p.style.color = alert.color
                section.appendChild(p);
            })

            const main = document.querySelector('main');

            if (main) {
                main.prepend(section);
            }

        }


    }
}