import React from "react";
import Slider from "react-slick";
import { Card, CardContent, Typography, Rating, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "John D.",
    rating: 5,
    comment: "Absolutely top-quality seeds! The germination rate was perfect, and the plants turned out amazing.",
  },
  {
    name: "Sarah W.",
    rating: 4.5,
    comment: "Great genetics! My plants grew strong and healthy. Will definitely buy again.",
  },
  {
    name: "Mike R.",
    rating: 5,
    comment: "Best seeds I’ve ever used. Fast shipping and great customer service.",
  },
  {
    name: "Emily L.",
    rating: 4,
    comment: "Very satisfied! The strain variety is excellent, and the results speak for themselves.",
  },
];

export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "0 auto", padding: 2 }}>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Card key={index} sx={{ padding: 2, textAlign: "center" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {review.name}
              </Typography>
              <Rating value={review.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ marginTop: 1, color: "text.secondary" }}>
                "{review.comment}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}
