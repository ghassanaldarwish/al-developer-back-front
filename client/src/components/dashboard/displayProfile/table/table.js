import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from '@material-ui/core/Typography';
import Moment from "react-moment";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  button: {
    margin: theme.spacing.unit
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  table: {
   Width: '100%',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Typography component="h2" variant="headline" gutterBottom>
      {props.headerTitle}
        </Typography>
     
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>{props.companyOrSchool}</CustomTableCell>
            <CustomTableCell>{props.titleOrDegree}</CustomTableCell>
            <CustomTableCell>{props.locationOrStudyField}</CustomTableCell>
            <CustomTableCell>{props.years}</CustomTableCell>
            <CustomTableCell>  </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.itemsInfo.map(item => {
            return (
              <TableRow className={classes.row} key={item._id}>
                <CustomTableCell component="th" scope="row">
                  {item.company || item.school}
                </CustomTableCell>
              
                <CustomTableCell >{item.title || item.degree}</CustomTableCell>
                <CustomTableCell >{item.location || item.fieldofstudy}</CustomTableCell>
          
                <CustomTableCell >

                     <Moment format="YYYY/MM/DD">{item.from}</Moment> -{" "}
                    {item.current ? (
                      "current"
                    ) : (
                      <Moment format="YYYY/MM/DD">{item.to}</Moment>
                    )}
                </CustomTableCell>
                <CustomTableCell >
                <IconButton
                      onClick={() => props.deleteHandler(item._id)}
                      color="secondary"
                      aria-label="Delete"
                      className={classes.button}
                    >
                      <DeleteIcon />
                    </IconButton>
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}


export default withStyles(styles)(CustomizedTable);