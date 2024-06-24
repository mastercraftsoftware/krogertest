document.getElementById('cartForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userDetails = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    fetch('https://your-external-service-url/getCartData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    })
    .then(response => response.json())
    .then(data => {
        if (data.cartItems) {
            document.getElementById('result').innerText = JSON.stringify(data.cartItems, null, 2);
        } else {
            console.error('No cart items found');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
