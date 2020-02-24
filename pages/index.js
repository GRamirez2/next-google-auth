import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import { auth, firebase } from '../firebase';

function Home() {
	function handleSignIn() {
		var provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
		auth
			.signInWithPopup(provider)
			.then(() => {
				alert('You are signed In');
			})
			.catch((err) => {
				alert('OOps something went wrong check your console');
				console.log(err);
			});
	}

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
			{/* <Head title="Home" />
			<Nav /> */}
			<div className="hero">
				<h1 className="title">Without being logged in this is just your static Page</h1>
				<p className="description">Try to go to to the Logged In Page when you're not logged in</p>
				<p className="description">Login and see what happens</p>
				<div className="row">
					<Link href="/dashboard">
						<a className="card">
							<h3>Go to Logged In Page&rarr;</h3>
						</a>
					</Link>
					<button onClick={handleSignIn}>Sign In using google</button>
					<button onClick={handleLogout}>Logout</button>
				</div>
			</div>
			<style jsx>{`
				.hero {
					width: 100%;
					color: #333;
				}
				.title {
					margin: 0;
					width: 100%;
					padding-top: 80px;
					line-height: 1.15;
					font-size: 48px;
				}
				.title,
				.description {
					text-align: center;
				}
				.row {
					max-width: 880px;
					margin: 80px auto 40px;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
				}
				.card {
					padding: 18px 18px 24px;
					width: 220px;
					text-align: left;
					text-decoration: none;
					color: #434343;
					border: 1px solid #9b9b9b;
				}
				.card:hover {
					border-color: #067df7;
				}
				.card h3 {
					margin: 0;
					color: #067df7;
					font-size: 18px;
				}
				.card p {
					margin: 0;
					padding: 12px 0 0;
					font-size: 13px;
					color: #333;
				}
			`}</style>
		</div>
	);
}
export default Home;
