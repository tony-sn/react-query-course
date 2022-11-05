import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { worker } from '@uidotdev/react-query-api';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

new Promise((res) => setTimeout(res, 100))
	.then(() =>
		worker.start({
			quiet: true,
			onUnhandledRequest: 'bypass',
		})
	)
	.then(() => {
		ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
			<React.StrictMode>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<div className="container">
							<App />
						</div>
					</BrowserRouter>
				</QueryClientProvider>
			</React.StrictMode>
		);
	});
