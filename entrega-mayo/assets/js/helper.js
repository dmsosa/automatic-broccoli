// Source - https://stackoverflow.com/a/43467144
// Posted by Pavlo, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-20, License - CC BY-SA 4.0

export function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
