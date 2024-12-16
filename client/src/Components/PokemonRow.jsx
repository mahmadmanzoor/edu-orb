import React from "react";

function PokemonRow(props) {
  console.log(props);
  return (
    <table>
      <tr>
        <th>{props.bulbasaur.id}</th>
        <th>{props.bulbasaur.name}</th>
        <th>
          <img
            src={props.bulbasaur.sprite}
            alt={`${props.bulbasaur.name} sprite`}
            style={{ width: "50%" }}
          />
        </th>
      </tr>
    </table>
  );
}

export default PokemonRow;
