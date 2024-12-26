import storeFrontService from "../service/shopsService.js";

document.addEventListener('DOMContentLoaded', () => {

    const deletePostButton = document.getElementById('deletePostButton');
    console.log(deletePostButton);
    const postEmailInput = document.getElementById('postEmail');
    const deletePostModal = new bootstrap.Modal(document.getElementById('deletePostModal'));


    deletePostButton.addEventListener('click', async () => {

        const email = postEmailInput.value.trim();

        if (!email) {
            alert('Please enter the email of the post owner.');
            return;
        }

        const producers = await storeFrontService.fetchShops();

        const filteredProducer = producers.filter(producer => producer.email === email);

        if (filteredProducer.length === 0) {
            alert('No producer found with this email.');
            return;
        }

        const producerToDelete = filteredProducer[0]; 

        console.log('Producer to delete:', producerToDelete.id);

        try {
            const response = await fetch(`http://localhost:50005/api/delete/${producerToDelete.id}`, {
                method: 'DELETE'
            });
    
            if (response.ok) {
                alert('Post deleted successfully');
                // Close the modal or do anything else after success
                deletePostModal.hide();
            } else {
                alert('Failed to delete post' + response);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while deleting the post');
        }
    });
});
