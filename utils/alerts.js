import Swal from 'sweetalert2';

export const showAlert = ({ type, title, message }) => {
	return Swal.fire({
		icon: type,
		title: title,
		text: message,
	});
};

export const showErrorAlert = (message, { title }) => {
	return showAlert({
		type: 'error',
		title: title ?? 'Ooops...',
		text: message,
	});
};
