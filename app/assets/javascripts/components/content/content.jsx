class Content extends React.Component {
    render() {
        let numCards = 500
        let cards = []
        for (var i = 0; i < numCards; i++) {
            cards.push(<CardView position={i} />);
        }
        return (
            <div className="row">
                <LeftMenu />
                <div className="content col-sm-10">
                    <div className="row">
                        <TopMenu />
                    </div>
                    <div className="row content-container">
                        {cards}
                    </div>
                </div>
            </div>
        )
    }
}