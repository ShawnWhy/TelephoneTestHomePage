import type { Artist, ArtistSummary } from "./types";

export const BASE_URL = "https://exhibit-2024-static-api.pages.dev";

const cache: { artists?: ArtistSummary[] } = {};

/**
 * Fetches an index of all artists from the API
 * Uses an in-memory cache to avoid redundant API calls.
 */
export async function fetchAllArtists(): Promise<ArtistSummary[]> {
    if (cache.artists) {
        return cache.artists;
    }
    const response = await fetch(`${BASE_URL}/api/artists/index.json`);
    if (!response.ok) {
        throw new Error(`Failed to fetch artists: ${response.statusText}`);
    }
    const data = await response.json();
    cache.artists = data.artists;
    return data.artists;
}

/**
 * Fetches a single artist by their ID.
 * First checks the cache if available, otherwise makes an API request.
 */
export async function fetchArtistById(id: number): Promise<Artist | null> {
    const response = await fetch(`${BASE_URL}/api/artists/${id}/index.json`);
    if (!response.ok) {
        if (response.status === 404) {
            return null;
        }
        throw new Error(`Failed to fetch artist ${id}: ${response.statusText}`);
    }
    return response.json();
}

/**
 * Fetches all artists that have the specified artist as their parent.
 */
export async function fetchChildrenOfArtist(artist: Artist): Promise<ArtistSummary[]> {
    const artists = await fetchAllArtists();
    return artists.filter(a => a.parentId === artist.id);
}

/**
 * Fetches all parent artists in the hierarchy for a given artist.
 * Recursively traverses up the parent chain until reaching the root.
 */
export async function fetchParentsOfArtist(artist: Artist): Promise<ArtistSummary[]> {
    const artists: ArtistSummary[] = [];
    if (artist.parentId) {
        const parent = await fetchArtistById(artist.parentId);
        if (parent) {
            artists.push(parent);                
            artists.push(...(await fetchParentsOfArtist(parent)));
        }
    }

    return artists;
}
