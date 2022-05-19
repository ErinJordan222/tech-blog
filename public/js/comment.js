async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-box"]').value.trim();
  
    const post_id = parseInt(window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ]);
  
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id: post_id,
            comment_text: comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
document.getElementById('add-comment').addEventListener('click', commentFormHandler);