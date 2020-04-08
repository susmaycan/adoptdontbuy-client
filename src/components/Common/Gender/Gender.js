import React from 'react'

class Gender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Unknown',
            icon: ''
        }
    }

    componentDidMount() {
        switch (this.props.gender) {
            case "M":
                this.setState({
                    name: 'Male',
                    icon: 'fas fa-mars'
                })
                break
            case "F":
                this.setState({
                    name: 'Female',
                    icon: 'fas fa-venus'
                })
                break
            default:
                this.setState({
                    name: 'Unknown',
                    icon: ''
                })
                break
        }
    }

    render() {
        return (
            <p>{this.state.name} <i className={this.state.icon}></i></p>
        )
    }
}
export default Gender