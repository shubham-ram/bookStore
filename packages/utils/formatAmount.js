const formatAmount = ({ locale='en-IN', amount, options, currency='INR' }) => {
	try {
		return new Intl.NumberFormat(locale, {
			...options,
			...('style' in options && {
				...options,
				currency: options?.currency || currency,
			}),
		}).format(Number(amount));
	} catch (error) {
		return 'null';
	}
};

export default formatAmount