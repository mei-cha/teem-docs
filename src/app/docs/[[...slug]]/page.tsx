import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/notebook/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getPageImageUrl } from '@/lib/shared';
import { icons } from 'lucide-react';
import { createElement } from 'react';

export default async function Page(
  props: PageProps<'/docs/[[...slug]]'>
) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDX = page.data.body;

  const Icon =
    page.data.icon &&
    icons[page.data.icon as keyof typeof icons];

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className="mb-5">
        <DocsTitle>
          <div className="flex items-center gap-3">
            {Icon &&
              createElement(Icon, {
                className: 'size-8 shrink-0',
              })}

            <span>{page.data.title}</span>
          </div>
        </DocsTitle>
      </div>

      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>

      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>

      <div className="mt-12 border-t pt-8 pb-4 text-base text-muted-foreground">
        Jika Anda membutuhkan bantuan lebih lanjut atau mengalami kendala saat menggunakan Teem.id, silakan hubungi kami melalui{' '}
        <a
          href="mailto:info@teem.id"
          className="font-medium text-foreground underline underline-offset-4"
        >
          Pusat Bantuan
        </a>
        .
      </div>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImageUrl(page).url,
    },
  };
}