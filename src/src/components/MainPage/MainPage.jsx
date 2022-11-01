import React, { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Select from "react-select";
import { data } from "./Data";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function MainPage() {
  const [open, setOpen] = useState(false);
  const [selectedOption, setselectedOption] = useState("");
  const [selectedChildOptions, setselectedChildOptions] = useState("");
  const [children, setChildren] = useState("");
  const selectedChildOption = [];

  const parentData = data?.item?.map((data) => {
    return { id: data.name, label: data.name };
  });

  data?.item?.map((data) => {
    if (data?.item?.length !== undefined) {
      selectedChildOption.push(data?.item);
    }
  });

  const childData = selectedChildOption?.map((data) => {
    return data.map((data) => {
      return { id: data.name, label: data.name };
    });
  });

  const handleClose = () => setOpen(false);

  const handleModal = () => {
    setOpen(true);
  };

  const handleSelector = (option) => {
    console.log("Selected option", option);
    setselectedOption(option);
  };

  const handleChildSelector = (option) => {
    console.log("Selected option", option);
    setselectedChildOptions(option);
  };

  const child = childData?.map((data) => {
    console.log("data", data);
    return data.map((seconddata) => {
      return { id: seconddata.id, label: seconddata.label };
    });
  });


  return (
    <div style={{ height: 400, width: "100%", alignItems: "center" }}>
      <Button
        style={{
          backgroundColor: "blue",
          display: "flex",
          color: "white",
          justifyContent: "flex-start",
        }}
        onClick={handleModal}
      >
        New Category
      </Button>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Select
              placeholder="Select"
              options={parentData}
              onChange={handleSelector}
              value={selectedOption}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <Select
              placeholder="Select"
              options={childData}
              onChange={handleChildSelector}
              value={selectedChildOptions}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
