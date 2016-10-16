import React, { Component } from 'react';
import {Box, Container} from 'react-layout-components';
import FontAwesome from 'react-FontAwesome';
import '../styles/App.css';
import '../styles/font-awesome.css';


class HomePageInfoBoxComponent extends Component {
  
  componentWillMount() {
    //
  }
  
  render() {
    const thirdWidth = '100%';
    const border = '1px solid rgb(215, 215, 215)';
    const infoBoxPadding = '30px';
    const infoBoxMargin = '20px';

    return (
      <div>
        <Box width={thirdWidth} wrap="nowrap" column>
          <h3 style={{color: this.props.color}}>{this.props.title}</h3>
          <Container wrap="nowrap" border={border} padding={infoBoxPadding} marginRight={infoBoxMargin} column>
            <FontAwesome
              name={this.props.icon}
              size='2x'
            />
            <h6 className="font-x1">{this.props.mainText}</h6>
            <p className="nospace">{this.props.subText}</p>
          </Container>
        </Box>
      </div>
    );
  }
}

export default HomePageInfoBoxComponent;

HomePageInfoBoxComponent.propTypes = {
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
  color: React.PropTypes.string,
  mainText: React.PropTypes.string,
  subText: React.PropTypes.string
}

