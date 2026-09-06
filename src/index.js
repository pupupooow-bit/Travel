// Static assets (public/) are served directly by Cloudflare without invoking
// this Worker. This minimal handler only answers requests that do not match
// an asset, which keeps wrangler.toml valid.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
