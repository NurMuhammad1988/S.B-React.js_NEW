import { Component } from "react";
import "./search-panel.css";
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }

    updateTermHandlerSp = (e) => {
        const term = e.target.value.toLowerCase();//toLowerCase metodi bilan search inputga kirtiladigan so'zlarni faqat kichkina harifda ishlaydigan qildik
        this.setState({ term });
        this.props.updateTermHandler(term); //bu propsdan keltganda appda yozilgan funksiya
    };

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Kinolarni qidirish"
                onChange={this.updateTermHandlerSp}
                value={this.state.term}
            />
        );
    }
}

export default SearchPanel;
