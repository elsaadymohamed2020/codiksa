import { groq } from 'next-sanity'

export const ALL_SERVICES_QUERY = groq`*[_type == "service"]`
export const ALL_PROJECTS_QUERY = groq`*[_type == "project"]`
export const ALL_TEAM_QUERY = groq`*[_type == "team"]`
export const LATEST_POSTS_QUERY = groq`*[_type == "post"] | order(publishedAt desc) [0..2]`
