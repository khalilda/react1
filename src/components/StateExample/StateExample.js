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


    handleClick = () => {
    this.setState(prevState => {
        return {
            numberOfClics: prevState.numberOfClics + 1
        };
    });
    }


    handleReset = () => {
        this.setState ({
            numberOfClics: 0,
        }
        )
    };


    render() {
        <div style={styles}>
          StateExample
          <button onClick={this.handleClick}>{this.state.numberOfClics}</button>
            <button onClick={this.handleReset}>Reset</button>
          <A 
            clicks={this.state.numberOfClics} 
            onIncrement={this.handleClick}
            onReset={this.handleResetdfffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaw3wwsex          }
            />
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