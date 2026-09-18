import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  const { nav, ...base } = baseOptions();

return (
  <DocsLayout
    {...base}
    nav={nav}
    tree={source.getPageTree()}
    tabMode="navbar"
  >
    {children}
  </DocsLayout>
);
}