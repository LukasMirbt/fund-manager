import React from "react";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";

const Title = () => {
  const { pathname } = useRouter();

  const title =
    pathname === "/" ? "fund manager" : pathname.slice(1).replace(/-+/g, " ");

  return (
    <Typography variant="h6" component="h1" noWrap>
      {title[0].toUpperCase() + title.slice(1)}
    </Typography>
  );
};

export default Title;
