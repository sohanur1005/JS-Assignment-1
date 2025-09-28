function sendNotification(email) {
    
    if (typeof email !== 'string' || email.indexOf('@') === -1) {
        return "Invalid Email";
    }

    let parts = email.split('@');
    if (parts.length !== 2) {
        return "Invalid Email"; 
    }

    let username = parts[0];
    let domain = parts[1];

    
    let message = `${username} sent you an email from ${domain}`;

    return message;
}
