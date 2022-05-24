document.getElementById('logout').addEventListener('click', logout);
async function logout() {
    event.preventDefault();
    console.log('logout handler')
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
    
}