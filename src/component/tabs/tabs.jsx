import React from 'react';
import HeaderTab from './header-tab';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 0
        }
    }

    render(){

        let contents = this.props.contents.map( (content, idx) => {
            return (
                <article key={`content-${idx}`}>{content}</article>
            )
        })

        return (
            <div>
                <HeaderTab titles={this.props.titles}/>
                <ul>
                    {contents}
                </ul>
            </div>
        )
    }
};

export default Tabs;