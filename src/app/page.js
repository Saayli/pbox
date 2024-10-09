export default function Home() {
    return (
        <div className="rappel-page">
            <div className="last-taking shadow text-center mx-4 rounded-2xl">
                <p>Prochaine prise de médicament(s) : </p>
                <h2>Item name</h2>
                <p>Time</p>
            </div>
            <div className="rappel-list mt-4">
                <div className="rappel-title flex flex-wrap justify-between">
                    <h1>Rappels</h1>
                    <a href="">Ajouter un rappel</a>
                </div>
                <div className="rappel-item shadow text-center mx-4 rounded-2xl mt-8 pb-4">
                        <div className="rappel-item-name">
                            <h2>Item name</h2>
                        </div>
                        <div className="rappel-item-time">
                            <p>Time</p>
                        </div>
                        <div className="buttons flex flex-wrap justify-around">
                            <div className="btn px-4 py-2 bg-blue-300 rounded-2xl">
                                <a href="">Modifier</a>
                            </div>
                            <div className="btn px-4 py-2 bg-red-300 rounded-2xl">
                                <a href="">Supprimer</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


