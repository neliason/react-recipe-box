import React from "react";
import PropTypes from "prop-types";
import Collapsible from 'react-collapsible';

const Recipe = props =>
  <Collapsible trigger={props.name} transitionTime="200">
    <div className="recipe">
      <div className="ingredients">
        <div className="ingredients-title text-center">
          Ingredients
        </div>
        <div className="ingredients-list">
          <table>
            {props.ingredients.map(function (ingredient, index) {
              return (
                <tr>
                  <div className="ingredient" key={index}>
                    {ingredient}
                  </div>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <div className="recipe-buttons">
          <button 
            className="btn btn-md btn-danger"
            onClick={props.onRemove}  
          >
            Delete
          </button>
          <button
            className="btn btn-md btn-default"
            onClick={props.onEdit}
          >
            Edit
          </button>
      </div>
    </div>
  </Collapsible>


Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default Recipe;