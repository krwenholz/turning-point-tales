import { prettyDOM, queryAllByText, queryByText, getByText, getAllByText } from '@testing-library/dom'
import { render, fireEvent } from '@testing-library/svelte'
import storyWithConsequences from 'src/lib/local-stories/story-with-consequences';
import TabsWithSelected from './TabsWithSelected.svelte';
import TabsWithNoSelection from './TabsWithNoSelection.svelte';

describe('<Tabs/> with a selected tab', () => {
  it('renders with the selected tab', async () => {
    const { container } = render(TabsWithSelected);
    expect(queryByText(container, 'Second Panel Content')).toBeInTheDocument();
  });

  it('does not render the unselected tab content', async () => {
    const { container } = render(TabsWithSelected);
    expect(queryByText(container, 'First Panel Content')).toBe(null);
  });
})

describe('<Tabs/> no tab initially selected', () => {
  it('renders with the first tab by default, if no selected given', async () => {
    const { container } = render(TabsWithNoSelection);
    expect(queryByText(container, 'First Panel Content')).toBeInTheDocument();
  });

  it('does not render the second panel content', async () => {
    const { container } = render(TabsWithNoSelection);
    expect(queryByText(container, 'Second Panel Content')).toBe(null)
  });
})
