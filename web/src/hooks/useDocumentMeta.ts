import { useEffect } from 'react';

type MetaOptions = {
  title: string;
  description: string;
};

export function useDocumentMeta({ title, description }: MetaOptions) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [description, title]);
}
