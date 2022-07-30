import React from 'react';
import { useResultContext } from '../context/ResultContextProvider';

const Results = () => {

    const { results, repoDetails } = useResultContext();

    const showRepo = (repo) => {
        return (
            <div key={repo.id}>
                <h2 className='nirban-github-profile-repo-link'>
                    <strong>
                        <a href={`${repo.html_url}`} target="_blank" rel='noreferrer'>
                            {repo.name.length > 15 ? repo.name.slice(0, 15) : repo.name}
                        </a>
                    </strong>
                </h2>
            </div>
        )
    }

    return (

        <div>
            {results ? (
                <div className="nirban-github-profile-results" >
                    <div className='nirban-github-profile-results-body'>
                        <div>
                            <div className='nirban-github-profile-details'>
                                <img src={`${results.avatar_url}`} alt={`${results.name}`} className="nirban-github-profile-avatar" />
                                <a href={`${results.html_url}`} target="_blank" rel='noreferrer'>
                                    <h2 className='nirban-github-profile-link'>{results.name === '' ? results.login : results.name}</h2>
                                </a>
                            </div>
                            <div className="nirban-github-profile-results-info">
                                <div>
                                    {results.bio === '' ? '' : <h2 className='nirban-github-profile-bio'><strong>Bio:</strong> {results.bio}</h2>}
                                    {results.location === '' ? '' : <p className='nirban-github-profile-location'><strong>Location:</strong> {results.location}</p>}
                                    {results.twitter_username === '' ? '' : <p className='nirban-github-profile-twitter'><strong>Twitter:</strong> <a href={`https://twitter.com/${results.twitter_username}`} target="_blank" rel='noreferrer'>{results.twitter_username}</a></p>}
                                    <ul className='nirban-github-profile-socials'>
                                        <li><strong>{results.followers}</strong> Followers</li>
                                        <li><strong>{results.following}</strong> Following</li>
                                        <li><strong>{results.public_repos}</strong> Repos</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='nirban-github-profile-repos-heading'>
                                        Latest repositories
                                    </h2>
                                    <div className='nirban-github-profile-repos'>
                                        {repoDetails?.map(showRepo).slice(0, 5)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
                :
                (
                    <div className='nirban-github-profile-no-user'>
                        <p>
                            No users to show
                        </p >
                    </div >
                )}
        </div>
    )
}

export default Results