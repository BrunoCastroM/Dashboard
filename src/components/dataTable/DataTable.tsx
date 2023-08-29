import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";

export default function DataTable() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "noavatar.png"} alt="user" />;
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "this column has a value getter and is not sortable",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Silva", firstName: "Julio", age: 35 },
    { id: 2, lastName: "Fernandes", firstName: "Fernando", age: 42 },
    { id: 3, lastName: "Castro", firstName: "Roberto", age: 35 },
    { id: 4, lastName: "Castro", firstName: "Roberta", age: 35 },
    { id: 5, lastName: "Ortega", firstName: "Silvana", age: 35 },
    { id: 6, lastName: "Amoedo", firstName: "Rafael", age: 35 },
    { id: 7, lastName: "Silveira", firstName: "Tarantino", age: 35 },
    { id: 8, lastName: "Olveira", firstName: "José", age: 35 },
    { id: 9, lastName: "Girao", firstName: "Rafaela", age: 35 },
  ];

  return (
    <div className="data_table">
      <DataGrid
        className="data_grid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
}
