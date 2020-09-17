//Author: bcasac

const xapi = require('xapi');

xapi.event.on('UserInterface Extensions Panel Clicked', a);

function a(event){
  if(event.PanelId === 'call'){
    xapi.command('UserInterface Message TextInput Display', {
       FeedbackId: 'Dialer',
       Title: "Dialer",
       Text: 'Digite o número que deseja ligar',
       Placeholder: 'número'
      });
  }
}

xapi.event.on('UserInterface Message TextInput Response', (event) => {
  if(event.FeedbackId === 'Dialer'){
    xapi.command('Dial', { Number: event.Text+'@domain.com' }); //coloque aqui o seu domínio
    }
  });