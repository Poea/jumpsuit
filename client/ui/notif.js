let previousTimeoutId = -1;

export function showNotif(title, desc) {
	if (!title && !desc) return;
	if (previousTimeoutId !== -1) clearTimeout(previousTimeoutId);

	let notifBox = document.getElementById('gui-message');
	notifBox.setAttribute('data-title', title);
	notifBox.setAttribute('data-desc', desc);
	notifBox.classList.remove('hidden');
	previousTimeoutId = setTimeout(() => {
		notifBox.classList.add('hidden');
		previousTimeoutId = -1;
	}, 4000);
}
