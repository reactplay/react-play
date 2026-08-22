import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Collapse,
  IconButton,
  Typography,
  Button,
  Stack
} from '@mui/material';
import { ExpandMore, ArrowForward, FavoriteBorder } from '@mui/icons-material';

const chipColors = [
  { bg: '#E8F5E9', color: '#2E7D32' },
  { bg: '#E3F2FD', color: '#1565C0' },
  { bg: '#FFF3E0', color: '#E65100' },
  { bg: '#F3E5F5', color: '#7B1FA2' },
  { bg: '#FCE4EC', color: '#C2185B' }
];

const getChipColor = (index) => chipColors[index % chipColors.length];

function RecipeCard({ recipe }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      sx={{
        width: {
          xs: '17rem',
          sm: '19rem',
          md: '20rem'
        },

        // Collapsed height
        minHeight: '20rem',

        flexShrink: 0,
        borderRadius: 3,
        overflow: 'hidden',

        border: '1px solid #E4EAE4',
        boxShadow: '0 4px 18px rgba(31, 75, 34, 0.07)',

        transition: 'box-shadow 0.25s ease, transform 0.25s ease',

        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 8px 25px rgba(31, 75, 34, 0.12)'
        }
      }}
    >
      {/* Fixed 10rem image */}
      <Box
        sx={{
          height: '10rem',
          position: 'relative',
          flexShrink: 0
        }}
      >
        <CardMedia
          alt={recipe.recipe.label}
          component="img"
          image={recipe.recipe.image}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        <IconButton
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,

            width: 32,
            height: 32,

            backgroundColor: 'rgba(255,255,255,0.9)',

            '&:hover': {
              backgroundColor: '#fff'
            }
          }}
        >
          <FavoriteBorder
            sx={{
              fontSize: 18,
              color: '#388E3C'
            }}
          />
        </IconButton>
      </Box>

      <CardContent
        sx={{
          p: 1.75,

          '&:last-child': {
            pb: 1.75
          }
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 750,
            color: '#173B1A',
            lineHeight: 1.25,
            mb: 0.5,

            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {recipe.recipe.label}
        </Typography>

        {/* Ingredient description */}
        <Typography
          sx={{
            fontSize: '0.78rem',
            color: '#718071',
            lineHeight: 1.45,

            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',

            mb: 0.75
          }}
        >
          Made with {recipe.recipe.ingredientLines.join(', ')}.
        </Typography>

        {/* Health benefits toggle */}
        <Button
          endIcon={
            <ExpandMore
              sx={{
                fontSize: '1.1rem !important',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s'
              }}
            />
          }
          size="small"
          sx={{
            minWidth: 0,
            p: 0,
            textTransform: 'none',

            fontSize: '0.78rem',
            fontWeight: 650,
            color: '#388E3C',

            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? 'Hide benefits' : 'Health benefits'}
        </Button>

        {/* Expandable section */}
        <Collapse unmountOnExit in={expanded} timeout={250}>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={0.6}
            sx={{
              mt: 1,
              mb: 0.5
            }}
          >
            {recipe.recipe.healthLabels.map((label, index) => {
              const color = getChipColor(index);

              return (
                <Chip
                  key={label}
                  label={label}
                  size="small"
                  sx={{
                    height: 24,
                    borderRadius: '7px',

                    backgroundColor: color.bg,
                    color: color.color,

                    fontSize: '0.68rem',
                    fontWeight: 650,

                    '& .MuiChip-label': {
                      px: 1
                    }
                  }}
                />
              );
            })}
          </Stack>
        </Collapse>

        {/* Read more */}
        <Button
          fullWidth
          endIcon={<ArrowForward sx={{ fontSize: '1rem !important' }} />}
          href={recipe.recipe.url}
          sx={{
            mt: 1.25,
            height: 34,

            borderRadius: '9px',

            textTransform: 'none',
            fontSize: '0.78rem',
            fontWeight: 700,

            backgroundColor: '#2E7D32',
            boxShadow: 'none',

            '&:hover': {
              backgroundColor: '#1B5E20',
              boxShadow: 'none'
            }
          }}
          variant="contained"
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
}

export default function RecipeSlider({ recipes = [] }) {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2,

          overflowX: 'auto',
          overflowY: 'visible',

          pb: 2,

          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',

          '& > *': {
            scrollSnapAlign: 'start'
          },

          scrollbarWidth: 'none',

          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Box>
    </Box>
  );
}
