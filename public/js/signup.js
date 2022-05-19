document.getElementById('signup').addEventListener('click', signupFormHandler);

async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.getElementById('username-signup').value.trim();
    
    const password = document.getElementById('password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/signup', {
            method: 'post',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            console.log('success');
            window.location.href = '/';
        }
    }
}