export async function POST({ request, url }) {
	console.log(request, url);
	const validationToken = url.searchParams.get('validationToken');

	if (validationToken) {
		// Handle subscription validation
		console.log('Received validation token:', validationToken);
		return new Response(validationToken, {
			status: 200,
			headers: {
				'Content-Type': 'text/plain'
			}
		});
	} else {
		// Handle regular notification
		const body = await request.text();
		console.log('Request body:', body);

		// You can process the notification here

		return new Response('Notification received', {
			status: 202,
			headers: {
				'Content-Type': 'text/plain'
			}
		});
	}
}

export async function GET() {
	return new Response('all good', {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	});
}
