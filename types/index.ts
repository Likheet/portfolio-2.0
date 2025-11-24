export type Next_Page_Url = string;
// UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export interface IProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
    // New rich content fields
    challenge?: string;
    solution?: string;
    impact?: string;
    key_features?: string[];
    team_size?: string;
    duration?: string;
}

export interface IPublication {
    title: string;
    conference: string;
    year: string;
    url?: string;
    description?: string;
    // New rich content fields
    abstract?: string;
    key_contributions?: string[];
    methodology?: string; // Could be a description or steps
    results?: string; // Key metrics
    citation?: string;
}
