import useContributors from 'common/hooks/useContributors';

function AllContributors() {
  const { data, error, isLoading } = useContributors(true);

  return (
    <div>
      <h1>All Contributors</h1>
    </div>
  );
}

export default AllContributors;
