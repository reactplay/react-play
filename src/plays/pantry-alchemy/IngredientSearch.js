import { useEffect, useState } from 'react';
import { Autocomplete, TextField, Chip, CircularProgress, Box, Stack, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RecipeSlider from './RecipeSlider';

export default function IngredientAutocomplete({ onSubmit }) {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeLoading, setRecipeLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const appId = '65a07d9b';
  const appKey = '614cce709d8bbd26d92c35013e5d7861';

  async function searchRecipe(ingredientsArray) {
    // Join array of ingredients: ['chicken', 'garlic', 'spinach'] -> "chicken garlic spinach"
    const searchQuery = ingredientsArray
      .map((item) => (item.includes(' ') ? `"${item}"` : item))
      .join(' ');

    const params = new URLSearchParams({
      type: 'public',
      q: searchQuery,
      app_id: appId,
      app_key: appKey
    });

    const url = `https://api.edamam.com/api/recipes/v2?${params.toString()}`;

    try {
      setRecipeLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setRecipeLoading(false);
    }
  }

  async function searchIngredients(query) {
    if (!query.trim()) return [];

    const url =
      `https://world.openfoodfacts.org/api/v3/taxonomy_suggestions` +
      `?tagtype=ingredients` +
      `&lc=en` +
      `&string=${encodeURIComponent(query)}` +
      `&limit=10`;

    const response = await fetch(url);
    const data = await response.json();

    return data.suggestions || [];
  }
  useEffect(() => {
    const query = inputValue.trim();

    // Don't search for very short queries
    if (query.length < 2) {
      setOptions([]);

      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setLoading(true);

        const data = await searchIngredients(query);

        setOptions(data.map((item) => ({ id: item, label: item })));
      } catch (error) {
        console.error('Failed to search ingredients:', error);
        setOptions([]);
      } finally {
        setLoading(false);
      }
    }, 400); // debounce

    return () => clearTimeout(timeout);
  }, [inputValue]);

  return (
    <Box sx={{ width: '100%' }}>
      <Stack gap={2}>
        <Stack alignItems="center" flexDirection="row" gap={2}>
          <Autocomplete
            filterSelectedOptions
            fullWidth
            multiple
            getOptionLabel={(option) => option.label || ''}
            inputValue={inputValue}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            loading={loading}
            loadingText="Searching..."
            noOptionsText={inputValue.length < 2 ? 'Search Ingredients' : 'No ingredients found'}
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={value.length ? 'Add another ingredient...' : 'Search ingredients...'}
                slotProps={{
                  input: {
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading && <CircularProgress color="success" size={20} />}
                        {params.InputProps.endAdornment}
                      </>
                    )
                  }
                }}
                sx={{
                  '& .MuiAutocomplete-input': {
                    border: 'none !important'
                  },
                  '& .MuiOutlinedInput-root': {
                    minHeight: 56,
                    borderRadius: '14px',
                    backgroundColor: '#fff',
                    border: 'none',
                    // Remove black/default border
                    '& fieldset': {
                      border: '1px solid #E0E0E0'
                    },

                    '&:hover fieldset': {
                      border: '1px solid #BDBDBD'
                    },

                    '&.Mui-focused fieldset': {
                      border: '2px solid #4CAF50'
                    },

                    // Remove black focus outline
                    '&.Mui-focused': {
                      outline: 'none',
                      boxShadow: '0 0 0 3px rgba(76, 175, 80, 0.12)'
                    }
                  },

                  '& .MuiInputBase-input': {
                    outline: 'none !important',
                    boxShadow: 'none !important'
                  }
                }}
              />
            )}
            renderTags={(selected, getTagProps) =>
              selected.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={option.id}
                  label={option.label}
                  size="small"
                  sx={{
                    borderRadius: '8px',
                    fontWeight: 500,
                    backgroundColor: '#E8F5E9',
                    color: '#2E7D32',
                    '& .MuiChip-deleteIcon': {
                      color: '#4CAF50',

                      '&:hover': {
                        color: '#1B5E20'
                      }
                    }
                  }}
                />
              ))
            }
            slotProps={{
              paper: {
                sx: {
                  mt: 1,
                  borderRadius: '14px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.10)',
                  overflow: 'hidden'
                }
              },
              listbox: {
                sx: {
                  p: '6px',

                  '& .MuiAutocomplete-option': {
                    borderRadius: '9px',
                    padding: '10px 12px',
                    marginBottom: '2px',

                    '&:hover': {
                      backgroundColor: '#F1F8F2'
                    },

                    "&[aria-selected='true']": {
                      backgroundColor: '#E8F5E9',
                      color: '#2E7D32'
                    }
                  }
                }
              }
            }}
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            onInputChange={(_, newInputValue) => {
              setInputValue(newInputValue);
            }}
          />
          <Button
            fullWidth
            disabled={recipeLoading || value.length === 0}
            endIcon={!recipeLoading && <SearchIcon sx={{ fontSize: '1rem !important' }} />}
            sx={{
              width: '6rem',
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
            onClick={() => {
              searchRecipe(value.map((v) => v.id));
            }}
          >
            {recipeLoading ? <CircularProgress size={23} sx={{ color: '#9E9E9E' }} /> : 'Search'}
          </Button>
        </Stack>

        <Stack>
          <RecipeSlider recipes={recipes} />
        </Stack>
      </Stack>
    </Box>
  );
}
