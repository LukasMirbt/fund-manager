import React from "react";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";

const Title = () => {
  const { pathname } = useRouter();

  const title =
    pathname === "/" ? "Fund Manager" : pathname.slice(1).replace(/-+/g, " ");

  return pathname === "/" ? (
    <Typography variant="h6" component="span" noWrap>
      {title}
    </Typography>
  ) : (
    <Typography variant="h6" component="h1" noWrap>
      {title[0].toUpperCase() + title.slice(1)}
    </Typography>
  );
};

export default Title;
