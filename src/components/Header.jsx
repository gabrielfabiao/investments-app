import logo from '/src/assets/graph.jpg'

export default function Header() {
    return <header id="header">
        <h1>Investment Calculator</h1>
        <img src={logo} alt="investment" />
    </header>
}