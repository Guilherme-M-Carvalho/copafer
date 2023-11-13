import { Box, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import EditIcon from '@mui/icons-material/Edit';
import useFind from "../../hooks/useFind";
import { useEffect } from "react";
import useFindOne from "../../hooks/useFindOne";
import DeleteIcon from '@mui/icons-material/Delete';
import useDelete from "../../hooks/useDelete";
export default function Stores() {

  const { find, handleFind } = useFind()
  const { handleFind: handleFindOne } = useFindOne()
  const { handleDelete } = useDelete()

  useEffect(() => {
    handleFind()
  }, [])
  return (<Box>
    <DataGrid
      rows={find}
      columns={[{
        field: "name",
        headerName: "Nome",
        width: 120
      }, {
        field: "address",
        headerName: "Logradouro",
        width: 120
      }, {
        field: "neighborhood",
        headerName: "Bairro",
        width: 120
      }, {
        field: "uf",
        headerName: "Estado",
        width: 120
      }, {
        field: "cep",
        headerName: "Cep",
        width: 120
      }, {
        field: "contact",
        headerName: "Contato",
        width: 200
      }, {
        field: "action",
        headerName: "Ações",
        width: 120,
        renderCell(param) {
          return (<>
            <Tooltip title="Editar">
              <IconButton onClick={() => handleFindOne(Number(param.id))}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Remover">
              <IconButton onClick={async () => {
                await handleDelete({
                  id: Number(param.id)
                })
                handleFind()

              }}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>)
        }
      }]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      slots={{ toolbar: GridToolbar }}
      pageSizeOptions={[5]}
      disableRowSelectionOnClick
    />
  </Box>)
}