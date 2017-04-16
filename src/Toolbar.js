import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import message from './utils/messages';
import {navigate} from './utils/constants';

class Toolbar extends React.Component {
    render() {
        let {messages, label} = this.props;
        messages = message(messages);

        return (
            <div className='rbc-toolbar'>
                <span className='rbc-btn-group'>
                      <button onClick={this.navigate.bind(null, navigate.TODAY)}
                              type='button'>
                        {messages.today}
                      </button>
                      <button onClick={this.navigate.bind(null, navigate.PREVIOUS)}
                              type='button'>
                        {messages.previous}
                      </button>
                      <button onClick={this.navigate.bind(null, navigate.NEXT)}
                              type='button'>
                        {messages.next}
                      </button>
                </span>

                <span className='rbc-toolbar-label'>{label}</span>

                <span className='rbc-btn-group'>{this.viewNamesGroup(messages)}</span>
            </div>
        );
    }

    navigate = (action) => {
        this.props.onNavigate(action)
    };

    view = (view) => {
        this.props.onViewChange(view)
    };

    viewNamesGroup(messages) {
        let viewNames = this.props.views;
        const view = this.props.view;

        if (viewNames.length > 1) {
            return (
                viewNames.map(name =>
                    <button type='button' key={name}
                            className={cn({'rbc-active': view === name})}
                            onClick={this.view.bind(null, name)}>
                        {messages[name]}
                    </button>
                )
            )
        }
    }
}

Toolbar.propTypes = {
    view: PropTypes.string.isRequired,
    views: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.node.isRequired,
    messages: PropTypes.object,
    onNavigate: PropTypes.func.isRequired,
    onViewChange: PropTypes.func.isRequired,
};

export default Toolbar;
