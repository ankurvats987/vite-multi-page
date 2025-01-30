import '../scss/main.scss'

document.addEventListener('DOMContentLoaded', () => {
    console.log('About page loaded')

    // Add animation to the about page content
    const mainContent = document.querySelector('main')
    mainContent.classList.add('fade-in')

    // You could add more about page specific functionality here
    // For example, handling team member cards, loading additional content, etc.
})