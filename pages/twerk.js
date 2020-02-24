import React from 'react';

import withAuth from '../helpers/withAuth';
import fetch from 'isomorphic-unfetch';
import { auth, firebase } from '../firebase';

const Twerk = () => {
	function handleLogout() {
		auth
			.signOut()
			.then(function() {
				alert('Logout successful');
			})
			.catch(function(error) {
				alert('OOps something went wrong check your console');
				console.log(err);
			});
	}

	return (
		<div>
			<div className="wrapper_iframe">
				<h3 className="center">Logged in Splash Page</h3>
				<iframe
					src="https://giphy.com/embed/rAKdqZ8nfiaZi"
					frameBorder="0"
					className="giphy-embed"
					allowFullScreen
				/>
			</div>
			<div className="center">
				<button onClick={handleLogout}>Logout</button>
			</div>
			<style jsx>
				{`
					.center {
						text-align: center;
					}
					.wrapper_iframe {
						width: 100%;
						height: 40vh;
						position: relative;
						padding-top: 20vh;
					}
					.giphy-embed {
						position: absolute;
						width: 100%;
						hight: 100%;
					}
					button {
						margin: auto;
					}
					button:hover {
						cursor: pointer;
					}
				`}
			</style>
		</div>
	);
};

// Twerk.getInitialProps = async function() {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const json = await res.json();
//   return { json };
// };

export default withAuth(Twerk);
