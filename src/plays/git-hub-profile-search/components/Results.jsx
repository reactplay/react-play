import React from 'react';
import { useResultContext } from '../context/ResultContextProvider';

const Results = () => {

    const { results, repoDetails } = useResultContext();

    const showRepo = (repo) => {
        return (
            <div key={repo.id}>
                <h2 className='repo-link'>
                    <strong>
                        <a href={`${repo.html_url}`} target="_blank" rel='noreferrer'>
                            {repo.name}
                        </a>
                    </strong>
                </h2>
            </div>
        )
    }

    return (
        <div className="play-results">
            {results ? (
                <div className='play-results-body'>
                    <div>
                        <div className='profile-details'>
                            <img src={`${results.avatar_url}`} alt={`${results.name}`} className="avatar" />
                            <a href={`${results.html_url}`} target="_blank" rel='noreferrer'>
                                <h2 className='profile-link'>{results.name === '' ? results.login : results.name}</h2>
                            </a>
                        </div>
                        <div className="results-info">
                            <div>
                                {results.bio === '' ? '' : <h2 className='bio'><strong>Bio:</strong> {results.bio}</h2>}
                                {results.location === '' ? '' : <p className='location'><strong>Location:</strong> {results.location}</p>}
                                {results.twitter_username === '' ? '' : <p className='twitter'><strong>Twitter:</strong> <a href={`https://twitter.com/${results.twitter_username}`} target="_blank" rel='noreferrer' style={{ color: '#010326' }}>{results.twitter_username}</a></p>}
                                <ul className='profile'>
                                    <li><strong>{results.followers}</strong> Followers</li>
                                    <li><strong>{results.following}</strong> Following</li>
                                    <li><strong>{results.public_repos}</strong> Repos</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='repos-heading'>
                                    Latest repositories
                                </h2>
                                <div className='repos'>
                                    {repoDetails?.map(showRepo).slice(0, 5)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
                :
                (
                    <div className='play-results-error'>
                        <p>
                            No users to show
                        </p>
                    </div>
                )}
        </div>
    )
}

export default Results