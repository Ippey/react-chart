import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: '',
            hot: 0,
            taste: 0,
            volume: 0,
            price: 0,
        }
    }

    onChangeLabel(event) {
        this.setState({label: event.target.value})
    }

    onChangeHot(event) {
        this.setState({hot: event.target.value})
    }

    onChangeTaste(event) {
        this.setState({taste: event.target.value})
    }

    onChangeVolume(event) {
        this.setState({volume: event.target.value})
    }

    onChangePrice(event) {
        this.setState({price: event.target.value})
    }

    onClickSubmit() {
        this.props.add(this.state.label, this.state.hot, this.state.taste, this.state.volume, this.state.price);
        this.setState({label: '', hot: 0, taste: 0, volume:0, price: 0})
    }

    render() {
        return(
            <div className="editor">
                <fieldset>
                    <div>
                        店名：<input type="text" value={this.state.label} onChange={(event) => this.onChangeLabel(event)}/>
                    </div>
                    <div>
                        辛さ：<input type="number" value={this.state.hot} onChange={(event) => this.onChangeHot(event)}/>
                    </div>
                    <div>
                        うまさ：<input type="number" value={this.state.taste} onChange={(event) => this.onChangeTaste(event)}/>
                    </div>
                    <div>
                        ボリューム：<input type="number" value={this.state.volume} onChange={(event) => this.onChangeVolume(event)}/>
                    </div>
                    <div>
                        値段：<input type="number" value={this.state.price} onChange={(event) => this.onChangePrice(event)}/>
                    </div>
                    <div>
                        <button type="submit" onClick={() => this.onClickSubmit()}>追加</button>
                    </div>
                </fieldset>
            </div>
        )
    }
}

Editor.propTypes = {
    add: PropTypes.func.isRequired
};

export default Editor;