import Chaos from './Chaos';

const chaos = new Chaos(document.querySelector('.chaos_organizer'), 'http://localhost:7070');
// const chaos = new Chaos(document.querySelector('.chaos_organizer'), 'https://peaceful-ridge-37509.herokuapp.com');
chaos.init();
