'use client'
import '@/_styles/Login/LoginForm.css';

export default function LoginForm() {
    async function loginHandler() {
        const emailInput = document.querySelector(".input") as HTMLInputElement | null;
        const passwordInput = document.querySelector(".input") as HTMLInputElement | null;

        if (emailInput && passwordInput) {
            const email = emailInput.value;
            const password = passwordInput.value;

            const response = await fetch("http://localhost:8080/Login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();
            if (data.message !== "Success") {
                console.log("Failed");
            } else {
                console.log("Success");
            }
        }
    }

    return (
        <div className="login_main">
            <input placeholder="Email" className="input" />
            <input placeholder="Password" className="input" />
            <button className="login_button" onClick={loginHandler}>
                Login
            </button>
        </div>
    );
}