const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');






function sendEmail(){
    let parms= {
        name: fullName.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
    }
    
    emailjs.send('service_ewftg0c','template_ir82br5',parms).then(alert(`thank you ${fullName.value},your message have been send`))

    emailjs.send('service_ewftg0c','template_n0woz0s',parms).then(console.log('your message have been sent!'))

    fullName.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
    

}

