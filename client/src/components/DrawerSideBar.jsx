
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  drawer: {
    width: "500px !important",
  },
  bar: {
    color: "white",
  },
  searchBtn: {
    color: "white",
  },
});
const DrawerSideBar = () => {
  var draw = useSelector((store) => {
    return store.sidebar;
  });
  console.log("draw");

  const classes = useStyles();

  return (
    <>
      
    </>
  );
};
export { DrawerSideBar };
