import Swal from 'sweetalert2';

export const showAlert = ({ type, title, message }) => {
	return Swal.fire({
		icon: type,
		title: title,
		text: message,
	});
};

export const showErrorAlert = (message, title = 'Ooops...') => {
	return showAlert({
		type: 'error',
		title: title,
		message,
	});
};
