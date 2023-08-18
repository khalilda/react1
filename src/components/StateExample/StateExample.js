import { Component } from 'react';
import { A } from './A';


const styles = {
    backgroundColor: 'orangered',
    padding: 12,
};

export class StateExample extends Component {
    state = {
        numberOfClics: 0
    };
    handClick = () => {
    this.setState(prevState => {
        return {
            numberOfClics: prevState.numberOfClics + 1
        };
    });
    }

    handleReset = () => {
        this.setState ({
            numberOfClics: 0;
        }
        )
    };
    render() {
        <div style={styles}>
          StateExample
          <button onClick={this.handClick}>{this.state.numberOfClics}</button>
            <button onClick={this.handleReset}>Reset</button>
          <A />
        </div>
      }
}




// export const StateExample = () => {
//     return (
//         <div style={styles}>
//         StateExample
//         <button>1</button>
//         </div>
//     );
// };