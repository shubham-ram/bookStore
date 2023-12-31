const setCookie = ({ cookieName, cookieValue, cookieExpiryDays }) => {
	if(typeof window === 'undefined') return null;

    let expiryDate = new Date();

    expiryDate.setDate(expiryDate.getDate() + cookieExpiryDays);

    const expiryDateUTCString = expiryDate.toUTCString();

    let cookie = `${cookieName}=${cookieValue};expires=${expiryDateUTCString}`;

    document.cookie = cookie;
}

const getCookieValue = ({ cookieName }) => {
	if(typeof window === 'undefined') return null;

	const cookiePairs = document.cookie.split('; ');

	const cookiePair = cookiePairs.find((pair) => {
		const [name] = pair.split('=');

		return name === cookieName;
	});

	if (cookiePair) {
		const [, value] = cookiePair.split('=');
		return value;
	}

	return null;
};



export { setCookie, getCookieValue }