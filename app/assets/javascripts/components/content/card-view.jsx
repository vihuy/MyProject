class CardView extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          hoverBackground: "transparent"
        }
      }

    mouseEnter() {
        console.log('mouse enter')
        this.setState({hoverBackground: "brown"})
    }
    
    mouseLeave() {
        console.log('mouse leave')
        this.setState({hoverBackground: "transparent"})
    }

    render() {
        return (
            <div className="card-view" onMouseEnter={() => this.mouseEnter()} onMouseLeave={() => this.mouseLeave()} >
                <div className="card-item">
                    <img style={{background: this.state.hoverBackground}} src="assets/streamer.jpg" className="col-sm-12" height="80%" />
                    <div className="card-action-panel container-fuild">
                        <div className="row">
                            <div className="heart col-sm-4">
                                <a className="fa fa-heart" /> 22K
                            </div>
                            <div className="like col-sm-4">
                                <a className="fa fa-thumbs-up" /> 10K
                            </div>
                            <div className="view col-sm-4">
                                <a className="fa fa-user" /> 1.1M
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}