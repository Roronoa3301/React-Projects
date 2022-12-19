import React, { useState, useEffect } from "react";
import { Container, Button, Typography, TextField, Box } from "@mui/material";
import Alert from "./Alert";
import List from "./List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

export default function GroceryBudPage() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter a value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "value changed", "success");
    } else {
      showAlert(true, "item added to the list", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    showAlert(true, "empty list", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "item removed", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        my: 10,
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        borderRadius: "0.25rem",
        p: 5,
        background: "#fff",
      }}
    >
      <Box>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          sx={{ mb: 2, fontFamily: "Roboto Mono", color: "#06325b" }}
        >
          Grocery Bud
        </Typography>
        {/* <List /> */}
      </Box>
      <Box alignItems="center" display="flex">
        <TextField
          value={name}
          size="small"
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. eggs"
          className="grocery-text"
        ></TextField>
        <Button
          variant="contained"
          color="primary"
          fontFamily="Roboto Mono"
          className="grocery-btn"
          sx={{ mx: 1 }}
          onClick={handleSubmit}
        >
          {isEditing ? "edit" : "submit"}
        </Button>
      </Box>
      {list.length > 0 && (
        <Box justifyContent="center" display="flex" flexDirection="column">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <Button
            onClick={clearList}
            className="clear-btn"
            sx={{
              color: "hsl(360, 71%, 66%)",
            }}
          >
            Clear Items
          </Button>
        </Box>
      )}
    </Container>
  );
}
