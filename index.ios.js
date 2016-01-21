'use strict';

import React from 'react-native';
const {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView
} = React;

import RNRefreshControl from './RNRefreshControl';

let randId = () => (Math.random() + 1).toString(36).substring(7);

const ELEMENT_ID = randId();

var style = StyleSheet.create({
  rootView: {
    flex: 1
  }
});

let RNRefreshControlView = {};

class RNRefreshControlScrollView extends Component {
  componentDidMount() {
    RNRefreshControl.configure({
      node: this.refs[ELEMENT_ID],
      tintColor: this.props.tintColor,
      activityIndicatorViewColor: this.props.activityIndicatorViewColor
    }, () => {
      if (this.props.onRefresh) {
        this.props.onRefresh(() => {
          RNRefreshControl.endRefreshing(this.refs[ELEMENT_ID]);
        });
      }
    });
  }
  render() {
    return (
      <ScrollView {...this.props} ref={ELEMENT_ID}>
        {this.props.children}
      </ScrollView>
    );
  }
}

class RNRefreshControlViewListView extends Component {
  componentDidMount() {
    RNRefreshControl.configure({
      node: this.refs[ELEMENT_ID],
      tintColor: this.props.tintColor,
      activityIndicatorViewColor: this.props.activityIndicatorViewColor
    }, () => {
      if (this.props.onRefresh) {
        this.props.onRefresh(() => {
          RNRefreshControl.endRefreshing(this.refs[ELEMENT_ID]);
        });
      }
    });
  }
  render() {
    return (
      <ListView {...this.props} ref={ELEMENT_ID}/>
    );
  }
}
RNRefreshControl.ScrollView = RNRefreshControlScrollView;
RNRefreshControl.ListView = RNRefreshControlViewListView;

module.exports = RNRefreshControl;
