import { register } from "../api/users.js";
import { html } from "../lib.js";
import { updateNav } from "./nav.js";


const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;


export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const repass = formData.get('re-password');

        if (email == '' || password == '' || repass == '') {
            return alert('All fields are required!');
        }
        if (password != repass) {
            return alert('Passwords don\'t match!');
        }

        await register(email, password);
        updateNav();
        ctx.page.redirect('/catalog');
    }
}