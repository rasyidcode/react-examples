export default function FacebookForm() {
    return (
        <div className="min-h-screen bg-white">
            <form>
                <input type="text" placeholder="Email address or phone number" />
                <input type="text" placeholder="Password" />
                <button>Log in</button>
                <a href="#">Forgotten password?</a>
                <hr />
                <button>Create new account</button>
            </form>
        </div>
    )
}
