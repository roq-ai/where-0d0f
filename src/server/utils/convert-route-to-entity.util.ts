const mapping: Record<string, string> = {
  comments: 'comment',
  events: 'event',
  'event-categories': 'event_category',
  'event-medias': 'event_media',
  likes: 'like',
  locations: 'location',
  organizations: 'organization',
  posts: 'post',
  users: 'user',
  'user-followers': 'user_followers',
  'user-likes': 'user_likes',
  'user-profiles': 'user_profile',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
