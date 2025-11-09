import { FormData, FormErrors } from '../../../ui/CreateProduct';

export const validateForm = (formData: FormData): FormErrors => {
	const newErrors: FormErrors = {};

	if (!formData.title) {
		newErrors.title = 'Введите название';
	}
	if (!formData.imageUrl) {
		newErrors.imageUrl = 'Введите ссылку на картинку';
	}
	if (!formData.price) {
		newErrors.price = 'Введите стоимость';
	} else if (isNaN(Number(formData.price))) {
		newErrors.price = 'Стоимость должна быть числом';
	}
	if (!formData.description) {
		newErrors.description = 'Введите описание';
	}
	if (!formData.category) {
		newErrors.category = 'Добавьте категорию';
	}

	return newErrors;
};
