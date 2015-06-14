console.log('#### Recipe Form');

var React = require('react');
var RecipeActions = require('actions/RecipeAction');


module.exports = {
	RecipeForm: function() {
		var RecipeForm = React.createClass({
			getInitialState: function() {
				return {
					dropdownClass: 'form-dropdown hide-dropdown',
					name: '',
					description: ''					
				};
			},
			toggleDropdown: function(e) {
				console.log('#### Toggling dropdown');
				var show = 'form-dropdown show-dropdown';
				var hide = 'form-dropdown hide-dropdown';
				if(this.state.dropdownClass === hide) {
					this.setState({
						dropdownClass : show,
						name: '',
						description: ''
					})
				} else {
					this.setState({
						dropdownClass : hide,
						name: '',
						description: ''
					})
				}
			},
			addRecipe: function(e) {
				console.log(this.state.name);
				console.log(this.state.description);
				var recipe = {
					name: this.state.name,
					description: this.state.description,
					_id: Math.floor(Math.random() * 1000)
				}
				RecipeActions.addRecipe(recipe);
				this.toggleDropdown();
			},
			onNameChange: function(e) {
				this.setState({name: e.target.value})
			},
			onDescripChange: function(e) {
				this.setState({description: e.target.value})
			},			
			render: function() {
				var dropdownClassName = this.state.dropdownClass;
				return (
					<div className='recipe-form'>
						<p>THIS WILL BE THE RECIPE FORM {this.props}</p>
						<button onClick={this.toggleDropdown} className="add-recipe-button">ADD A RECIPE</button>
						<div className={dropdownClassName}>
							<span className="icon-cross-1 close-dropdown" onClick={this.toggleDropdown}></span>
							<form onDragStart={this.draggingForm}>
								<input type="text" placeholder="Name" onChange={this.onNameChange} value={this.state.name}/>
								<input type="text" placeholder="Description" onChange={this.onDescripChange} value={this.state.description}/>
								<div onClick={this.addRecipe} className="add-recipe-button in-dropdown">ADD</div>
							</form>							
						</div>
					</div>
				)
			}
		});
		return RecipeForm;
	}
}

