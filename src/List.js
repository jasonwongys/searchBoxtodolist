import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filtered: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let currentList = [];

        let newList = [];

        if(e.target.value !== "") {
            currentList = this.props.items;

            newList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();

                return lc.includes(filter);
            });
        } else {
            newList = this.props.items;
        }
        this.setState({
            filtered: newList
        })
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.items
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.items
        });
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} type="text" className="input" placeholder="Search.." />
                <ul>
                    {this.state.filtered.map(item => (
                        <li key={item} className="animated fadeIn">
                            {item} &nbsp;
                <span className="delete" onClick={() => this.props.delete(item)} /></li>
                    ))}
            </ul>
            </div>
        )
    }
}

export default List
