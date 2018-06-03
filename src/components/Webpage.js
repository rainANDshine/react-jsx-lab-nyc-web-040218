import FillerText from './FillerText';
//import ReactDOM from 'react-dom';

class Webpage extends React.Component {
  text() {
    return (
      <title>The world's coolest webpage</title>
    )
  }
  render() {
    return (
      <FillerText />,
      <FillerText />
    )
  }
}
