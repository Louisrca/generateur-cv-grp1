import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

export default function CardWrapper({ children }) {
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
