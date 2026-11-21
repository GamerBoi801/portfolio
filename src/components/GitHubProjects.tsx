import React, { useState, useEffect } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

interface Props {
  username?: string;
  limit?: number;
}

export default function GitHubProjects({ username = 'GamerBoi801', limit = 6 }: Props) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=15`
      );
      if (!response.ok) {
        throw new Error(`GitHub API returned HTTP ${response.status} (${response.statusText})`);
      }
      const data: GitHubRepo[] = await response.json();
      const nonForks = data.filter((r) => !r.fork).slice(0, limit);
      setRepos(nonForks.length > 0 ? nonForks : data.slice(0, limit));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch repositories from GitHub.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [username, limit]);

  return (
    <div className="w-full">
      {/* Loading State */}
      {loading && (
        <div className="matrix-card p-6 border-accent/40 bg-accent/5 font-mono text-xs">
          <div className="flex items-center gap-2 text-accent mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>Querying https://api.github.com/users/{username}/repos ...</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-28 border border-border/60 bg-bg/60 rounded-[2px] p-4 flex flex-col justify-between"
              >
                <div className="h-4 bg-border/80 rounded w-2/3" />
                <div className="h-3 bg-border/40 rounded w-full" />
                <div className="h-3 bg-border/40 rounded w-1/3" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="matrix-card p-6 border-red-500/40 bg-red-500/5 font-mono text-xs text-red-400">
          <div className="flex items-center gap-2 mb-2 font-semibold">
            <span>[!] API Error:</span>
            <span>{error}</span>
          </div>
          <p className="text-muted mb-4 font-serif text-xs">
            Unable to fetch real-time repositories from GitHub. You may be offline or rate-limited by GitHub.
          </p>
          <button
            type="button"
            onClick={fetchRepos}
            className="px-3 py-1.5 border border-red-500/40 hover:bg-red-500/10 text-red-300 rounded-[2px] transition-colors cursor-pointer"
          >
            Retry Connection &rarr;
          </button>
        </div>
      )}

      {/* Success State */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="matrix-card p-5 group flex flex-col justify-between transition-all duration-200 hover:border-accent"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-mono text-sm font-semibold text-heading group-hover:text-accent transition-colors truncate">
                    {repo.name}
                  </h3>
                  {repo.language && (
                    <span className="font-mono text-[10px] px-1.5 py-0.5 border border-border bg-bg text-accent rounded-[2px]">
                      {repo.language}
                    </span>
                  )}
                </div>
                <p className="font-serif text-xs text-text/80 line-clamp-2 mb-4">
                  {repo.description || 'Public repository on GitHub.'}
                </p>
              </div>

              <div className="flex items-center justify-between font-mono text-xs text-muted pt-3 border-t border-border/40">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[11px]">
                    <span className="text-accent">&star;</span>
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <span>forks:</span>
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-xs flex items-center gap-1"
                >
                  <span>code</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
