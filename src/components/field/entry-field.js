import styles from './entry-field.module.css';

export function EntryField({
	nameFieldLabel,
	nameField,
	placeholderField,
	register,
	errorField,
}) {
	return (
		<>
			<label className={styles.labelField}>{nameFieldLabel}</label>
			<input
				name={nameField}
				placeholder={placeholderField}
				{...register(nameField)}
				className={styles.entryField}
			/>
			{errorField && <div className={styles.errorField}>{errorField}</div>}
		</>
	);
}
