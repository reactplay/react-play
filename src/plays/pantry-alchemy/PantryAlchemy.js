import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { Stack, Typography } from '@mui/material';
import IngredientSearch from './IngredientSearch';

// WARNING: Do not change the entry componenet name
function PantryAlchemy(props) {
  // Example usage: Search for recipes with chicken, garlic, and sweet potato
  // searchByIngredients(['chicken', 'garlic', 'sweet potato']);
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <Stack gap={2} mt={2} width="40rem">
              <Stack textAlign="center">
                <Typography
                  component="h1"
                  sx={{
                    fontSize: {
                      xs: '2rem',
                      sm: '2.5rem',
                      md: '3rem'
                    },
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    lineHeight: 1.1,
                    mb: 1,

                    background: 'linear-gradient(135deg, #1B5E20 0%, #388E3C 45%, #66BB6A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Pantry Alchemy
                </Typography>

                <Typography
                  component="h1"
                  sx={{
                    color: '#6B7D6C',
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    fontWeight: 400,
                    maxWidth: 520,
                    lineHeight: 1.6,
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                  textAlign="center"
                >
                  Turn the ingredients in your pantry into something delicious.
                </Typography>
              </Stack>
              <IngredientSearch />
              <Stack />
            </Stack>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default PantryAlchemy;
