import '../scss/main.scss'

document.addEventListener('DOMContentLoaded', () => {
    console.log('Contact page loaded')

    const contactForm = document.getElementById('contactForm')

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault()

        // Get form data
        const formData = new FormData(contactForm)
        const formDataObj = Object.fromEntries(formData.entries())

        try {
            // Simulate form submission
            await submitForm(formDataObj)
            
            // Clear form and show success message
            contactForm.reset()
            showMessage('Message sent successfully!', 'success')
        } catch (error) {
            showMessage('Error sending message. Please try again.', 'error')
        }
    })
})

// Simulate form submission (replace with actual API call)
function submitForm(data) {
    return new Promise((resolve) => {
        // Simulate API call delay
        setTimeout(() => {
            console.log('Form submitted with data:', data)
            resolve()
        }, 1000)
    })
}

// Show message to user
function showMessage(message, type) {
    // Create message element
    const messageDiv = document.createElement('div')
    messageDiv.className = `message message-${type}`
    messageDiv.textContent = message

    // Add to page
    const form = document.querySelector('.contact-form')
    form.insertAdjacentElement('beforebegin', messageDiv)

    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.remove()
    }, 3000)
}