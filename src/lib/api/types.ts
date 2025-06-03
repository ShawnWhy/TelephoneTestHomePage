/**
 * This file was automatically generated.
 * To regenerate, run `npm run syncData`
 * DO NOT MODIFY IT BY HAND.
 */

export interface ArtistIndex {
  /**
   * All artists that have submitted final/approved artwork. Each artist in the index contains a subset of the full Artist fields
   */
  artists: ArtistSummary[];
  /**
   * UTC time, in ISO format, when the data was last synced
   */
  sync_date: string;
}
export interface ArtistSummary {
  /**
   * What type/genre of artwork this artist produced
   */
  art_form: "DR" | "FI" | "MU" | "LI" | "PA" | "DA" | "PH" | "SC";
  /**
   * The city this artist lives in
   */
  city: string;
  /**
   * Latitude of the city this artist lives in
   */
  city_lat: number;
  /**
   * Longitude of the city this artist lives in
   */
  city_long: number;
  /**
   * First name of the artist
   */
  first_name: string;
  /**
   * Unique identifier for this artist
   */
  id: number;
  /**
   * Last name of the artist
   */
  last_name: string;
  /**
   * ID of the artist that preceded this one. Only `undefined` for the first artist
   */
  parentId?: number;
  /**
   * Low resolution format of the artist's profile picture. Formatted as a path from the root of the API domain
   */
  profile_picture_sm?: string;
  /**
   * URL-friendly unique identifier for this artist (e.g., 'matt-diehl')
   */
  slug: string;
}

export type Submission = AudioSubmission | ImageSubmission | VideoSubmission | WrittenWorkSubmission;

export interface Artist {
  /**
   * What type/genre of artwork this artist produced
   */
  art_form: "DR" | "FI" | "MU" | "LI" | "PA" | "DA" | "PH" | "SC";
  /**
   * HTML content of the artist-provided bio
   */
  bio?: string;
  /**
   * The city this artist lives in
   */
  city: string;
  /**
   * Latitude of the city this artist lives in
   */
  city_lat: number;
  /**
   * Longitude of the city this artist lives in
   */
  city_long: number;
  /**
   * First name of the artist
   */
  first_name: string;
  /**
   * Unique identifier for this artist
   */
  id: number;
  /**
   * Last name of the artist
   */
  last_name: string;
  /**
   * High resolution format of the artist's location picture. Formatted as a path from the root of the API domain
   */
  location_picture_lg?: string;
  /**
   * Low resolution format of the artist's location picture. Formatted as a path from the root of the API domain
   */
  location_picture_sm?: string;
  /**
   * ID of the artist that preceded this one. Only `undefined` for the first artist
   */
  parentId?: number;
  /**
   * HTML content of the artist-provided process statement
   */
  process_statement?: string;
  /**
   * Hight resolution format of the artist's profile picture. Formatted as a path from the root of the API domain
   */
  profile_picture_lg?: string;
  /**
   * Low resolution format of the artist's profile picture. Formatted as a path from the root of the API domain
   */
  profile_picture_sm?: string;
  /**
   * URL-friendly unique identifier for this artist (e.g., 'matt-diehl')
   */
  slug: string;
  /**
   * List of all works this artist submitted, in the order they should be displayed on the site
   */
  submissions: Submission[];
}
export interface AudioSubmission {
  /**
   * Unique identifier for this submission (amongst all submissions)
   */
  id: number;
  /**
   * What `type` of `Submission` this is
   */
  type: "audio";
  /**
   * Location of the audio file. Formatted as a path from the root of the API domain
   */
  url: string;
}
export interface ImageSubmission {
  /**
   * Artist-specified dimensions of the artwork, in no particular format
   */
  dimensions?: string;
  /**
   * Float between 0 and 1 describing the x-axis focal point of the artwork
   */
  focal_x: number;
  /**
   * Float between 0 and 1 describing the x-axis focal point of the artwork
   */
  focal_y: number;
  /**
   * Unique identifier for this submission (amongst all submissions)
   */
  id: number;
  /**
   * High resolution format of the artwork. Formatted as a path from the root of the API domain
   */
  image_lg: string;
  /**
   * Low resolution format of the artwork. Formatted as a path from the root of the API domain
   */
  image_sm: string;
  /**
   * Artist-specified materials used when making the artwork, in no particular format
   */
  materials?: string;
  /**
   * What `type` of `Submission` this is
   */
  type: "image";
}
export interface VideoSubmission {
  /**
   * Unique identifier for this submission (amongst all submissions)
   */
  id: number;
  /**
   * What `type` of `Submission` this is
   */
  type: "video";
  /**
   * URL where this video is hosted (e.g., a vimeo URL)
   */
  url: string;
}
export interface WrittenWorkSubmission {
  /**
   * Unique identifier for this submission (amongst all submissions)
   */
  id: number;
  /**
   * `true` if the work should not automatically wrap lines (poem formatting)
   */
  line_wrap_disabled: boolean;
  /**
   * HTML content of the written work (e.g., poem, story, etc.)
   */
  written_work: string;
  /**
   * What `type` of `Submission` this is
   */
  type: "written_work";
}
