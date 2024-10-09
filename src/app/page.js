export default function Home() {
    return (
        <div className="rappel-page">
            <div className="last-taking shadow text-center mx-4 rounded-2xl">
                <p>Prochaine prise de médicament(s) : </p>
                <h2>Item name</h2>
                <p>Time</p>
            </div>
            <div className="rappel-list">
                <div className="rappel-title">
                    <h1>Rappels</h1>
                    <a href="">Ajouter un rappel</a>
                </div>
                <div className="rappel-item">
                    <div className="rappel-item-name">
                        <h2>Item name</h2>
                    </div>
                    <div className="rappel-item-time">
                        <p>Time</p>
                    </div>
                    <div className="buttons">
                        <a href="">Modifier</a>
                        <a href="">Supprimer</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


