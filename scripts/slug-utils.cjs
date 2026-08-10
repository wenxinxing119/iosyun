/**
 * ASCII slug helpers — prefer readable latin slugs; fall back to App Store id.
 */

function extractTrackId(appStoreUrl) {
  const m = String(appStoreUrl || '').match(/id(\d+)/);
  return m ? m[1] : null;
}

function toAsciiSlug(name) {
  return String(name || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

function generateSlug(name, trackId) {
  const ascii = toAsciiSlug(name);
  const hasCjk = /[\u4e00-\u9fff]/.test(String(name || ''));

  // Pure latin name → readable slug
  if (!hasCjk && ascii) return ascii;

  // Mixed "Forest 专注森林" / "iCost记账"：名称以拉丁字符开头时保留英文部分
  if (
    hasCjk &&
    ascii &&
    ascii.replace(/-/g, '').length >= 3 &&
    /^[a-zA-Z0-9]/.test(String(name || '').trim())
  ) {
    return ascii;
  }

  if (trackId) return 'id' + trackId;
  return ascii || null;
}

function uniqueSlug(base, used) {
  let candidate = base || 'app';
  let n = 1;
  while (used.has(candidate)) {
    candidate = (base || 'app') + '-' + (++n);
  }
  used.add(candidate);
  return candidate;
}

function isAsciiSlug(slug) {
  return typeof slug === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

module.exports = {
  extractTrackId,
  toAsciiSlug,
  generateSlug,
  uniqueSlug,
  isAsciiSlug,
};
