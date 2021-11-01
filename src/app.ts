import 'dotenv/config';
import express from 'express';
import { router } from './routes';

const app = express();
app.use(express.json());

app.use(router);
const serverPort = 4000;

app.get('/github', (request, response) => {
	response.redirect(
		`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
	);
});

app.get('/signin/callback', (request, response) => {
	const { code } = request.query;

	return response.json(code);
});

app.listen(serverPort, () =>
	console.log(`🚀 Server running on port ` + serverPort)
);
