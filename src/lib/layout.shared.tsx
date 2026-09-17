import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <img
            src="/logo_v1.webp"
            alt="Teem.id"
            className="h-8 w-auto object-contain dark:hidden"
          />

          <img
            src="/logo_v2.webp"
            alt="Teem.id"
            className="hidden h-8 w-auto object-contain dark:block"
          />
        </div>
      ),
      url: '/docs',
    },

    searchToggle: {
      enabled: true,
    },

    themeSwitch: {
      enabled: true,
    },

    i18n: false,
  };
}