import React, { useState, useEffect } from "react";
import { Typography, Button, Box, Grid } from "@mui/material";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getCocktail();
  }, [id]);
  return loading ? (
    <Loading />
  ) : !cocktail ? (
    <Typography
      variant="h4"
      sx={{
        fontFamily: "Roboto Mono, monospace",
      }}
    >
      No cocktail to display
    </Typography>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{
          color: "#fff",
          backgroundColor: "#476a2e",
          transition: "all 0.3s linear",
          "&:hover": {
            backgroundColor: "#d4e6a5",
            color: "#476a2e",
          },
          fontFamily: "Roboto Mono, monospace",
          textTransform: "uppercase",
          letterSpacing: "2px",
          mt: 10,
        }}
      >
        Back Home
      </Button>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Roboto Mono, monospace",
          fontWeight: "bold",
          mt: 4,
        }}
      >
        {cocktail.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
        }}
      >
        <Grid
          container
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={cocktail.image}
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "90%",
                  lg: "80%",
                  xl: "80%",
                },

                borderRadius: "10px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              my: { xs: 1, sm: 1, md: 1, lg: 5, xl: 15 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                my: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  color: "#476a2e",
                  backgroundColor: "#d4e6a5",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  px: 1,
                  py: 0.5,
                }}
              >
                Name:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: "bold",
                  mx: 2,
                }}
              >
                {cocktail.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                my: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  color: "#476a2e",
                  backgroundColor: "#d4e6a5",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  px: 1,
                  py: 0.5,
                }}
              >
                Category:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: "bold",
                  mx: 2,
                }}
              >
                {cocktail.category}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                my: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  color: "#476a2e",
                  backgroundColor: "#d4e6a5",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  px: 1,
                  py: 0.5,
                }}
              >
                Info:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: "bold",
                  mx: 2,
                }}
              >
                {cocktail.info}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                my: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  color: "#476a2e",
                  backgroundColor: "#d4e6a5",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  px: 1,
                  py: 0.5,
                }}
              >
                Glass:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: "bold",
                  mx: 2,
                }}
              >
                {cocktail.glass}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                my: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  color: "#476a2e",
                  backgroundColor: "#d4e6a5",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  px: 1,
                  py: 0.5,
                }}
              >
                Instructions:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: "bold",
                  mx: 2,
                }}
              >
                {cocktail.instructions}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                my: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  color: "#476a2e",
                  backgroundColor: "#d4e6a5",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  px: 1,
                  py: 0.5,
                }}
              >
                Ingredients:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  fontWeight: "bold",
                  mx: 2,
                }}
              >
                {cocktail.ingredients}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SingleCocktail;
