import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { docs, meta } from 'collections/server';
import { icons } from 'lucide-react';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/docs',
  source: toFumadocsSource(docs, meta),

  icon(icon) {
    if (!icon) return;

    const Icon = icons[icon as keyof typeof icons];

    if (!Icon) return;

    return createElement(Icon);
  },
});