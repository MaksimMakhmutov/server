import './App.css';
import { EntryField } from './components/field/entry-field';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Введите Email')
		.min(5, 'Минимум 8 символа')
		.max(32, 'Максимум 32 символа')
		.email('Неверный формат электронной почты'),
	password: Yup.string()
		.required('Введите пароль')
		.min(8, 'Минимум 8 символа')
		.max(32, 'Максимум 32 символа')
		.matches(/[а-я a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
		.matches(/[А-Я A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
		.matches(/\d/, 'Пароль должен содержать хотя бы одну цифру'),
	repeatPassword: Yup.string()
		.required('Повторите пароль')
		.oneOf([Yup.ref('password'), null], 'Пароли не совпадают'),
});

export function App() {
	const {
		register,
		handleSubmit,
		setFocus,
		formState: { errors },
	} = useForm({
		defaultValues: {},
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data) => {
		console.log(data);
		setFocus('submitButton');
	};

	return (
		<div className="App">
			<div className="loginHtml">
				<h2>New user registration page</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<EntryField
						nameFieldLabel="Email"
						nameField="email"
						placeholderField="Enter your Email"
						register={register}
						errorField={errors.email?.message}
					/>
					<EntryField
						nameFieldLabel="Password"
						nameField="password"
						placeholderField="Enter the Password"
						register={register}
						errorField={errors.password?.message}
					/>
					<EntryField
						nameFieldLabel="Repeat Password"
						nameField="repeatPassword"
						placeholderField="Repeat Password"
						register={register}
						errorField={errors.repeatPassword?.message}
					/>
					<button
						id="submitButton"
						type="submit"
						className="button"
						disabled={!register}
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
}
