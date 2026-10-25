export function getProductionYear() {
	const today = new Date();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	// Produktiovuosi kesäkuu-toukokuu
	const productionYear = currentMonth >= 5 ? currentYear + 1 : currentYear;
	return productionYear;
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export function debounce(func: (...args: any[]) => void, wait: number) {
	let timeout: ReturnType<typeof setTimeout> | null;

	return function (...args: any[]) {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
}
