import React from 'react';
import Select from 'react-select';
import {availableWords} from '../api.js';



class Fuzzy extends React.Component {
    state = {
      selectedOption: null,
      options: []
    }

    componentDidMount() {
        availableWords()
        .then(data=> {
                    // Sort data to store in state
                    let sort_data = data.sort(function(a,b){
                      if((a.label > b.label) && (a.label.length > b.label.length) && (a.value > b.value))
                        {return 1}
                      if(((a.label == b.label) && (a.label.length == b.label.length)) && a.value > b.value)
                        {return 1}
                      else
                        {return -1}
                    })
                    this.setState({
                        options:sort_data,
                    })
        })
        .catch((e) => {
            alert("api call failed!")
        });
    }

    onChange = newOptions => {
        if(newOptions){ 
            this.setState({selectedOption : newOptions})
        }
        else{
          this.setState({selectedOption : null})
        }
    };

    render() {    
      return (
        <div className="container mt-5">
          <h2 className="mb-3">Fuzzy search</h2>
          <Select
          isMulti
          hideSelectedOptions={false}
          options={this.state.options}
          onChange={this.onChange}      
          />
          {this.state.selectedOption ?
          <div className="mt-5 border">{this.state.selectedOption ? this.state.selectedOption.map((item, i)=><div key={i} className="p-2">{item.label}</div>) : ''}</div>
          : ''}
        </div>
      );
    }
  }

export default Fuzzy;
