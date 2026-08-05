# Truthonly.com Website TODO

- [ ] Upgrade to Astro 3.0
- [ ] Add [scroll progress](https://twitter.com/jh3yy/status/1664380461110493185?s=09&t=nZNpglpGEoAd2eNE1VNGQQ)
- [ ] Host on Cloudflare with functions interface: https://taras.glek.net/post/cloudflare-pages-kind-of-amazing/?utm_source=pocket_saves
- [ ] switch over to https://andybrewer.github.io/mvp/?utm_source=pocket_saves
- [ ] consider https://www.matuzo.at/blog/html-boilerplate/?utm_source=pocket_saves

# https://every-layout.dev/ || https://grid.layoutit.com/

# imitate colors from: https://perceptive.io/

# JetBrains Mono is the best monospace font! Fira Sans Condensed Light is the best Sans font

## Considerations

- Google banner ads destroy traffic on A/B testing: https://www.gwern.net/Ads


Built using `astro.build` static site generator.

## DNS Configuration

- **truthonly.com A** Record pointing to Github servers IP set
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- **truthonly.com AAAA** Record pointing to Github servers IPv6 set
  ```
  2606:50c0:8000::153
  2606:50c0:8001::153
  2606:50c0:8002::153
  2606:50c0:8003::153
  ```
- **www.truthonly.com CNAME** Record to redirect traffic to the apex domain
  ```
  truthonly.com.
  ```
