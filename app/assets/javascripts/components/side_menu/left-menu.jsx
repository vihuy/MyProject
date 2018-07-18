class LeftMenu extends React.Component {

    render() {
        return (
            <div className="left-menu col-sm-2 border-right">
                <img src="assets/logo.png" width="60%" />
                <div id="accordion">
                    <div className="card">
                        <div id="headingOne">
                            <div className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Tất cả kênh
                            </div>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                AAAAAAAA body
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div id="headingTwo">
                            <div className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Lịch sử phát sóng
                                </div>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                BBBBBBBBBB body
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div id="headingThree">
                            <div className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Đang theo dõi
                            </div>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                CCCCCCCCCC body
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}