class CardView extends React.Component {

    render() {
        return (
            <div className="card-view col-sm-3">
                <div className="card-item card">
                    Card {this.props.position + 1}
                </div>
            </div>
        )
    }
}