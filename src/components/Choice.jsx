export default function Choice({ label, path }) {
    return <div>
        <h3>Choice: </h3>
        {label}
        <img src={path} alt="sticker" />
    </div>
}