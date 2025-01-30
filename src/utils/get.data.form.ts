function getDatasForm<T>(e: React.FormEvent<HTMLFormElement>): T {
	const formData: FormData = new FormData(e.currentTarget);
	const datasFormSubmit = Object.fromEntries(formData) as unknown as T;
	return datasFormSubmit;
}
export default getDatasForm;
