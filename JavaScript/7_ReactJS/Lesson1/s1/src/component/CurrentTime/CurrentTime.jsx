export default function CurrentTime() {
    return <div>
        <h2>Текущее время {new Date().toLocaleTimeString()}
        </h2>
    </div>;
}