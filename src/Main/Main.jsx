import * as React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardHeader, CardMedia, CardContent, Typography, Grid, Rating } from "@mui/material";

import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Header from "../Header/Header";
import weed from "../Assets/weed.jpeg";
import field from "../Assets/field.jpg";
import Box from "@mui/material/Box";
import Reviews from '../Reviews/Reviews'
import Footer from "../Footer/Footer";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const cards = [
  {
    title: "Indica - $4.20",
    image: weed,
    description: "This impressive indica is a perfect party dish and a fun time to smoke together with your guests.",
    rating: 4.5,
  },
  {
    title: "Sativa - $6.99",
    image: weed,
    description: "A high-energy sativa that keeps you uplifted and creative throughout the day.",
    rating: 4.7,
  },
  {
    title: "Hybrid - $7.49",
    image: weed,
    description: "A well-balanced hybrid that offers the best of both worlds—relaxing yet stimulating.",
    rating: 4.3,
  },
];


function Main() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Header />
      <Typography sx={{fontSize: '45pt', display: 'flex', justifyContent: 'center'}}>Welcome to NYWeedSeeds!!!</Typography>
      <img
  style={{
    display: 'block',
    margin: '0 auto',
    width: '75%',
  }}
  src={field}
  alt="field"
/>

      <Box>
        <Typography sx={{marginTop: 10}}>
        NY Weed Seeds is a family-owned farm nestled in the heart of the Adirondack Mountains, dedicated to cultivating and selling premium, high-end marijuana seeds. With a passion for quality and sustainability, we hand-select and breed top-tier genetics to ensure robust, high-yielding strains. Rooted in tradition and innovation, our farm combines generations of agricultural expertise with modern cultivation techniques to provide growers with the best seeds for their needs. Whether you're a home grower or a commercial cultivator, NY Weed Seeds is committed to delivering excellence—one seed at a time.
        </Typography>
      </Box>
    
    
    
    <Typography sx={{fontSize: '40pt', display: 'flex', justifyContent: 'center', marginTop: 5}}> Top Sellers</Typography>
    
      <Grid container spacing={2} justifyContent="center">
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={card.title} />
            <CardMedia component="img" height="194" image={card.image} alt={card.title} />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {card.description}
              </Typography>
              <Rating value={card.rating} precision={0.5} readOnly />
            </CardContent>
          </Card>
        </Grid>
      ))}
<Reviews/>
    </Grid>
    <Footer/>
    </>
  );
}

export default Main;
