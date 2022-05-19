async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const text = document.querySelector('textarea[name="post-text"]').value;
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch('/api/posts/' + post_id, {
      method: 'PUT',
      body: JSON.stringify({
        title: title,
        text: text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  
  }
  
document.getElementById('save').addEventListener('click', editFormHandler);