import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Characters from '../Characters';
import CharacterSearchService from '../../../services/CharacterSearchService';

jest.mock('../../../services/CharacterSearchService');

describe('Characters component unit tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the search input and button', () => {
    render(<Characters />);
    const searchInput = screen.getByPlaceholderText('Search for Character');
    const searchButton = screen.getByText('Search');
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('calls searchCharacter function when search button is clicked', async () => {
    render(<Characters />);
    const searchButton = screen.getByText('Search');

    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(CharacterSearchService.searchCharacter).toHaveBeenCalledTimes(1);
    });
  });

  it('calls searchCharacter function when Enter key is pressed', async () => {
    render(<Characters />);
    const searchInput = screen.getByPlaceholderText('Search for Character');

    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      expect(CharacterSearchService.searchCharacter).toHaveBeenCalledTimes(1);
    });
  });

  describe('Characters component integration test', () => {
    it('fetches and displays search result correctly', async () => {
      const mockCharacters = [
        {
          name: 'Luke Skywalker',
          height: '180',
          mass: '75',
          hair_color: 'Brown',
          birth_year: '19BBY',
          films: [],
          species: [],
          starships: [],
        },
        {
          name: 'Han Solo',
          height: '170',
          mass: '65',
          hair_color: 'Blonde',
          birth_year: '20BBY',
          films: [],
          species: [],
          starships: [],
        },
      ];

      const searchCharacterSpy = jest.spyOn(
        CharacterSearchService,
        'searchCharacter',
      );
      searchCharacterSpy.mockResolvedValue(mockCharacters);

      const { getByPlaceholderText, getByText, findByTestId } = render(
        <Characters />,
      );

      const searchInput = getByPlaceholderText('Search for Character');
      const searchButton = getByText('Search');

      fireEvent.change(searchInput, { target: { value: 'Character' } });
      fireEvent.click(searchButton);

      await findByTestId('loading-spinner');

      await waitFor(() => {
        expect(searchCharacterSpy).toHaveBeenCalledWith('Character');
      });

      // Assert that the Profile component is rendered for each character
      mockCharacters.forEach((character) => {
        expect(getByText(character.name)).toBeInTheDocument();
        expect(getByText(`${character.height} cms`)).toBeInTheDocument();
        expect(getByText(`${character.mass} kgs`)).toBeInTheDocument();
        expect(getByText(character.hair_color)).toBeInTheDocument();
        expect(getByText(character.birth_year)).toBeInTheDocument();
      });

      searchCharacterSpy.mockRestore();
    });
  });
});
