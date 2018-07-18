class TopMenu extends React.Component {

    render() {
        return (
            <div className="header col-sm-12 border-bottom">
                <div className="index">
                    <div>Tất cả kênh</div>
                </div>

                <div className="search-box">
                    <div>
                        <i className="fa fa-search" />
                        <input name="search" type="type" placeholder="Tìm kiếm chủ đề phát sóng..." />
                    </div>
                </div>
            </div>
        )
    }
}