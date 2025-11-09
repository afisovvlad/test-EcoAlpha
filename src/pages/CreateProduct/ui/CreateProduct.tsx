import { ChangeEvent, FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCreateProduct } from '../model/services/fetchCreateProduct/fetchCreateProduct';
import cls from './CreateProduct.module.css';
import { validateForm } from '../model/services/validateForm/validateForm';

export interface FormData {
	title: string;
	imageUrl: string;
	price: string;
	description: string;
	category: string;
	id?: number;
}

export interface FormErrors {
	title?: string;
	imageUrl?: string;
	price?: string;
	description?: string;
	category?: string;
}

const CreateProduct: FC = memo(() => {
	const dispatch = useAppDispatch();

	const [formData, setFormData] = useState<FormData>({
		title: '',
		imageUrl: '',
		price: '',
		description: '',
		category: ''
	});

	const [errors, setErrors] = useState<FormErrors>({});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const validationErrors = validateForm(formData);

		if (Object.keys(validationErrors).length === 0) {
			console.log('Форма отправлена:', formData);

			// запрос на добавление нового продукта успешный но fakestoreapi.com, не сохраняет его в products
			dispatch(fetchCreateProduct(formData));

			setFormData({
				title: '',
				imageUrl: '',
				price: '',
				description: '',
				category: ''
			});
			setErrors({});
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<div className={cls.CreateProduct}>
			<form className={cls.form}>
				<input
					className={classNames(cls.input, { [cls.err]: !!errors.title }, [])}
					type='text'
					name='title'
					placeholder='Введите название'
					value={formData.title}
					onChange={handleChange}
					required
				/>
				{errors.title && (
					<span className={cls.errorMessage}>{errors.title}</span>
				)}

				<input
					className={classNames(
						cls.input,
						{ [cls.err]: !!errors.imageUrl },
						[]
					)}
					type='text'
					name='imageUrl'
					placeholder='Введите ссылку на картинку'
					value={formData.imageUrl}
					onChange={handleChange}
					required
				/>
				{errors.imageUrl && (
					<span className={cls.errorMessage}>{errors.imageUrl}</span>
				)}

				<input
					className={classNames(cls.input, { [cls.err]: !!errors.price }, [])}
					type='text'
					name='price'
					placeholder='Введите стоимость'
					value={formData.price}
					onChange={handleChange}
					required
				/>
				{errors.price && (
					<span className={cls.errorMessage}>{errors.price}</span>
				)}

				<input
					className={classNames(
						cls.input,
						{ [cls.err]: !!errors.description },
						[]
					)}
					type='text'
					name='description'
					placeholder='Введите описание'
					value={formData.description}
					onChange={handleChange}
					required
				/>
				{errors.description && (
					<span className={cls.errorMessage}>{errors.description}</span>
				)}

				<input
					className={classNames(
						cls.input,
						{ [cls.err]: !!errors.category },
						[]
					)}
					type='text'
					name='category'
					placeholder='Добавьте категорию'
					value={formData.category}
					onChange={handleChange}
					required
				/>
				{errors.category && (
					<span className={cls.errorMessage}>{errors.category}</span>
				)}
				<button
					type='button'
					className={cls.submitButton}
					onClick={handleSubmit}
				>
					Создать продукт
				</button>
			</form>
		</div>
	);
});

export default CreateProduct;
