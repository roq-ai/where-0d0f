interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Event Organizer'],
  customerRoles: ['Customer'],
  tenantRoles: ['Event Organizer', 'Event Staff', 'Business Owner', 'Business Employee', 'End User'],
  tenantName: 'Organization',
  applicationName: 'WHERE',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read event information',
    'Like and comment on posts',
    'Follow other users',
    'Update personal user profile',
  ],
  ownerAbilities: [
    'Manage events',
    'Manage posts related to the events',
    'Edit organization information',
    'Manage event media',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/3c5f46d4-bbcb-46e1-ab07-3d373768bc07',
};
