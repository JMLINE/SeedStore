import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, Instagram, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#2e2e2e", color: "white", py: 3, mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {/* Company Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              NY Weed Seeds
            </Typography>
            <Typography variant="body2">
              High-end marijuana seeds, grown with care in the Adirondack Mountains.
            </Typography>
          </Grid>

          {/* Disclaimer */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Disclaimer
            </Typography>
            <Typography variant="body2">
              You must be **21 or older** to purchase. Please follow local laws and regulations.
            </Typography>
          </Grid>

          {/* Contact & Social Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email:{" "}
              <Link href="mailto:support@nyweedseeds.com" color="inherit" underline="hover">
                support@nyweedseeds.com
              </Link>
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <Link href="https://facebook.com" color="inherit" target="_blank">
                <Facebook />
              </Link>
              <Link href="https://instagram.com" color="inherit" target="_blank">
                <Instagram />
              </Link>
              <Link href="mailto:support@nyweedseeds.com" color="inherit">
                <Email />
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="body2">© {new Date().getFullYear()} NY Weed Seeds. All Rights Reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
}
