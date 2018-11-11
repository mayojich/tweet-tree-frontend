import React, { useState } from "react";
import Link from "next/link";

const styles = {
  root: {
    padding: 10
  },
  input: {
    color: "white",
    width: 240,
    height: 21,
    margin: "0 auto",
    borderStyle: "solid",
    borderWidth: "0 0 1px 0",
    borderColor: "white",
    backgroundColor: "transparent"
  },
  button: {
    height: 20,
    margin: "0 auto",
    borderStyle: "solid",
    borderWidth: "0 0 1px 0",
    borderColor: "white",
    backgroundColor: "transparent",
    color: "white"
  }
};

const Search = props => {
  // search bar url
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    // http unicode escaping required

    props.handleAPICall(value);
    e.preventDefault();

    // escape unicode

    // call backend
  }

  return (
    <form style={styles.root} onSubmit={handleSubmit}>
      <input
        style={styles.input}
        type="text"
        placeholder="twitter URL"
        value={value}
        onChange={handleChange}
      />

      <input style={styles.button} type="submit" value="Submit" />
    </form>
  );
};

export default Search;
