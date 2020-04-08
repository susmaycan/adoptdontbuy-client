import React from 'react'

class Status extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'In adoption',
            variant: 'success'
        }
    }

    componentDidMount() {
        switch (this.props.status) {
            case "00":
                this.setState({
                    status: 'In adoption',
                    variant: 'success'
                })
                break
            case "01":
                this.setState({
                    status: 'Adopted',
                    variant: 'danger'
                })
                break
            case "02":
                this.setState({
                    status: 'Reserved',
                    variant: 'warning'
                })
                break
            default:
                this.setState({
                    status: 'Unknown',
                    variant: 'secondary'
                })
                break
        }
    }

    render() {
        return (
            <div className="footer" >
                <Badge className="bagdeCustom" variant={this.state.variant}>{this.state.status}</Badge>
            </div>
        );
    }
}
export default Status