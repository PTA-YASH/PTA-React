import React from 'react';
import{connect} from'react-redux';
import PropTypes from 'prop-types';
import  {getTechList} from '../actions/TechnologyAction';

class Technology extends React.Component {

    componentDidMount(){
        this.props.getTechList();
    }

   constructor(props){
        super(props);
        this.state={
            errors:{ }
         };
  
        this.onRadioChange = this.onRadioChange.bind(this); 
   }

   componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
    this.setState({ errors: nextProps.errors });
    }
  }

    onRadioChange(e){
       console.log("radio : ", e.target.value);
       this.setState({
            [e.target.name] : e.target.checked
        })
    }
   
      
      
    render(){
       
        const {technologyList} =  this.props.technologyList;
        return(
            <div>
<form>
    <p>{this.state.errors.message}</p>
    <div className="radio">
      
      
        <p>{technologyList.map(tech => (
            <div>
            <input type="radio" 
             name="radio1" 
             onChange={this.onRadioChange}
             value={tech.techName}/>
            <label>{tech.techName}</label>
            </div>
        ))}</p>
        
    
    </div>
  
   

    <button className="btn btn-default" type="submit">Save</button>
  </form>

            </div>
        );
    }
}



Technology.propTypes={
    technologyList:PropTypes.object.isRequired,
    getTechList:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state =>(
{
    technologyList:state.technologyList,
    errors: state.errors
});


export default connect(mapStateToProps,{getTechList})(Technology);