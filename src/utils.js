export function formatUserName(user) {
  if (!user || !user.name) return "Unknown";
  return user.name.toUpperCase();
}
