async function deleteFormHandler(event) {
    console.log('delete button')
    event.preventDefault();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(post_id)
    const response = await fetch('/api/posts/' + post_id, {
        method: 'DELETE',
    });

    if (response.ok) {
        console.log('success')
        document.location.replace('/dashboard/')
    }
    else {
        alert(response.statusText)
    }
}
  
document.getElementById('delete').addEventListener('click', deleteFormHandler);
