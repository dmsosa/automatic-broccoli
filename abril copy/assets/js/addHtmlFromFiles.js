function addHtmlFromFiles(...urls) {
	const requests = urls.reduce((a, v) => {
		const request = fetch(v).then(res =>( console.log(res.body)));
		return a.concat(request);
	}, []);

	Promise.all(requests).then(data => {
		data.forEach(v => document.body.appendChild(v));
	});

}