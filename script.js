const form = document.getElementById('grievanceForm');
const messageDiv = document.getElementById('message');

if(form){
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
            name: form.name.value,
            email: form.email.value,
            grievance: form.grievance.value
        };

        const res = await fetch('/submit-grievance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        messageDiv.textContent = result.message;
        if(result.success) form.reset();
    });
}
